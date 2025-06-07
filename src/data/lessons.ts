
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  questions: Question[];
}

// Helper function to generate questions for different difficulty levels
const generateQuestions = (language: string, lessonNumber: number, topic: string): Question[] => {
  const difficulty = lessonNumber <= 16 ? "Beginner" : lessonNumber <= 33 ? "Intermediate" : "Advanced";
  const baseQuestions = 15;
  
  const questions: Question[] = [];
  
  for (let i = 1; i <= baseQuestions; i++) {
    questions.push({
      id: `q${i}`,
      question: `${language} ${topic} - Question ${i} (${difficulty})`,
      options: [`Option A`, `Option B`, `Option C`, `Option D`],
      correctAnswer: Math.floor(Math.random() * 4),
      explanation: `This is the explanation for ${language} ${topic} question ${i}.`
    });
  }
  
  return questions;
};

// Helper function to get lesson topics based on lesson number
const getLessonTopic = (lessonNumber: number): string => {
  const topics = [
    "Basic Greetings", "Numbers 1-10", "Colors", "Family Members", "Days of Week",
    "Months", "Weather", "Food & Drinks", "Body Parts", "Clothing",
    "Transportation", "Animals", "Professions", "House & Home", "School",
    "Past Tense Basics", "Present Continuous", "Future Tense", "Questions", "Negations",
    "Prepositions", "Adjectives", "Adverbs", "Comparatives", "Superlatives",
    "Pronouns", "Possessives", "Modal Verbs", "Conditionals", "Subjunctive",
    "Complex Grammar", "Idioms", "Phrasal Verbs", "Business Language", "Academic Writing",
    "Literature", "Philosophy", "Science Terms", "Medical Vocabulary", "Legal Terms",
    "Advanced Conversation", "Cultural References", "Poetry", "Technical Writing", "Debate Skills",
    "Negotiation", "Presentation Skills", "Critical Analysis", "Abstract Concepts", "Mastery Test"
  ];
  
  return topics[lessonNumber - 1] || `Advanced Topic ${lessonNumber}`;
};

// Helper function to get difficulty based on lesson number
const getDifficulty = (lessonNumber: number): "Beginner" | "Intermediate" | "Advanced" => {
  if (lessonNumber <= 16) return "Beginner";
  if (lessonNumber <= 33) return "Intermediate";
  return "Advanced";
};

// Helper function to get duration based on difficulty
const getDuration = (lessonNumber: number): string => {
  if (lessonNumber <= 16) return `${3 + Math.floor(lessonNumber / 3)} min`;
  if (lessonNumber <= 33) return `${8 + Math.floor((lessonNumber - 16) / 3)} min`;
  return `${15 + Math.floor((lessonNumber - 33) / 3)} min`;
};

// Generate lessons for a language
const generateLanguageLessons = (language: string, languageCode: string): Lesson[] => {
  const lessons: Lesson[] = [];
  
  for (let i = 1; i <= 50; i++) {
    const topic = getLessonTopic(i);
    const difficulty = getDifficulty(i);
    const duration = getDuration(i);
    
    lessons.push({
      id: `${languageCode}-lesson-${i}`,
      title: `${language} ${i}: ${topic}`,
      description: `Learn ${topic.toLowerCase()} in ${language}`,
      duration,
      difficulty,
      questions: generateQuestions(language, i, topic)
    });
  }
  
  return lessons;
};

// Generate all lessons for 20 languages
const languages = [
  { name: "Spanish", code: "es" },
  { name: "French", code: "fr" },
  { name: "German", code: "de" },
  { name: "Italian", code: "it" },
  { name: "Portuguese", code: "pt" },
  { name: "Japanese", code: "ja" },
  { name: "Korean", code: "ko" },
  { name: "Chinese", code: "zh" },
  { name: "Russian", code: "ru" },
  { name: "Arabic", code: "ar" },
  { name: "Hindi", code: "hi" },
  { name: "Dutch", code: "nl" },
  { name: "Swedish", code: "sv" },
  { name: "Norwegian", code: "no" },
  { name: "Polish", code: "pl" },
  { name: "Turkish", code: "tr" },
  { name: "Greek", code: "el" },
  { name: "Hebrew", code: "he" },
  { name: "Thai", code: "th" },
  { name: "Vietnamese", code: "vi" }
];

export const lessons: Lesson[] = languages.flatMap(language => 
  generateLanguageLessons(language.name, language.code)
);

export const achievements = [
  {
    id: "first-lesson",
    title: "First Steps",
    description: "Complete your first lesson",
    type: "trophy" as const,
    requirement: { type: "lessons_completed", count: 1 }
  },
  {
    id: "streak-3",
    title: "Getting Started",
    description: "Maintain a 3-day streak",
    type: "flame" as const,
    requirement: { type: "streak", count: 3 }
  },
  {
    id: "streak-7",
    title: "Week Warrior",
    description: "Maintain a 7-day streak",
    type: "flame" as const,
    requirement: { type: "streak", count: 7 }
  },
  {
    id: "streak-30",
    title: "Monthly Master",
    description: "Maintain a 30-day streak",
    type: "flame" as const,
    requirement: { type: "streak", count: 30 }
  },
  {
    id: "perfect-lesson",
    title: "Perfect Score",
    description: "Get 100% on any lesson",
    type: "star" as const,
    requirement: { type: "perfect_score", count: 1 }
  },
  {
    id: "five-lessons",
    title: "Dedicated Learner",
    description: "Complete 5 lessons",
    type: "award" as const,
    requirement: { type: "lessons_completed", count: 5 }
  },
  {
    id: "fifty-lessons",
    title: "Language Explorer",
    description: "Complete 50 lessons",
    type: "award" as const,
    requirement: { type: "lessons_completed", count: 50 }
  },
  {
    id: "hundred-lessons",
    title: "Polyglot",
    description: "Complete 100 lessons",
    type: "trophy" as const,
    requirement: { type: "lessons_completed", count: 100 }
  }
];
