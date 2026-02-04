// ========================================
// For Loops (Repetition)
// ========================================
// For loops let us repeat code a specific number of times

// Basic for loop - count from 0 to 4
console.log("Counting from 0 to 4:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Count from 1 to 10
console.log("\nCounting from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Count by 2s (even numbers)
console.log("\nEven numbers from 0 to 10:");
for (let i = 0; i <= 10; i = i + 2) {
  console.log(i);
}

// Count backwards
console.log("\nCountdown from 5 to 1:");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("Blast off!");

// Using loop variable in calculations
console.log("\nMultiplication table for 5:");
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}

// Nested loops (loop inside a loop)
console.log("\nSimple pattern:");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("i=" + i + ", j=" + j);
  }
}

// Loop through an array
let fruits = ["apple", "banana", "orange", "grape"];
console.log("\nMy favorite fruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log((i + 1) + ". " + fruits[i]);
}

// ========================================
// Try it yourself!
// ========================================
// Exercise 1: Print numbers from 1 to 20
// Your code here:


// Exercise 2: Print only odd numbers from 1 to 10
// Your code here:


// Exercise 3: Create a multiplication table for the number 7
// Your code here:

