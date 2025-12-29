import { ConsoleHelper } from '../utils/consoleHelper';

interface Student {
  name: string;
  age: number;
  grades: number[];
}

export class TypeScriptBasicsLesson {
  static async run(): Promise<void> {
    console.log('📘 TypeScript Basics Lesson');
    ConsoleHelper.separator();

    // Get student information
    const name = await ConsoleHelper.askQuestion('Student name: ');
    const age = await ConsoleHelper.askNumber('Student age: ');
    
    const student: Student = {
      name,
      age,
      grades: []
    };

    // Add some grades
    console.log('\nEnter 3 grades:');
    for (let i = 1; i <= 3; i++) {
      const grade = await ConsoleHelper.askNumber(`Grade ${i}: `);
      student.grades.push(grade);
    }

    // Display results
    this.displayStudentInfo(student);
    this.demonstrateAdvancedFeatures();
  }

  private static displayStudentInfo(student: Student): void {
    console.log('\n👨‍🎓 Student Information:');
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Grades: [${student.grades.join(', ')}]`);
    
    const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    console.log(`Average: ${average.toFixed(2)}`);
    
    const letterGrade = this.getLetterGrade(average);
    console.log(`Letter Grade: ${letterGrade}`);
  }

  private static getLetterGrade(average: number): string {
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
  }

  private static demonstrateAdvancedFeatures(): void {
    console.log('\n🔧 TypeScript Advanced Features:');
    
    // Union types
    type Grade = number | 'incomplete';
    const grades: Grade[] = [85, 92, 'incomplete', 78];
    console.log('Union types example:', grades);
    
    // Optional properties
    interface Course {
      name: string;
      credits: number;
      professor?: string; // Optional
    }
    
    const course: Course = {
      name: 'TypeScript Fundamentals',
      credits: 3
    };
    console.log('Optional properties:', course);
    
    // Generic function
    function getFirst<T>(array: T[]): T | undefined {
      return array[0];
    }
    
    const numbers = [1, 2, 3];
    const strings = ['hello', 'world'];
    console.log('Generic function result (numbers):', getFirst(numbers));
    console.log('Generic function result (strings):', getFirst(strings));
  }
}