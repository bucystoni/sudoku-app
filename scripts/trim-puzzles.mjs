import fs from "node:fs";
import readline from "node:readline";

const MIN_CLUES = 25;
const MAX_CLUES = 45;
const PER_BUCKET = 200;
const INPUT_FILE = "scripts/data/raw/sudoku_cluewise.csv";
const OUTPUT_FILE = "backend/src/main/resources/puzzles.csv";

const counts = new Map();

const rl = readline.createInterface({
    input: fs.createReadStream(INPUT_FILE),
    crlfDelay: Infinity,
});

let isFirstLine = true;

const output = fs.createWriteStream(OUTPUT_FILE);

for await (const line of rl) {
    if (isFirstLine) {
        isFirstLine = false;
        output.write("puzzles,solutions,clue_numbers" + "\n");
        continue;
    }

    if (line.length === 0) continue;

    const clueNumber = Number(line.split(",")[2]);
    if (MIN_CLUES > clueNumber || MAX_CLUES < clueNumber) continue;

    const current = counts.get(clueNumber) ?? 0;
    if (current >= PER_BUCKET) {
        continue;
    } else {
        counts.set(clueNumber, current + 1);
    }

    output.write(line + "\n");
}

output.end();
console.log(counts);