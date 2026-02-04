// ========================================
// If Statements (Conditional Logic)
// ========================================
// If statements let us make decisions in our code
// Code runs only if a condition is true

// Basic if statement
let temperature = 75;

if (temperature > 70) {
  console.log("It's warm outside!");
}

// If-else statement
let age = 16;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You cannot vote yet.");
}

// If-else if-else chain
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Comparison operators
let x = 10;
let y = 20;

if (x < y) {
  console.log(x + " is less than " + y);
}

if (x != y) {
  console.log(x + " is not equal to " + y);
}

if (x == 10) {
  console.log("x is equal to 10");
}

// Multiple conditions with && (AND) and || (OR)
let hasTicket = true;
let isAdult = true;

if (hasTicket && isAdult) {
  console.log("You can enter the movie!");
}

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("No school today!");
}

// ========================================
// Try it yourself!
// ========================================
// Exercise 1: Check if a number is positive, negative, or zero
let number = 5;
// Your code here:


// Exercise 2: Check if someone is a teenager (age 13-19)
let personAge = 15;
// Your code here:


// Exercise 3: Check if it's a good day for the beach (sunny AND warm)
let isSunny = true;
let isWarm = true;
// Your code here:

