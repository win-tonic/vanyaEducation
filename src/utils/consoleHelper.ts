import * as readline from 'readline';

export class ConsoleHelper {
  private static rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  /**
   * Ask a question and wait for user input
   */
  static askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer.trim());
      });
    });
  }

  /**
   * Ask a question and get a number input
   */
  static async askNumber(question: string): Promise<number> {
    while (true) {
      const answer = await this.askQuestion(question);
      const num = parseFloat(answer);
      if (!isNaN(num)) {
        return num;
      }
      console.log('Please enter a valid number.');
    }
  }

  /**
   * Ask a yes/no question
   */
  static async askYesNo(question: string): Promise<boolean> {
    while (true) {
      const answer = await this.askQuestion(`${question} (y/n): `);
      const lower = answer.toLowerCase();
      if (lower === 'y' || lower === 'yes') {
        return true;
      }
      if (lower === 'n' || lower === 'no') {
        return false;
      }
      console.log('Please answer y/yes or n/no.');
    }
  }

  /**
   * Clear the console
   */
  static clear(): void {
    console.clear();
  }

  /**
   * Print a separator line
   */
  static separator(): void {
    console.log('─'.repeat(50));
  }

  /**
   * Close the readline interface
   */
  static close(): void {
    this.rl.close();
  }
}