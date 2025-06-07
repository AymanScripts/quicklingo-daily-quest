
import { Trophy, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface LessonCompleteProps {
  score: number;
  totalQuestions: number;
  starsEarned: number;
  onContinue: () => void;
  onReview: () => void;
}

const LessonComplete = ({ score, totalQuestions, starsEarned, onContinue, onReview }: LessonCompleteProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-700 mb-2">Lesson Complete!</h2>
            <p className="text-gray-600">Great job on finishing this lesson</p>
          </div>
          
          <div className="mb-6">
            <div className="text-3xl font-bold text-green-600 mb-2">{percentage}%</div>
            <p className="text-gray-600 mb-4">{score} out of {totalQuestions} correct</p>
            
            <div className="flex justify-center space-x-1 mb-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < starsEarned ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <Button onClick={onContinue} className="w-full" size="lg">
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button onClick={onReview} variant="outline" className="w-full">
              Review Lesson
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonComplete;
