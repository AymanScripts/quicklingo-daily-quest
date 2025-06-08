
export interface Question {
  id: string;
  question: string;
  type: "multiple-choice" | "audio" | "speaking" | "translation";
  options?: string[];
  correctAnswer?: number;
  correctText?: string;
  audioUrl?: string;
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

// Spanish questions
const spanishQuestions = {
  beginner: [
    {
      id: "q1",
      question: "How do you say 'Hello' in Spanish?",
      type: "multiple-choice" as const,
      options: ["Hola", "Adiós", "Gracias", "Por favor"],
      correctAnswer: 0,
      explanation: "Hola is the most common way to say hello in Spanish."
    },
    {
      id: "q2",
      question: "What does 'Gracias' mean?",
      type: "multiple-choice" as const,
      options: ["Please", "Excuse me", "Thank you", "You're welcome"],
      correctAnswer: 2,
      explanation: "Gracias means 'thank you' in Spanish."
    },
    {
      id: "q3",
      question: "Translate: 'Good morning'",
      type: "translation" as const,
      question: "Translate 'Good morning' to Spanish",
      correctText: "Buenos días",
      explanation: "Buenos días is used to greet someone in the morning."
    },
    {
      id: "q4",
      question: "How do you say the number 'five' in Spanish?",
      type: "multiple-choice" as const,
      options: ["cuatro", "cinco", "seis", "siete"],
      correctAnswer: 1,
      explanation: "Cinco is the Spanish word for five."
    },
    {
      id: "q5",
      question: "Listen and repeat: 'Me llamo...'",
      type: "speaking" as const,
      question: "Say 'Me llamo' followed by your name",
      audioUrl: "/audio/spanish/me-llamo.mp3",
      explanation: "Me llamo means 'My name is' in Spanish."
    }
  ],
  intermediate: [
    {
      id: "q1",
      question: "What is the correct conjugation of 'hablar' for 'yo'?",
      type: "multiple-choice" as const,
      options: ["hablo", "hablas", "habla", "hablamos"],
      correctAnswer: 0,
      explanation: "Yo hablo - I speak. The -ar verbs take -o ending for 'yo'."
    },
    {
      id: "q2",
      question: "Listen to this audio and choose the correct translation:",
      type: "audio" as const,
      audioUrl: "/audio/spanish/intermediate-1.mp3",
      options: ["I like coffee", "I want water", "I need help", "I speak Spanish"],
      correctAnswer: 0,
      explanation: "The audio says 'Me gusta el café' which means 'I like coffee'."
    },
    {
      id: "q3",
      question: "Translate: 'I am studying Spanish'",
      type: "translation" as const,
      correctText: "Estoy estudiando español",
      explanation: "Uses present progressive tense with 'estar + gerund'."
    }
  ],
  advanced: [
    {
      id: "q1",
      question: "Choose the correct subjunctive form:",
      type: "multiple-choice" as const,
      options: ["Es importante que estudies", "Es importante que estudias", "Es importante que estudie", "Es importante que estudio"],
      correctAnswer: 0,
      explanation: "After 'es importante que' we use subjunctive mood."
    },
    {
      id: "q2",
      question: "Record yourself explaining the difference between 'ser' and 'estar'",
      type: "speaking" as const,
      question: "Explain in Spanish when to use 'ser' vs 'estar'",
      explanation: "Ser is for permanent characteristics, estar is for temporary states."
    }
  ]
};

// French questions
const frenchQuestions = {
  beginner: [
    {
      id: "q1",
      question: "How do you say 'Thank you' in French?",
      type: "multiple-choice" as const,
      options: ["Bonjour", "Merci", "Au revoir", "S'il vous plaît"],
      correctAnswer: 1,
      explanation: "Merci is how you say thank you in French."
    },
    {
      id: "q2",
      question: "What does 'Bonjour' mean?",
      type: "multiple-choice" as const,
      options: ["Good evening", "Good morning/Hello", "Goodbye", "Please"],
      correctAnswer: 1,
      explanation: "Bonjour means good morning or hello in French."
    },
    {
      id: "q3",
      question: "Listen and repeat: 'Je m'appelle...'",
      type: "speaking" as const,
      question: "Say 'Je m'appelle' followed by your name",
      audioUrl: "/audio/french/je-mappelle.mp3",
      explanation: "Je m'appelle means 'My name is' in French."
    }
  ],
  intermediate: [
    {
      id: "q1",
      question: "What is the past participle of 'avoir'?",
      type: "multiple-choice" as const,
      options: ["eu", "été", "fait", "dit"],
      correctAnswer: 0,
      explanation: "The past participle of avoir is 'eu'."
    }
  ],
  advanced: [
    {
      id: "q1",
      question: "Which sentence uses the subjunctive correctly?",
      type: "multiple-choice" as const,
      options: ["Il faut que tu viennes", "Il faut que tu viens", "Il faut que tu venir", "Il faut que tu es venu"],
      correctAnswer: 0,
      explanation: "After 'il faut que' we use the subjunctive mood."
    }
  ]
};

// German questions
const germanQuestions = {
  beginner: [
    {
      id: "q1",
      question: "How do you say 'Hello' in German?",
      type: "multiple-choice" as const,
      options: ["Guten Tag", "Auf Wiedersehen", "Danke", "Bitte"],
      correctAnswer: 0,
      explanation: "Guten Tag is a common way to say hello in German."
    },
    {
      id: "q2",
      question: "What does 'Danke' mean?",
      type: "multiple-choice" as const,
      options: ["Please", "Hello", "Thank you", "Goodbye"],
      correctAnswer: 2,
      explanation: "Danke means thank you in German."
    }
  ],
  intermediate: [
    {
      id: "q1",
      question: "What is the accusative form of 'der Mann'?",
      type: "multiple-choice" as const,
      options: ["der Mann", "den Mann", "dem Mann", "des Mannes"],
      correctAnswer: 1,
      explanation: "In accusative case, 'der' becomes 'den'."
    }
  ],
  advanced: [
    {
      id: "q1",
      question: "Choose the correct word order:",
      type: "multiple-choice" as const,
      options: ["Ich weiß, dass er kommt", "Ich weiß, dass kommt er", "Ich weiß, er dass kommt", "Ich weiß, er kommt dass"],
      correctAnswer: 0,
      explanation: "In subordinate clauses, the verb goes to the end."
    }
  ]
};

// Helper function to generate questions based on language and difficulty
const getQuestionsForLanguage = (language: string, difficulty: "Beginner" | "Intermediate" | "Advanced"): Question[] => {
  const difficultyKey = difficulty.toLowerCase() as "beginner" | "intermediate" | "advanced";
  
  let baseQuestions: any[] = [];
  
  switch (language) {
    case "Spanish":
      baseQuestions = spanishQuestions[difficultyKey] || spanishQuestions.beginner;
      break;
    case "French":
      baseQuestions = frenchQuestions[difficultyKey] || frenchQuestions.beginner;
      break;
    case "German":
      baseQuestions = germanQuestions[difficultyKey] || germanQuestions.beginner;
      break;
    default:
      // For other languages, generate basic questions
      baseQuestions = [
        {
          id: "q1",
          question: `How do you say 'Hello' in ${language}?`,
          type: "multiple-choice",
          options: ["Option A", "Option B", "Option C", "Option D"],
          correctAnswer: 0,
          explanation: `This is how you say hello in ${language}.`
        }
      ];
  }
  
  // Pad with additional questions to reach 15
  const questions: Question[] = [];
  for (let i = 0; i < 15; i++) {
    const baseIndex = i % baseQuestions.length;
    const baseQuestion = baseQuestions[baseIndex];
    
    questions.push({
      ...baseQuestion,
      id: `q${i + 1}`,
      question: baseQuestion.question || `${language} question ${i + 1} (${difficulty})`
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
      questions: getQuestionsForLanguage(language, difficulty)
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
