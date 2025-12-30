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
import * as readline from "readline";

export async function runTask1() {
   console.log(
      "Paste all input (including P S and all commands), then press Enter twice:"
   );

   // Read all input at once
   const rl: readline.Interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
   });

   let allInput: string = "";

   for await (const line of rl) {
      allInput += line + "\n";
   }

   rl.close();

//    SPLIT
// "abc".split("") => ["a","b","c"] -> Массив рядків

   const lines: string[] = allInput.split("\n");
   const [P, S] = lines[0].split(" ").map((x) => parseInt(x));
   console.log(`P: ${P} комірок, S: ${S} справ`);

   // Initialize fields - all items start in field 0
   const P_fields: number[][] = Array.from({ length: P }, () => []);
//    => P_fields = [ [], [], [], ..., [] ]  // P порожніх масивів
   P_fields[0] = Array.from({ length: S }, (_, i) => S - 1 - i);
//    => P-fields[0] = [ S-1, S-2, S-3, ..., 2, 1, 0 ]

   // Process commands
   for (let i = 1; i < lines.length; i++) {
      const line: string = lines[i];

      if (line.startsWith("v")) {
         const v: number = parseInt(line.split(" ")[1]);
         const field = P_fields[v];
         console.log(
            `policko ${v}: ${field.length > 0 ? field.join(" ") : "-"}`
         );
      } else if (line.startsWith("p")) {
         const parts: number[] = line.split(" ").map((x) => parseInt(x));
         const a: number = parts[1];
         const b: number = parts[2];
         const c: number = parts[3];
         const sourceField: number[] = P_fields[a];
         const destinationField: number[] = P_fields[b];
         const movingTasks: number[] = sourceField.slice(0, c);
         const stayingTasks: number[] = sourceField.slice(c, sourceField.length);
         P_fields[b] = movingTasks.concat(destinationField);
         P_fields[a] = stayingTasks;
         const nonEmptyFields: number = P_fields.filter(
            (field) => field.length > 0
         ).length;
         console.log(`pocet kopok: ${nonEmptyFields}`);
      } else if (line.startsWith("k")) {
         break;
      }
   }
}

runTask1();

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
