
import { Trophy, Star, Flame, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AchievementProps {
  title: string;
  description: string;
  type: "trophy" | "star" | "flame" | "award";
  unlocked: boolean;
  progress?: number;
  total?: number;
}

const Achievement = ({ title, description, type, unlocked, progress, total }: AchievementProps) => {
  const getIcon = () => {
    const iconClass = `w-8 h-8 ${unlocked ? 'text-yellow-500' : 'text-gray-400'}`;
    switch (type) {
      case "trophy": return <Trophy className={iconClass} />;
      case "star": return <Star className={iconClass} />;
      case "flame": return <Flame className={iconClass} />;
      case "award": return <Award className={iconClass} />;
    }
  };

  return (
    <Card className={`transition-all duration-200 ${unlocked ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' : 'bg-gray-50'}`}>
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="flex-1">
            <h4 className={`font-medium ${unlocked ? 'text-yellow-800' : 'text-gray-600'}`}>
              {title}
            </h4>
            <p className={`text-sm ${unlocked ? 'text-yellow-700' : 'text-gray-500'}`}>
              {description}
            </p>
            {progress !== undefined && total !== undefined && (
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((progress / total) * 100, 100)}%` }}
                  />
                </div>
                <span className="text-xs text-gray-600 mt-1">
                  {progress}/{total}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Achievement;
