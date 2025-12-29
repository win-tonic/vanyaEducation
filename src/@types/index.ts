// Custom type definitions for the education platform

export interface LessonConfig {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  prerequisites?: string[];
}

export interface CppProgram {
  name: string;
  sourceFile: string;
  executable: string;
  arguments?: string[];
}

export interface EducationSession {
  studentName: string;
  currentLesson?: LessonConfig;
  completedLessons: string[];
  startTime: Date;
}

export type ProgrammingLanguage = 'typescript' | 'cpp' | 'javascript';

export interface CodeExercise {
  id: string;
  title: string;
  description: string;
  language: ProgrammingLanguage;
  starterCode?: string;
  expectedOutput?: string;
  testCases?: TestCase[];
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  description?: string;
}

// Utility types
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type RequiredFields<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>;