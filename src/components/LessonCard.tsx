
import { CheckCircle, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface LessonCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  completed: boolean;
  locked: boolean;
  stars: number;
  onClick: () => void;
}

const LessonCard = ({
  title,
  description,
  duration,
  difficulty,
  completed,
  locked,
  stars,
  onClick
}: LessonCardProps) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-700";
      case "Intermediate": return "bg-yellow-100 text-yellow-700";
      case "Advanced": return "bg-red-100 text-red-700";
    }
  };

  return (
    <Card className={`transition-all duration-200 hover:shadow-md ${locked ? 'opacity-50' : 'hover:scale-105'}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm mb-3">{description}</p>
          </div>
          {completed && (
            <CheckCircle className="w-6 h-6 text-green-500 ml-2" />
          )}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
              {difficulty}
            </span>
          </div>
          
          {completed && (
            <div className="flex items-center space-x-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
          )}
        </div>
        
        <Button
          onClick={onClick}
          disabled={locked}
          className="w-full"
          variant={completed ? "outline" : "default"}
        >
          {locked ? "Locked" : completed ? "Review" : "Start Lesson"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default LessonCard;
