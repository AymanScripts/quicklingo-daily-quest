
import { User, Flame, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  streak: number;
  hearts: number;
  onProfileClick: () => void;
}

const Header = ({ streak, hearts, onProfileClick }: HeaderProps) => {
  return (
    <header className="w-full bg-background border-b border-border px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            LinguaLearn
          </h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 bg-orange-100 px-3 py-1 rounded-full">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="font-semibold text-orange-700">{streak}</span>
          </div>
          
          <div className="flex items-center space-x-2 bg-red-100 px-3 py-1 rounded-full">
            <span className="text-red-500 text-lg">❤️</span>
            <span className="font-semibold text-red-700">{hearts}</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onProfileClick}
            className="rounded-full p-2"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
