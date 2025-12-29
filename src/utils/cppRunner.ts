import { exec } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs';
import * as path from 'path';

const execAsync = promisify(exec);

export class CppRunner {
  /**
   * Compile and run a C++ file
   */
  static async compileAndRun(
    sourceFile: string, 
    outputFile: string, 
    args: string[] = [],
    compilerFlags: string[] = ['-std=c++17', '-Wall', '-Wextra']
  ): Promise<string> {
    try {
      // Check if source file exists
      if (!fs.existsSync(sourceFile)) {
        throw new Error(`Source file not found: ${sourceFile}`);
      }

      // Ensure output directory exists
      const outputDir = path.dirname(outputFile);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Compile the C++ file
      const compileCommand = `g++ ${compilerFlags.join(' ')} -o ${outputFile} ${sourceFile}`;
      console.log(`Compiling: ${compileCommand}`);
      
      const { stderr: compileError } = await execAsync(compileCommand);
      if (compileError) {
        throw new Error(`Compilation error: ${compileError}`);
      }

      // Run the compiled program
      const runCommand = `./${outputFile} ${args.join(' ')}`;
      console.log(`Running: ${runCommand}`);
      
      const { stdout, stderr } = await execAsync(runCommand);
      if (stderr) {
        console.warn(`Runtime warnings: ${stderr}`);
      }

      return stdout;
    } catch (error) {
      throw new Error(`C++ execution failed: ${error}`);
    }
  }

  /**
   * Compile only (without running)
   */
  static async compile(
    sourceFile: string, 
    outputFile: string,
    compilerFlags: string[] = ['-std=c++17', '-Wall', '-Wextra']
  ): Promise<void> {
    if (!fs.existsSync(sourceFile)) {
      throw new Error(`Source file not found: ${sourceFile}`);
    }

    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const compileCommand = `g++ ${compilerFlags.join(' ')} -o ${outputFile} ${sourceFile}`;
    console.log(`Compiling: ${compileCommand}`);
    
    const { stderr } = await execAsync(compileCommand);
    if (stderr) {
      throw new Error(`Compilation error: ${stderr}`);
    }
  }

  /**
   * Run a pre-compiled program
   */
  static async run(executableFile: string, args: string[] = []): Promise<string> {
    if (!fs.existsSync(executableFile)) {
      throw new Error(`Executable not found: ${executableFile}`);
    }

    const runCommand = `./${executableFile} ${args.join(' ')}`;
    console.log(`Running: ${runCommand}`);
    
    const { stdout, stderr } = await execAsync(runCommand);
    if (stderr) {
      console.warn(`Runtime warnings: ${stderr}`);
    }

    return stdout;
  }
}