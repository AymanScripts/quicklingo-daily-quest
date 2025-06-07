
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import LessonCard from "@/components/LessonCard";
import ProgressBar from "@/components/ProgressBar";
import { lessons } from "@/data/lessons";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const LanguagePath = () => {
  const { languageCode } = useParams();
  const navigate = useNavigate();
  const [streak] = useLocalStorage("streak", 0);
  const [hearts] = useLocalStorage("hearts", 5);
  const [completedLessons] = useLocalStorage<string[]>("completedLessons", []);
  const [lessonScores] = useLocalStorage<Record<string, number>>("lessonScores", {});

  const languageNames: Record<string, string> = {
    es: "Spanish", fr: "French", de: "German", it: "Italian", pt: "Portuguese",
    ja: "Japanese", ko: "Korean", zh: "Chinese", ru: "Russian", ar: "Arabic",
    hi: "Hindi", nl: "Dutch", sv: "Swedish", no: "Norwegian", pl: "Polish",
    tr: "Turkish", el: "Greek", he: "Hebrew", th: "Thai", vi: "Vietnamese"
  };

  const languageFlags: Record<string, string> = {
    es: "🇪🇸", fr: "🇫🇷", de: "🇩🇪", it: "🇮🇹", pt: "🇵🇹",
    ja: "🇯🇵", ko: "🇰🇷", zh: "🇨🇳", ru: "🇷🇺", ar: "🇸🇦",
    hi: "🇮🇳", nl: "🇳🇱", sv: "🇸🇪", no: "🇳🇴", pl: "🇵🇱",
    tr: "🇹🇷", el: "🇬🇷", he: "🇮🇱", th: "🇹🇭", vi: "🇻🇳"
  };

  const languageLessons = lessons.filter(lesson => lesson.id.startsWith(`${languageCode}-`));
  const languageName = languageNames[languageCode || ""] || "Unknown";
  const languageFlag = languageFlags[languageCode || ""] || "🌍";

  useEffect(() => {
    if (!languageCode || languageLessons.length === 0) {
      navigate("/languages");
    }
  }, [languageCode, languageLessons.length, navigate]);

  const startLesson = (lessonId: string) => {
    navigate(`/lesson/${lessonId}`);
  };

  const isLessonLocked = (lessonIndex: number) => {
    if (lessonIndex === 0) return false;
    return !completedLessons.includes(languageLessons[lessonIndex - 1].id);
  };

  const getLessonStars = (lessonId: string) => {
    const score = lessonScores[lessonId];
    if (!score) return 0;
    if (score >= 100) return 3;
    if (score >= 80) return 2;
    if (score >= 60) return 1;
    return 0;
  };

  const completedLanguageLessons = languageLessons.filter(lesson => 
    completedLessons.includes(lesson.id)
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header
        streak={streak}
        hearts={hearts}
        onProfileClick={() => console.log("Profile clicked")}
      />
      
      <main className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/languages")}
              className="mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Languages
            </Button>
          </div>
          
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">{languageFlag}</div>
            <h1 className="text-4xl font-bold mb-2">{languageName} Learning Path</h1>
            <p className="text-muted-foreground mb-4">
              Master {languageName} step by step with our structured lessons
            </p>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Your Progress</span>
              <span className="text-sm text-muted-foreground">
                {completedLanguageLessons}/{languageLessons.length} lessons completed
              </span>
            </div>
            <ProgressBar current={completedLanguageLessons} total={languageLessons.length} />
          </div>
        </div>

        <div className="relative">
          {/* Path line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 to-blue-200 transform -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-8">
            {languageLessons.map((lesson, index) => (
              <div key={lesson.id} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Lesson number circle */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-300 rounded-full items-center justify-center font-bold text-blue-600 shadow-lg z-10">
                  {index + 1}
                </div>
                
                {/* Lesson card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <LessonCard
                    title={lesson.title}
                    description={lesson.description}
                    duration={lesson.duration}
                    difficulty={lesson.difficulty}
                    completed={completedLessons.includes(lesson.id)}
                    locked={isLessonLocked(index)}
                    stars={getLessonStars(lesson.id)}
                    onClick={() => startLesson(lesson.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LanguagePath;
