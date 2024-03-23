// command line number guessing game
import prompt from "readline-sync";

// Function to generate random number within a range
function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize game and prompt user for difficulty level
console.log('\nWelcome to the number guessing game.\nPress control c to quit at any time.\n');
let level = prompt.question('Please enter a difficulty level: easy, medium, hard.\n').toLowerCase();
let start, end;

// Set range of numbers based on the selected difficulty level
while (!start || !end) {
    switch (level) {
        case 'easy':
            start = 1;
            end = 10;
            break;
        case 'medium':
            start = 1;
            end = 100;
            break;
        case 'hard':
            start = 1;
            end = 1000;
            break;
        default:
            level = prompt.question('\nPlease enter a valid difficulty level: easy, medium, hard.\n').toLowerCase();
            break;
    }
}

// Create random number within the selected difficulty level's range and prompt user for guess
const randomNumber = generateNumber(start, end);
let number = prompt.question(`\nPlease enter a number between ${start} and ${end}.\n`);

let guess = 0;

// Start loop
while (parseInt(number) !== randomNumber) {
    number = prompt.question(isNaN(number) || number < start || number > end ?
        `\nPlease enter a valid number between ${start} and ${end}.\n` :
        number < randomNumber ? 
        `\nToo low! Please enter a number between ${start} and ${end}.\n` :
        `\nToo high! Please enter a number between ${start} and ${end}.\n`);
        // Increment number of guesses while in loop
        guess++;
}

// Exit loop when correct
guess++; // Increment number of guesses for correct answer
console.log(`\nCorrect! You answered within ${guess} tries!\nEnter "node ." to play again.\n`);