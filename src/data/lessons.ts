
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

export const lessons: Lesson[] = [
  {
    id: "spanish-basics-1",
    title: "Spanish Basics - Greetings",
    description: "Learn essential Spanish greetings and introductions",
    duration: "5 min",
    difficulty: "Beginner",
    questions: [
      {
        id: "q1",
        question: "How do you say 'Hello' in Spanish?",
        options: ["Adiós", "Hola", "Gracias", "Por favor"],
        correctAnswer: 1,
        explanation: "'Hola' is the most common way to say hello in Spanish."
      },
      {
        id: "q2",
        question: "What does 'Buenos días' mean?",
        options: ["Good night", "Good morning", "Good afternoon", "Goodbye"],
        correctAnswer: 1,
        explanation: "'Buenos días' is used to greet someone in the morning."
      },
      {
        id: "q3",
        question: "How do you say 'Thank you' in Spanish?",
        options: ["De nada", "Por favor", "Gracias", "Lo siento"],
        correctAnswer: 2,
        explanation: "'Gracias' means thank you in Spanish."
      },
      {
        id: "q4",
        question: "What is the Spanish word for 'Please'?",
        options: ["Gracias", "Perdón", "Por favor", "De nada"],
        correctAnswer: 2,
        explanation: "'Por favor' is used to say please in Spanish."
      },
      {
        id: "q5",
        question: "How do you say 'My name is...' in Spanish?",
        options: ["Me llamo...", "Yo soy...", "Mi nombre...", "Soy..."],
        correctAnswer: 0,
        explanation: "'Me llamo...' is the most common way to introduce yourself in Spanish."
      }
    ]
  },
  {
    id: "spanish-basics-2",
    title: "Spanish Numbers 1-10",
    description: "Master counting from one to ten in Spanish",
    duration: "4 min",
    difficulty: "Beginner",
    questions: [
      {
        id: "q1",
        question: "How do you say 'one' in Spanish?",
        options: ["dos", "uno", "tres", "cero"],
        correctAnswer: 1,
        explanation: "'Uno' means one in Spanish."
      },
      {
        id: "q2",
        question: "What number is 'cinco'?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
        explanation: "'Cinco' is the Spanish word for five."
      },
      {
        id: "q3",
        question: "How do you say 'ten' in Spanish?",
        options: ["nueve", "ocho", "diez", "siete"],
        correctAnswer: 2,
        explanation: "'Diez' means ten in Spanish."
      }
    ]
  },
  {
    id: "french-basics-1",
    title: "French Basics - Common Phrases",
    description: "Essential French phrases for beginners",
    duration: "6 min",
    difficulty: "Beginner",
    questions: [
      {
        id: "q1",
        question: "How do you say 'Hello' in French?",
        options: ["Au revoir", "Bonjour", "Merci", "S'il vous plaît"],
        correctAnswer: 1,
        explanation: "'Bonjour' is the standard way to say hello in French."
      },
      {
        id: "q2",
        question: "What does 'Merci' mean?",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
        correctAnswer: 2,
        explanation: "'Merci' means thank you in French."
      },
      {
        id: "q3",
        question: "How do you say 'Excuse me' in French?",
        options: ["Pardon", "Bonjour", "Merci", "Au revoir"],
        correctAnswer: 0,
        explanation: "'Pardon' or 'Excusez-moi' means excuse me in French."
      }
    ]
  }
];

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
  }
];
