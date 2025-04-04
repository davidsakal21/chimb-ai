import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface ResultCardProps {
  result: {
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
}

export function ResultCard({ result }: ResultCardProps) {
  const { score, sections } = result

  // Determine score color based on value
  const getScoreColor = (score: number | null) => {
    if (!score) return "text-gray-600"
    if (score >= 8) return "text-green-600"
    if (score >= 6) return "text-yellow-600"
    return "text-red-600"
  }

  // Determine progress color based on score
  const getProgressColor = (score: number | null) => {
    if (!score) return "bg-gray-600"
    if (score >= 8) return "bg-green-600"
    if (score >= 6) return "bg-yellow-600"
    return "bg-red-600"
  }

  const renderSection = (title: string, content: string) => (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">{title}</h3>
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-700 leading-relaxed">{content || 'No information provided'}</p>
      </div>
    </div>
  )

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gray-50 pb-4">
        <CardTitle className="text-xl">Analysis Results</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Pitch Deck Score</h3>
            <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
              {score ? `${score}/10` : 'N/A'}
            </span>
          </div>
          {score && (
            <Progress 
              value={score * 10} 
              className={`h-2 ${getProgressColor(score)}`}
            />
          )}
        </div>

        <div className="space-y-4">
          {renderSection("Problem", sections.problem)}
          {renderSection("Solution", sections.solution)}
          {renderSection("Market", sections.market)}
          {renderSection("Business Model", sections.businessModel)}
          {renderSection("Team", sections.team)}
        </div>
      </CardContent>
    </Card>
  )
}

