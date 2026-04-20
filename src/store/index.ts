import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Question {
  name: string;
  formula: string;
}

export interface MistakeRecord {
  id: string;
  name: string;
  formula: string;
  userAnswer: string;
  timestamp: number;
}

interface MistakeStore {
  mistakes: MistakeRecord[];
  addMistake: (mistake: Omit<MistakeRecord, 'id' | 'timestamp'>) => void;
  clearMistakes: () => void;
  removeMistake: (id: string) => void;
}

export const useMistakeStore = create<MistakeStore>()(
  persist(
    (set) => ({
      mistakes: [],
      addMistake: (mistake) =>
        set((state) => ({
          mistakes: [
            {
              ...mistake,
              id: Math.random().toString(36).substring(2, 9),
              timestamp: Date.now(),
            },
            ...state.mistakes,
          ],
        })),
      clearMistakes: () => set({ mistakes: [] }),
      removeMistake: (id) =>
        set((state) => ({
          mistakes: state.mistakes.filter((m) => m.id !== id),
        })),
    }),
    {
      name: 'mistake-storage',
    }
  )
);

// Game state doesn't need persistence
export type Difficulty = 'simple' | 'challenge' | null;

interface GameState {
  difficulty: Difficulty;
  currentLevel: number; // 1 to 5
  currentQuestionIndex: number; // 0 to 3
  questions: Question[];
  
  setDifficulty: (diff: Difficulty) => void;
  setQuestions: (questions: Question[]) => void;
  nextLevel: () => void;
  nextQuestion: () => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  difficulty: null,
  currentLevel: 1,
  currentQuestionIndex: 0,
  questions: [],
  
  setDifficulty: (diff) => set({ difficulty: diff, currentLevel: 1, currentQuestionIndex: 0 }),
  setQuestions: (questions) => set({ questions }),
  nextLevel: () => set((state) => ({ 
    currentLevel: state.currentLevel + 1,
    currentQuestionIndex: 0 
  })),
  nextQuestion: () => set((state) => ({
    currentQuestionIndex: state.currentQuestionIndex + 1
  })),
  resetGame: () => set({ difficulty: null, currentLevel: 1, currentQuestionIndex: 0, questions: [] }),
}));
