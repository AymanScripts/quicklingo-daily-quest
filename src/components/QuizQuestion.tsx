
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  onAnswer: (correct: boolean) => void;
  explanation?: string;
}

const QuizQuestion = ({ question, options, correctAnswer, onAnswer, explanation }: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    const isCorrect = index === correctAnswer;
    
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 2000);
  };

  const getButtonVariant = (index: number) => {
    if (!showResult) return "outline";
    if (index === correctAnswer) return "default";
    if (index === selectedAnswer && index !== correctAnswer) return "destructive";
    return "outline";
  };

  const getButtonIcon = (index: number) => {
    if (!showResult) return null;
    if (index === correctAnswer) return <CheckCircle className="w-4 h-4 ml-2" />;
    if (index === selectedAnswer && index !== correctAnswer) return <XCircle className="w-4 h-4 ml-2" />;
    return null;
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-8">
        <h2 className="text-xl font-semibold mb-6 text-center">{question}</h2>
        
        <div className="space-y-3">
          {options.map((option, index) => (
            <Button
              key={index}
              variant={getButtonVariant(index)}
              className="w-full justify-between text-left p-4 h-auto"
              onClick={() => handleAnswer(index)}
              disabled={showResult}
            >
              <span>{option}</span>
              {getButtonIcon(index)}
            </Button>
          ))}
        </div>
        
        {showResult && explanation && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">{explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;
