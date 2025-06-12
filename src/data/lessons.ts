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

// Language-specific questions
const languageQuestions = {
  Spanish: {
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
        question: "Translate 'Good morning' to Spanish",
        type: "translation" as const,
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
        question: "Say 'Me llamo' followed by your name",
        type: "speaking" as const,
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
        question: "Translate 'I am studying Spanish'",
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
        question: "Explain in Spanish when to use 'ser' vs 'estar'",
        type: "speaking" as const,
        explanation: "Ser is for permanent characteristics, estar is for temporary states."
      }
    ]
  },
  French: {
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
        question: "Translate 'I love you' to French",
        type: "translation" as const,
        correctText: "Je t'aime",
        explanation: "Je t'aime is how you say 'I love you' in French."
      },
      {
        id: "q4",
        question: "Say 'Je m'appelle' followed by your name",
        type: "speaking" as const,
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
      },
      {
        id: "q2",
        question: "Translate 'I went to the store'",
        type: "translation" as const,
        correctText: "Je suis allé au magasin",
        explanation: "Uses passé composé with être for movement verbs."
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
  },
  German: {
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
      },
      {
        id: "q3",
        question: "Translate 'Good night' to German",
        type: "translation" as const,
        correctText: "Gute Nacht",
        explanation: "Gute Nacht is how you say good night in German."
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
  },
  Italian: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Italian?",
        type: "multiple-choice" as const,
        options: ["Ciao", "Arrivederci", "Grazie", "Prego"],
        correctAnswer: 0,
        explanation: "Ciao is the most common way to say hello in Italian."
      },
      {
        id: "q2",
        question: "What does 'Grazie' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Grazie means thank you in Italian."
      },
      {
        id: "q3",
        question: "Translate 'How are you?' to Italian",
        type: "translation" as const,
        correctText: "Come stai",
        explanation: "Come stai is how you ask 'How are you?' in Italian."
      }
    ]
  },
  Portuguese: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Portuguese?",
        type: "multiple-choice" as const,
        options: ["Olá", "Tchau", "Obrigado", "Por favor"],
        correctAnswer: 0,
        explanation: "Olá is how you say hello in Portuguese."
      },
      {
        id: "q2",
        question: "What does 'Obrigado' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Obrigado means thank you in Portuguese."
      },
      {
        id: "q3",
        question: "Translate 'Good afternoon' to Portuguese",
        type: "translation" as const,
        correctText: "Boa tarde",
        explanation: "Boa tarde is how you say good afternoon in Portuguese."
      }
    ]
  },
  Japanese: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Japanese?",
        type: "multiple-choice" as const,
        options: ["Konnichiwa", "Sayonara", "Arigato", "Sumimasen"],
        correctAnswer: 0,
        explanation: "Konnichiwa is how you say hello in Japanese."
      },
      {
        id: "q2",
        question: "What does 'Arigato' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Arigato means thank you in Japanese."
      },
      {
        id: "q3",
        question: "Translate 'My name is' to Japanese",
        type: "translation" as const,
        correctText: "Watashi no namae wa",
        explanation: "Watashi no namae wa means 'My name is' in Japanese."
      }
    ]
  },
  Korean: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Korean?",
        type: "multiple-choice" as const,
        options: ["Annyeonghaseyo", "Annyeong", "Gamsahamnida", "Mianhamnida"],
        correctAnswer: 0,
        explanation: "Annyeonghaseyo is the polite way to say hello in Korean."
      },
      {
        id: "q2",
        question: "What does 'Gamsahamnida' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Gamsahamnida means thank you in Korean."
      }
    ]
  },
  Chinese: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Chinese?",
        type: "multiple-choice" as const,
        options: ["Nǐ hǎo", "Zàijiàn", "Xièxie", "Qǐng"],
        correctAnswer: 0,
        explanation: "Nǐ hǎo is how you say hello in Chinese."
      },
      {
        id: "q2",
        question: "What does 'Xièxie' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Xièxie means thank you in Chinese."
      }
    ]
  },
  Russian: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Russian?",
        type: "multiple-choice" as const,
        options: ["Privet", "Do svidaniya", "Spasibo", "Pozhaluysta"],
        correctAnswer: 0,
        explanation: "Privet is how you say hello in Russian."
      },
      {
        id: "q2",
        question: "What does 'Spasibo' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Spasibo means thank you in Russian."
      }
    ]
  },
  Arabic: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Arabic?",
        type: "multiple-choice" as const,
        options: ["Ahlan", "Ma'a salama", "Shukran", "Min fadlik"],
        correctAnswer: 0,
        explanation: "Ahlan is how you say hello in Arabic."
      },
      {
        id: "q2",
        question: "What does 'Shukran' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Shukran means thank you in Arabic."
      }
    ]
  },
  Hindi: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Hindi?",
        type: "multiple-choice" as const,
        options: ["Namaste", "Alvida", "Dhanyawad", "Kripaya"],
        correctAnswer: 0,
        explanation: "Namaste is how you say hello in Hindi."
      },
      {
        id: "q2",
        question: "What does 'Dhanyawad' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Dhanyawad means thank you in Hindi."
      }
    ]
  },
  Dutch: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Dutch?",
        type: "multiple-choice" as const,
        options: ["Hallo", "Tot ziens", "Dank je", "Alsjeblieft"],
        correctAnswer: 0,
        explanation: "Hallo is how you say hello in Dutch."
      },
      {
        id: "q2",
        question: "What does 'Dank je' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Dank je means thank you in Dutch."
      }
    ]
  },
  Swedish: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Swedish?",
        type: "multiple-choice" as const,
        options: ["Hej", "Hej då", "Tack", "Tack så mycket"],
        correctAnswer: 0,
        explanation: "Hej is how you say hello in Swedish."
      },
      {
        id: "q2",
        question: "What does 'Tack' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Tack means thank you in Swedish."
      }
    ]
  },
  Norwegian: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Norwegian?",
        type: "multiple-choice" as const,
        options: ["Hei", "Ha det", "Takk", "Takk skal du ha"],
        correctAnswer: 0,
        explanation: "Hei is how you say hello in Norwegian."
      },
      {
        id: "q2",
        question: "What does 'Takk' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Takk means thank you in Norwegian."
      }
    ]
  },
  Polish: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Polish?",
        type: "multiple-choice" as const,
        options: ["Cześć", "Do widzenia", "Dziękuję", "Proszę"],
        correctAnswer: 0,
        explanation: "Cześć is how you say hello in Polish."
      },
      {
        id: "q2",
        question: "What does 'Dziękuję' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Dziękuję means thank you in Polish."
      }
    ]
  },
  Turkish: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Turkish?",
        type: "multiple-choice" as const,
        options: ["Merhaba", "Güle güle", "Teşekkür ederim", "Lütfen"],
        correctAnswer: 0,
        explanation: "Merhaba is how you say hello in Turkish."
      },
      {
        id: "q2",
        question: "What does 'Teşekkür ederim' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Teşekkür ederim means thank you in Turkish."
      }
    ]
  },
  Greek: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Greek?",
        type: "multiple-choice" as const,
        options: ["Geia sou", "Antio", "Efcharistó", "Parakaló"],
        correctAnswer: 0,
        explanation: "Geia sou is how you say hello in Greek."
      },
      {
        id: "q2",
        question: "What does 'Efcharistó' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Efcharistó means thank you in Greek."
      }
    ]
  },
  Hebrew: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Hebrew?",
        type: "multiple-choice" as const,
        options: ["Shalom", "Lehitraot", "Toda", "Bevakasha"],
        correctAnswer: 0,
        explanation: "Shalom is how you say hello in Hebrew."
      },
      {
        id: "q2",
        question: "What does 'Toda' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Toda means thank you in Hebrew."
      }
    ]
  },
  Thai: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Thai?",
        type: "multiple-choice" as const,
        options: ["Sawasdee", "La gorn", "Khob khun", "Karuna"],
        correctAnswer: 0,
        explanation: "Sawasdee is how you say hello in Thai."
      },
      {
        id: "q2",
        question: "What does 'Khob khun' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Khob khun means thank you in Thai."
      }
    ]
  },
  Vietnamese: {
    beginner: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Vietnamese?",
        type: "multiple-choice" as const,
        options: ["Xin chào", "Tạm biệt", "Cảm ơn", "Xin lỗi"],
        correctAnswer: 0,
        explanation: "Xin chào is how you say hello in Vietnamese."
      },
      {
        id: "q2",
        question: "What does 'Cảm ơn' mean?",
        type: "multiple-choice" as const,
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: "Cảm ơn means thank you in Vietnamese."
      }
    ]
  }
};

// Helper function to generate questions based on language and difficulty
const getQuestionsForLanguage = (language: string, difficulty: "Beginner" | "Intermediate" | "Advanced"): Question[] => {
  const difficultyKey = difficulty.toLowerCase() as "beginner" | "intermediate" | "advanced";
  
  let baseQuestions: any[] = [];
  
  // Get language-specific questions or fallback to basic structure
  const langQuestions = languageQuestions[language as keyof typeof languageQuestions];
  if (langQuestions && langQuestions[difficultyKey]) {
    baseQuestions = langQuestions[difficultyKey];
  } else if (langQuestions && langQuestions.beginner) {
    baseQuestions = langQuestions.beginner;
  } else {
    // Fallback for languages without specific questions
    baseQuestions = [
      {
        id: "q1",
        question: `How do you say 'Hello' in ${language}?`,
        type: "multiple-choice",
        options: [`Hello in ${language}`, "Wrong option 1", "Wrong option 2", "Wrong option 3"],
        correctAnswer: 0,
        explanation: `This is how you say hello in ${language}.`
      },
      {
        id: "q2",
        question: `What does 'Thank you' mean in ${language}?`,
        type: "multiple-choice",
        options: ["Please", "Hello", "Thank you", "Goodbye"],
        correctAnswer: 2,
        explanation: `This means thank you in ${language}.`
      },
      {
        id: "q3",
        question: `Translate 'Good morning' to ${language}`,
        type: "translation",
        correctText: `Good morning in ${language}`,
        explanation: `This is how you say good morning in ${language}.`
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
