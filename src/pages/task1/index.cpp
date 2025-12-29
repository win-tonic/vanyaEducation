// Малорик тут ты будешь писать на C++ код аналогичный index.ts

// Input example:
// 5 6
// v 0
// p 0 3 3
// v 0
// v 1
// v 3
// p 0 3 1
// v 0
// v 3
// p 3 1 4
// p 1 2 2
// v 3
// v 1
// v 2
// p 2 0 2
// p 1 0 2
// v 0
// v 1
// v 2
// v 3
// v 4
// k


// import * as readline from 'readline';

// export async function runTask1() {
//    console.log("Paste all input (including P S and all commands), then press Enter twice:");
   
//    // Read all input at once
//    const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//    });

//    let allInput = "";
//    let emptyLineCount = 0;

//    for await (const line of rl) {
//       if (line.trim() === "") {
//          emptyLineCount++;
//          if (emptyLineCount >= 2) break; // Stop after 2 empty lines
//       } else {
//          emptyLineCount = 0;
//          allInput += line + "\n";
//       }
//    }

//    rl.close();

//    const lines = allInput.trim().split("\n");
//    const [P, S] = lines[0].split(" ").map(x => parseInt(x));
//    console.log(`P: ${P} комірок, S: ${S} справ`);
   
//    // Initialize fields - all items start in field 0
//    const P_fields: number[][] = Array.from({ length: P }, () => []);
//    P_fields[0] = Array.from({ length: S }, (_, i) => S - 1 - i);

//    // Process commands
//    for (let i = 1; i < lines.length; i++) {
//       const line = lines[i].trim();
      
//       if (line.startsWith("v")) {
//          const v = parseInt(line.split(" ")[1]);
//          const field = P_fields[v];
//          console.log(`policko ${v}: ${field.length > 0 ? field.join(" ") : "-"}`);
//       } else if (line.startsWith("p")) {
//          const parts = line.split(" ").map(x => parseInt(x));
//          const a = parts[1];
//          const b = parts[2];
//          const c = parts[3];
//          const sourceField = P_fields[a];
//          const destinationField = P_fields[b];
//          const movingTasks = sourceField.slice(0, c);
//          const stayingTasks = sourceField.slice(c, sourceField.length);
//          P_fields[b] = movingTasks.concat(destinationField);
//          P_fields[a] = stayingTasks;
//          const nonEmptyFields = P_fields.filter(field => field.length > 0).length;
//          console.log(`pocet kopok: ${nonEmptyFields}`);
//       } else if (line.startsWith("k")) {
//          break;
//       }
//    }
// }
// 
// runTask1();


// Expected Output:
// 
// P: 5 комірок, S: 6 справ
// policko 0: 5 4 3 2 1 0
// pocet kopok: 2
// policko 0: 2 1 0
// policko 1: -
// policko 3: 5 4 3
// pocet kopok: 2
// policko 0: 1 0
// policko 3: 2 5 4 3
// pocet kopok: 2
// pocet kopok: 3
// policko 3: -
// policko 1: 4 3
// policko 2: 2 5
// pocet kopok: 2
// pocet kopok: 1
// policko 0: 4 3 2 5 1 0
// policko 1: -
// policko 2: -
// policko 3: -
// policko 4: -
