
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Achievement from "@/components/Achievement";
import ProgressBar from "@/components/ProgressBar";
import { lessons, achievements } from "@/data/lessons";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, Target } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [streak, setStreak] = useLocalStorage("streak", 0);
  const [hearts, setHearts] = useLocalStorage("hearts", 5);
  const [completedLessons, setCompletedLessons] = useLocalStorage<string[]>("completedLessons", []);
  const [lessonScores, setLessonScores] = useLocalStorage<Record<string, number>>("lessonScores", {});
  const [lastStudyDate, setLastStudyDate] = useLocalStorage("lastStudyDate", "");
  const [unlockedAchievements, setUnlockedAchievements] = useLocalStorage<string[]>("unlockedAchievements", []);

  useEffect(() => {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
    
    if (lastStudyDate === yesterday) {
      // Continue streak
    } else if (lastStudyDate !== today) {
      // Reset streak if more than a day has passed
      if (lastStudyDate && lastStudyDate !== yesterday) {
        setStreak(0);
      }
    }
  }, []);

  const getAchievementProgress = (achievement: any) => {
    switch (achievement.requirement.type) {
      case "lessons_completed":
        return { current: completedLessons.length, total: achievement.requirement.count };
      case "streak":
        return { current: streak, total: achievement.requirement.count };
      case "perfect_score":
        const perfectScores = Object.values(lessonScores).filter(score => score >= 100).length;
        return { current: perfectScores, total: achievement.requirement.count };
      default:
        return { current: 0, total: achievement.requirement.count };
    }
  };

  const isAchievementUnlocked = (achievementId: string) => {
    return unlockedAchievements.includes(achievementId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header
        streak={streak}
        hearts={hearts}
        onProfileClick={() => console.log("Profile clicked")}
      />
      
      <main className="max-w-6xl mx-auto p-6">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to LinguaLearn!</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Your journey to master new languages starts here
          </p>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-muted-foreground">
                {completedLessons.length}/{lessons.length} lessons completed
              </span>
            </div>
            <ProgressBar current={completedLessons.length} total={lessons.length} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="font-semibold text-lg mb-2">Start Learning</h3>
              <p className="text-muted-foreground mb-4">Choose from 20 languages with 50 lessons each</p>
              <Button onClick={() => navigate("/languages")} className="w-full">
                Choose Language
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Target className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="font-semibold text-lg mb-2">Daily Streak</h3>
              <p className="text-muted-foreground mb-4">Keep your learning momentum going</p>
              <div className="text-3xl font-bold text-green-600">{streak} days</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="font-semibold text-lg mb-2">Achievements</h3>
              <p className="text-muted-foreground mb-4">Unlock rewards as you progress</p>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {unlockedAchievements.length} unlocked
              </Badge>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.slice(0, 4).map((achievement) => {
                const progress = getAchievementProgress(achievement);
                const unlocked = isAchievementUnlocked(achievement.id);
                
                return (
                  <Achievement
                    key={achievement.id}
                    title={achievement.title}
                    description={achievement.description}
                    type={achievement.type}
                    unlocked={unlocked}
                    progress={progress.current}
                    total={progress.total}
                  />
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
