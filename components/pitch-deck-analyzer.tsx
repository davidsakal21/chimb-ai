"use client"

import { useState } from "react"
import { FileUploader } from "./file-uploader"
import { ResultCard } from "./result-card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"

type AnalysisResult = {
  score: number | null
  sections: {
    problem: string
    solution: string
    market: string
    businessModel: string
    team: string
  }
  rawAnalysis: string
}

export function PitchDeckAnalyzer() {
  const [file, setFile] = useState<File | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile)
    // Reset states when a new file is selected
    setResult(null)
    setError(null)
  }

  const handleSubmit = async () => {
    if (!file) return

    setIsAnalyzing(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to analyze pitch deck')
      }

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error("Error analyzing pitch deck:", error)
      setError(error instanceof Error ? error.message : 'An error occurred while analyzing the pitch deck')
      toast.error('Failed to analyze pitch deck')
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="space-y-8">
      <FileUploader file={file} onFileChange={handleFileChange} />

      <div className="flex justify-center">
        <Button 
          onClick={handleSubmit} 
          disabled={!file || isAnalyzing} 
          size="lg" 
          className="w-full sm:w-auto"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Analyze Pitch Deck"
          )}
        </Button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {result && <ResultCard result={result} />}
    </div>
  )
}

