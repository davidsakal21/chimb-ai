import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import pdfParse from 'pdf-parse';
import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    // Parse the multipart form data
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Extract text from PDF
    const pdfData = await pdfParse(buffer);
    const text = pdfData.text;

    // Analyze with OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a VC analyst. Analyze the following pitch deck and score it from 1 to 10. Then summarize: 1) Problem, 2) Solution, 3) Market, 4) Business Model, 5) Team."
        },
        {
          role: "user",
          content: text
        }
      ],
      temperature: 0.7,
    });

    const analysis = completion.choices[0].message.content || '';

    // Parse the analysis to extract score and sections
    const scoreMatch = analysis.match(/\b([1-9]|10)\b/);
    const score = scoreMatch ? parseInt(scoreMatch[0]) : null;

    // Extract sections using regex
    const sections = {
      problem: extractSection(analysis, "Problem"),
      solution: extractSection(analysis, "Solution"),
      market: extractSection(analysis, "Market"),
      businessModel: extractSection(analysis, "Business Model"),
      team: extractSection(analysis, "Team"),
    };

    return NextResponse.json({
      score,
      sections,
      rawAnalysis: analysis
    });

  } catch (error) {
    console.error('Error processing PDF:', error);
    return NextResponse.json(
      { error: 'Error processing PDF' },
      { status: 500 }
    );
  }
}

// Helper function to extract sections from the analysis
function extractSection(text: string, sectionName: string): string {
  const regex = new RegExp(`${sectionName}[\\s:]+(.*?)(?=\\d\\)|$)`, 's');
  const match = text.match(regex);
  return match ? match[1].trim() : '';
} 