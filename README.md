# Vanya Education Platform

A TypeScript-based educational platform that can execute both TypeScript and C++ code for learning purposes.

## 📁 Project Structure

```
vanyaEducation/
├── .env                    # Environment variables
├── package.json           # Node.js dependencies and scripts
├── .gitignore            # Git ignore file
├── tsconfig.json         # TypeScript configuration
├── README.md             # This file
├── bin/                  # Compiled C++ executables
└── src/
    ├── @types/           # Custom TypeScript type definitions
    │   └── index.ts      # Platform-specific types
    ├── pages/            # Educational lessons/pages
    │   ├── basicMathLesson.ts
    │   └── typescriptBasics.ts
    ├── utils/            # Utility functions
    │   ├── consoleHelper.ts  # Console input/output utilities
    │   └── cppRunner.ts      # C++ compilation and execution
    ├── cpp/              # C++ source files
    │   └── main.cpp      # Sample C++ program
    └── index.ts          # Main application entry point
```

## 🚀 Getting Started

### Prerequisites

1. **Node.js** (v16 or higher)
2. **npm** or **yarn**
3. **g++** compiler (for C++ support)
   - On macOS: Install Xcode Command Line Tools (`xcode-select --install`)
   - On Windows: Install MinGW or Visual Studio
   - On Linux: Install build-essential (`sudo apt-get install build-essential`)

### Installation

1. Clone or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Development Mode (with TypeScript)
```bash
npm run dev
```

#### Production Mode (compiled JavaScript)
```bash
npm run build
npm start
```

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Run directly with ts-node (development)
- `npm start` - Run compiled JavaScript
- `npm run compile-cpp` - Compile C++ files
- `npm run run-cpp` - Compile and run C++ program
- `npm run clean` - Clean compiled files

## 🎯 Features

### TypeScript Lessons
- **Basic Math Lesson**: Interactive math calculations with type demonstrations
- **TypeScript Basics**: Learn interfaces, types, generics, and advanced features
- **Console Input/Output**: Practice with user interaction

### C++ Integration
- **Automatic Compilation**: Compile C++ files using g++
- **Interactive Execution**: Run C++ programs with input/output
- **Error Handling**: Proper error messages for compilation/runtime issues

### Educational Tools
- **Interactive Console**: Ask questions, get user input
- **Type Demonstrations**: Show TypeScript's type system
- **Cross-Language Learning**: Compare TypeScript and C++ concepts

## 📚 Usage Examples

### Adding New TypeScript Lessons

Create a new file in `src/pages/`:

```typescript
import { ConsoleHelper } from '../utils/consoleHelper';

export class MyNewLesson {
  static async run(): Promise<void> {
    console.log('🎯 My New Lesson');
    const name = await ConsoleHelper.askQuestion('Your name: ');
    console.log(`Hello, ${name}!`);
    
    // Your lesson logic here
  }
}
```

Then import and use it in `src/index.ts`.

### Adding New C++ Programs

1. Create a `.cpp` file in `src/cpp/`
2. Use the `CppRunner` utility to compile and run:

```typescript
import { CppRunner } from '../utils/cppRunner';

// Compile and run
const output = await CppRunner.compileAndRun(
  'src/cpp/myprogram.cpp', 
  'bin/myprogram'
);
console.log(output);
```

### Custom Types

Add new types in `src/@types/index.ts`:

```typescript
export interface MyCustomType {
  property: string;
}
```

## 🔧 Configuration

### Environment Variables (.env)
```bash
NODE_ENV=development
DEBUG=true
CXX_COMPILER=g++
CXX_FLAGS=-std=c++17 -Wall -Wextra
```

### TypeScript Configuration
The project uses TypeScript with strict mode enabled. Configuration is in `tsconfig.json`.

### C++ Compilation
Default flags: `-std=c++17 -Wall -Wextra`

## 🐛 Troubleshooting

### "g++ command not found"
Install a C++ compiler:
- macOS: `xcode-select --install`
- Ubuntu/Debian: `sudo apt-get install build-essential`
- Windows: Install MinGW or Visual Studio

### TypeScript Errors
Make sure all dependencies are installed:
```bash
npm install
```

### Permission Issues (macOS/Linux)
Make sure compiled binaries are executable:
```bash
chmod +x bin/program
```

## 🤝 Contributing

1. Add new lessons in `src/pages/`
2. Add utility functions in `src/utils/`
3. Add C++ examples in `src/cpp/`
4. Update types in `src/@types/`
5. Test both TypeScript and C++ functionality

## 📄 License

MIT License - feel free to use for educational purposes!