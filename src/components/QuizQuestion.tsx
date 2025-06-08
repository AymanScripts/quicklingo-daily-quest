
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, Volume2, Mic } from "lucide-react";
import { Question } from "@/data/lessons";

interface QuizQuestionProps {
  question: Question;
  onAnswer: (correct: boolean) => void;
}

const QuizQuestion = ({ question, onAnswer }: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setTextAnswer("");
    setShowResult(false);
    setIsRecording(false);
  }, [question]);

  const handleMultipleChoiceAnswer = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    const isCorrect = index === question.correctAnswer;
    
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 2000);
  };

  const handleTextAnswer = () => {
    if (showResult || !textAnswer.trim()) return;
    
    setShowResult(true);
    const isCorrect = textAnswer.toLowerCase().trim() === question.correctText?.toLowerCase().trim();
    
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 2000);
  };

  const handleSpeakingAnswer = () => {
    if (showResult) return;
    
    setIsRecording(true);
    // Simulate recording for 3 seconds
    setTimeout(() => {
      setIsRecording(false);
      setShowResult(true);
      // For demo purposes, assume speaking answers are always correct
      setTimeout(() => {
        onAnswer(true);
      }, 1000);
    }, 3000);
  };

  const playAudio = () => {
    if (question.audioUrl) {
      // In a real app, you would play the audio file here
      console.log("Playing audio:", question.audioUrl);
    }
  };

  const getButtonVariant = (index: number) => {
    if (!showResult) return "outline";
    if (index === question.correctAnswer) return "default";
    if (index === selectedAnswer && index !== question.correctAnswer) return "destructive";
    return "outline";
  };

  const getButtonIcon = (index: number) => {
    if (!showResult) return null;
    if (index === question.correctAnswer) return <CheckCircle className="w-4 h-4 ml-2" />;
    if (index === selectedAnswer && index !== question.correctAnswer) return <XCircle className="w-4 h-4 ml-2" />;
    return null;
  };

  const renderQuestionContent = () => {
    switch (question.type) {
      case "multiple-choice":
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <Button
                key={index}
                variant={getButtonVariant(index)}
                className="w-full justify-between text-left p-4 h-auto"
                onClick={() => handleMultipleChoiceAnswer(index)}
                disabled={showResult}
              >
                <span>{option}</span>
                {getButtonIcon(index)}
              </Button>
            ))}
          </div>
        );

      case "translation":
        return (
          <div className="space-y-4">
            <Input
              value={textAnswer}
              onChange={(e) => setTextAnswer(e.target.value)}
              placeholder="Type your translation here..."
              disabled={showResult}
              className="text-lg p-4"
            />
            <Button
              onClick={handleTextAnswer}
              disabled={showResult || !textAnswer.trim()}
              className="w-full"
            >
              Submit Answer
            </Button>
            {showResult && (
              <div className={`p-3 rounded-lg ${
                textAnswer.toLowerCase().trim() === question.correctText?.toLowerCase().trim()
                  ? "bg-green-100 border-green-200 text-green-800"
                  : "bg-red-100 border-red-200 text-red-800"
              }`}>
                <p className="font-medium">
                  {textAnswer.toLowerCase().trim() === question.correctText?.toLowerCase().trim()
                    ? "Correct!"
                    : `Correct answer: ${question.correctText}`}
                </p>
              </div>
            )}
          </div>
        );

      case "audio":
        return (
          <div className="space-y-4">
            <div className="text-center">
              <Button
                onClick={playAudio}
                variant="outline"
                size="lg"
                className="mb-4"
              >
                <Volume2 className="w-6 h-6 mr-2" />
                Play Audio
              </Button>
            </div>
            <div className="space-y-3">
              {question.options?.map((option, index) => (
                <Button
                  key={index}
                  variant={getButtonVariant(index)}
                  className="w-full justify-between text-left p-4 h-auto"
                  onClick={() => handleMultipleChoiceAnswer(index)}
                  disabled={showResult}
                >
                  <span>{option}</span>
                  {getButtonIcon(index)}
                </Button>
              ))}
            </div>
          </div>
        );

      case "speaking":
        return (
          <div className="space-y-4 text-center">
            <Button
              onClick={handleSpeakingAnswer}
              disabled={showResult}
              size="lg"
              className={`w-48 h-16 ${isRecording ? 'bg-red-500 hover:bg-red-600' : ''}`}
            >
              <Mic className="w-6 h-6 mr-2" />
              {isRecording ? "Recording..." : "Start Recording"}
            </Button>
            {isRecording && (
              <p className="text-sm text-muted-foreground">
                Speak clearly into your microphone...
              </p>
            )}
            {showResult && (
              <div className="p-3 rounded-lg bg-green-100 border-green-200 text-green-800">
                <p className="font-medium">Great job! Your pronunciation sounds good.</p>
              </div>
            )}
          </div>
        );

      default:
        return <p>Unknown question type</p>;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-8">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-4">
            {question.type.replace("-", " ").toUpperCase()}
          </span>
        </div>
        
        <h2 className="text-xl font-semibold mb-6 text-center">{question.question}</h2>
        
        {renderQuestionContent()}
        
        {showResult && question.explanation && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">{question.explanation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;
