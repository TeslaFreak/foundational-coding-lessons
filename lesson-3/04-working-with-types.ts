// ========================================
// Working with Types in Practice
// ========================================
// Let's apply what we've learned about types to solve real problems!
// This file shows practical examples of using types in everyday coding

// ========================================
// Example 1: Building a Shopping Cart
// ========================================

console.log("=== Shopping Cart Example ===");

let itemName: string = "Laptop";
let itemPrice: number = 999.99;
let quantity: number = 2;
let inStock: boolean = true;

let totalPrice: number = itemPrice * quantity;

console.log("Item:", itemName);
console.log("Price per item: $" + itemPrice);
console.log("Quantity:", quantity);
console.log("Total: $" + totalPrice);
console.log("In stock:", inStock);

if (inStock) {
  console.log("✅ You can buy this item!");
} else {
  console.log("❌ Sorry, this item is out of stock");
}

// ========================================
// Example 2: Student Grade Calculator
// ========================================

console.log("\n=== Grade Calculator ===");

let studentName: string = "Emma";
let mathScore: number = 92;
let scienceScore: number = 88;
let englishScore: number = 95;

let averageScore: number = (mathScore + scienceScore + englishScore) / 3;
let isPassing: boolean = averageScore >= 60;

console.log("Student:", studentName);
console.log("Math:", mathScore);
console.log("Science:", scienceScore);
console.log("English:", englishScore);
console.log("Average:", averageScore.toFixed(2));
console.log("Passing:", isPassing);

// Determine letter grade
let grade: string;
if (averageScore >= 90) {
  grade = "A";
} else if (averageScore >= 80) {
  grade = "B";
} else if (averageScore >= 70) {
  grade = "C";
} else {
  grade = "F";
}

console.log("Letter grade:", grade);

// ========================================
// Example 3: User Account System
// ========================================

console.log("\n=== User Account System ===");

let accountUsername: string = "alex_2024";
let accountEmail: string = "alex@example.com";
let accountAge: number = 22;
let accountBalance: number = 150.75;
let isEmailVerified: boolean = true;
let isPremiumMember: boolean = false;

console.log("Account Details:");
console.log("  Username:", accountUsername);
console.log("  Email:", accountEmail);
console.log("  Age:", accountAge);
console.log("  Balance: $" + accountBalance);
console.log("  Email verified:", isEmailVerified);
console.log("  Premium member:", isPremiumMember);

// Check account status
if (isEmailVerified && accountAge >= 18) {
  console.log("✅ Account fully activated!");
} else {
  console.log("⚠️  Account needs verification");
}

// ========================================
// Example 4: Temperature Converter
// ========================================

console.log("\n=== Temperature Converter ===");

let fahrenheit: number = 72;
let celsius: number = (fahrenheit - 32) * 5 / 9;
let isFreezing: boolean = celsius <= 0;
let isHot: boolean = celsius >= 30;

console.log("Temperature:", fahrenheit + "°F");
console.log("In Celsius:", celsius.toFixed(1) + "°C");
console.log("Is freezing:", isFreezing);
console.log("Is hot:", isHot);

let weatherDescription: string;
if (isFreezing) {
  weatherDescription = "Bundle up! It's freezing!";
} else if (isHot) {
  weatherDescription = "Stay cool! It's hot outside!";
} else {
  weatherDescription = "Nice weather today!";
}

console.log(weatherDescription);

// ========================================
// Example 5: Todo List Items
// ========================================

console.log("\n=== Todo List ===");

let task1: string = "Learn about types";
let task1Complete: boolean = true;

let task2: string = "Practice TypeScript";
let task2Complete: boolean = false;

let task3: string = "Build a project";
let task3Complete: boolean = false;

let totalTasks: number = 3;
let completedTasks: number = 0;

if (task1Complete) completedTasks++;
if (task2Complete) completedTasks++;
if (task3Complete) completedTasks++;

let remainingTasks: number = totalTasks - completedTasks;
let allDone: boolean = completedTasks === totalTasks;

console.log("Tasks:");
console.log("  1.", task1, "-", task1Complete ? "✅" : "⬜");
console.log("  2.", task2, "-", task2Complete ? "✅" : "⬜");
console.log("  3.", task3, "-", task3Complete ? "✅" : "⬜");
console.log("\nProgress:", completedTasks + "/" + totalTasks);
console.log("Remaining:", remainingTasks);
console.log("All done:", allDone);

// ========================================
// Example 6: Working with Arrays and Types
// ========================================

console.log("\n=== Working with Arrays ===");

let movieTitles: string[] = ["Inception", "The Matrix", "Interstellar"];
let movieRatings: number[] = [8.8, 8.7, 8.6];
let movieWatched: boolean[] = [true, true, false];

console.log("Movie Collection:");
for (let i = 0; i < movieTitles.length; i++) {
  let status = movieWatched[i] ? "Watched ✅" : "Not watched ⬜";
  console.log(`  ${movieTitles[i]} - Rating: ${movieRatings[i]} - ${status}`);
}

// Calculate average rating
let totalRating: number = 0;
for (let rating of movieRatings) {
  totalRating += rating;
}
let averageRating: number = totalRating / movieRatings.length;
console.log("Average rating:", averageRating.toFixed(2));

// ========================================
// Example 7: Type Safety Prevents Bugs
// ========================================

console.log("\n=== Type Safety in Action ===");

// These types prevent common mistakes:

// Mistake 1: Accidentally using wrong type for calculations
let quantity1: number = 5;
let quantity2: number = 3;
let total = quantity1 + quantity2; // 8 (correct math)
console.log("Quantity total:", total);

// If we used strings by mistake (in plain JavaScript):
let stringQty1 = "5";
let stringQty2 = "3";
let wrongTotal = stringQty1 + stringQty2; // "53" (string concatenation, not math!)
console.log("String concatenation:", wrongTotal); // Oops!

// TypeScript would prevent: let qty: number = "5"; ← Error!

// Mistake 2: Using wrong type in conditions
let age: number = 25;
let canVote: boolean = age >= 18; // Correct comparison
console.log("Can vote:", canVote);

// TypeScript prevents: if (age === "25") ← Error! Can't compare number to string

// ========================================
// Best Practices Summary
// ========================================

console.log("\n=== Best Practices ===");
console.log("1. Use types to make your intentions clear");
console.log("2. Let TypeScript infer types when obvious");
console.log("3. Use explicit types when it helps readability");
console.log("4. Types prevent bugs before code runs");
console.log("5. Types make code easier to understand and maintain");

// ========================================
// Try it yourself!
// ========================================

// Exercise 1: Create a simple restaurant bill calculator
// Create variables for:
//   - menuItem (string)
//   - itemPrice (number)
//   - taxRate (number, like 0.08 for 8%)
//   - tipPercentage (number, like 0.20 for 20%)
// Calculate and print the total bill
// Your code here:


// Exercise 2: Create a fitness tracker
// Create variables for:
//   - exerciseName (string)
//   - duration (number, in minutes)
//   - caloriesBurned (number)
//   - isCompleted (boolean)
// Print a summary of the workout
// Your code here:


// Exercise 3: Create a book collection
// Create arrays for:
//   - bookTitles (string[])
//   - bookPages (number[])
//   - hasRead (boolean[])
// Print information about each book
// Your code here:


// Exercise 4: Build a simple game character
// Create variables for:
//   - characterName (string)
//   - healthPoints (number)
//   - level (number)
//   - isAlive (boolean)
//   - inventory (string[])
// Print the character's status
// Your code here:
