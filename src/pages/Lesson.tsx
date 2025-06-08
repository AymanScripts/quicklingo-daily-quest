import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizQuestion from "@/components/QuizQuestion";
import LessonComplete from "@/components/LessonComplete";
import ProgressBar from "@/components/ProgressBar";
import { lessons, achievements } from "@/data/lessons";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { toast } from "sonner";

const Lesson = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hearts, setHearts] = useLocalStorage("hearts", 5);
  const [completedLessons, setCompletedLessons] = useLocalStorage<string[]>("completedLessons", []);
  const [lessonScores, setLessonScores] = useLocalStorage<Record<string, number>>("lessonScores", {});
  const [streak, setStreak] = useLocalStorage("streak", 0);
  const [lastStudyDate, setLastStudyDate] = useLocalStorage("lastStudyDate", "");
  const [unlockedAchievements, setUnlockedAchievements] = useLocalStorage<string[]>("unlockedAchievements", []);

  const lesson = lessons.find(l => l.id === lessonId);

  useEffect(() => {
    if (!lesson) {
      navigate("/");
    }
  }, [lesson, navigate]);

  if (!lesson) {
    return null;
  }

  const currentQuestion = lesson.questions[currentQuestionIndex];
  const totalQuestions = lesson.questions.length;

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setScore(score + 1);
      toast.success("Correct! Well done! 🎉");
    } else {
      setHearts(Math.max(0, hearts - 1));
      toast.error("Not quite right. Keep trying! 💪");
      
      if (hearts <= 1) {
        toast.error("Out of hearts! Take a break and try again later.");
        navigate("/");
        return;
      }
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      completeLesson();
    }
  };

  const completeLesson = () => {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Update completed lessons
    if (!completedLessons.includes(lesson.id)) {
      setCompletedLessons([...completedLessons, lesson.id]);
    }
    
    // Update lesson score (only if better than previous)
    const previousScore = lessonScores[lesson.id] || 0;
    if (percentage > previousScore) {
      setLessonScores({ ...lessonScores, [lesson.id]: percentage });
    }
    
    // Update streak
    const today = new Date().toDateString();
    if (lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
      if (lastStudyDate === yesterday) {
        setStreak(streak + 1);
      } else {
        setStreak(1);
      }
      setLastStudyDate(today);
    }
    
    // Check for new achievements
    checkAchievements(percentage);
    
    setIsComplete(true);
  };

  const checkAchievements = (percentage: number) => {
    const newUnlocked: string[] = [];
    
    achievements.forEach(achievement => {
      if (unlockedAchievements.includes(achievement.id)) return;
      
      let shouldUnlock = false;
      
      switch (achievement.requirement.type) {
        case "lessons_completed":
          shouldUnlock = (completedLessons.length + 1) >= achievement.requirement.count;
          break;
        case "streak":
          const newStreak = lastStudyDate !== new Date().toDateString() ? streak + 1 : streak;
          shouldUnlock = newStreak >= achievement.requirement.count;
          break;
        case "perfect_score":
          shouldUnlock = percentage >= 100;
          break;
      }
      
      if (shouldUnlock) {
        newUnlocked.push(achievement.id);
      }
    });
    
    if (newUnlocked.length > 0) {
      setUnlockedAchievements([...unlockedAchievements, ...newUnlocked]);
      toast.success(`New achievement unlocked! 🏆`);
    }
  };

  const getStarsEarned = () => {
    const percentage = Math.round((score / totalQuestions) * 100);
    if (percentage >= 100) return 3;
    if (percentage >= 80) return 2;
    if (percentage >= 60) return 1;
    return 0;
  };

  const handleContinue = () => {
    navigate("/");
  };

  const handleReview = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <LessonComplete
        score={score}
        totalQuestions={totalQuestions}
        starsEarned={getStarsEarned()}
        onContinue={handleContinue}
        onReview={handleReview}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <header className="w-full bg-background border-b border-border px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="rounded-full p-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex-1">
              <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-red-100 px-3 py-1 rounded-full">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="font-semibold text-red-700">{hearts}</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
          <p className="text-muted-foreground">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </p>
        </div>

        <QuizQuestion
          question={currentQuestion}
          onAnswer={handleAnswer}
        />
      </main>
    </div>
  );
};

export default Lesson;
