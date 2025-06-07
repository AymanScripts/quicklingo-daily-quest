
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import LessonCard from "@/components/LessonCard";
import Achievement from "@/components/Achievement";
import ProgressBar from "@/components/ProgressBar";
import { lessons, achievements } from "@/data/lessons";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

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

  const startLesson = (lessonId: string) => {
    navigate(`/lesson/${lessonId}`);
  };

  const isLessonLocked = (lessonIndex: number) => {
    if (lessonIndex === 0) return false;
    return !completedLessons.includes(lessons[lessonIndex - 1].id);
  };

  const getLessonStars = (lessonId: string) => {
    const score = lessonScores[lessonId];
    if (!score) return 0;
    if (score >= 100) return 3;
    if (score >= 80) return 2;
    if (score >= 60) return 1;
    return 0;
  };

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-muted-foreground mb-4">Continue your language learning journey</p>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-muted-foreground">
                {completedLessons.length}/{lessons.length} lessons completed
              </span>
            </div>
            <ProgressBar current={completedLessons.length} total={lessons.length} />
          </div>
        </div>

        <Tabs defaultValue="lessons" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="achievements">
              Achievements
              {unlockedAchievements.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {unlockedAchievements.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="lessons" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((lesson, index) => (
                <LessonCard
                  key={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  duration={lesson.duration}
                  difficulty={lesson.difficulty}
                  completed={completedLessons.includes(lesson.id)}
                  locked={isLessonLocked(index)}
                  stars={getLessonStars(lesson.id)}
                  onClick={() => startLesson(lesson.id)}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => {
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
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
