import { ConsoleHelper } from '../utils/consoleHelper';

export class BasicMathLesson {
  static async run(): Promise<void> {
    console.log('📊 Basic Math Lesson in TypeScript');
    ConsoleHelper.separator();

    // Addition
    const num1 = await ConsoleHelper.askNumber('Enter first number: ');
    const num2 = await ConsoleHelper.askNumber('Enter second number: ');
    
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';

    console.log('\n📈 Results:');
    console.log(`${num1} + ${num2} = ${sum}`);
    console.log(`${num1} - ${num2} = ${difference}`);
    console.log(`${num1} × ${num2} = ${product}`);
    console.log(`${num1} ÷ ${num2} = ${quotient}`);

    // Demonstrate TypeScript features
    this.demonstrateTypes(num1, num2);
  }

  private static demonstrateTypes(a: number, b: number): void {
    console.log('\n🔍 TypeScript Type Demonstration:');
    console.log(`Type of ${a}: ${typeof a}`);
    console.log(`Type of ${b}: ${typeof b}`);
    
    const result: number = a + b;
    console.log(`Type of result (${result}): ${typeof result}`);
    
    // Array example
    const numbers: number[] = [a, b, result];
    console.log(`Array: [${numbers.join(', ')}]`);
    console.log(`Array length: ${numbers.length}`);
  }
}