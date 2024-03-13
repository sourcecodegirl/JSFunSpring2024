let numbers = [10000, -8, 10, 0.7]; // e.g.

/**
 * Create a variable called "sum".
 * It should be equal to the sum of all the numbers in an array.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

//let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3];
//console.log(sum);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
}

console.log(sum);