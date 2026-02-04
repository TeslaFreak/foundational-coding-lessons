// ========================================
// What Are Types?
// ========================================
// Types tell us what KIND of data we're working with
// Every piece of data has a type - let's explore the basic ones!

// ========================================
// The Three Most Common Types
// ========================================

// 1. STRING - Text data (words, sentences, etc.)
let firstName: string = "Alice";
let greeting: string = "Hello, world!";
let email: string = "alice@example.com";

console.log("=== STRINGS (Text) ===");
console.log("Name:", firstName);
console.log("Greeting:", greeting);
console.log("Email:", email);

// 2. NUMBER - Numeric data (integers and decimals)
let age: number = 25;
let price: number = 19.99;
let temperature: number = -5;

console.log("\n=== NUMBERS ===");
console.log("Age:", age);
console.log("Price:", price);
console.log("Temperature:", temperature);

// 3. BOOLEAN - True or False values
let isStudent: boolean = true;
let isRaining: boolean = false;
let hasLicense: boolean = true;

console.log("\n=== BOOLEANS (True/False) ===");
console.log("Is student:", isStudent);
console.log("Is raining:", isRaining);
console.log("Has license:", hasLicense);

// ========================================
// Why Types Matter - See the Difference!
// ========================================

console.log("\n=== Why Types Matter ===");

// Without types, these might look similar, but they're different!
let numberValue: number = 42;
let stringValue: string = "42";

console.log("Number:", numberValue);
console.log("String:", stringValue);
console.log("Are they the same? No! One is a number, one is text.");

// Math with numbers works
let sum: number = numberValue + 10;
console.log("Number + 10 =", sum); // 52

// Math with strings does something different (concatenation)
let combined: string = stringValue + "10";
console.log("String + '10' =", combined); // "4210" - it joins them!

// ========================================
// Type Safety in Action
// ========================================

console.log("\n=== Type Safety ===");

// TypeScript helps prevent mistakes!
let studentAge: number = 20;
console.log("Student age:", studentAge);

// This would cause an error (uncomment to see):
// studentAge = "twenty"; // Error! Cannot assign string to number

// TypeScript saves us from bugs before they happen!
console.log("TypeScript prevents: age = 'twenty' ❌");
console.log("TypeScript allows: age = 21 ✅");
studentAge = 21;
console.log("Updated age:", studentAge);

// ========================================
// More Type Examples
// ========================================

console.log("\n=== More Examples ===");

// Names are strings
let cityName: string = "New York";
let countryName: string = "USA";
console.log("City:", cityName);
console.log("Country:", countryName);

// Measurements are numbers
let height: number = 5.9;
let weight: number = 150;
let siblings: number = 2;
console.log("Height:", height);
console.log("Weight:", weight);
console.log("Siblings:", siblings);

// Yes/No answers are booleans
let isOnline: boolean = true;
let isCompleted: boolean = false;
console.log("Is online:", isOnline);
console.log("Is completed:", isCompleted);

// ========================================
// Key Takeaways
// ========================================

console.log("\n=== Key Takeaways ===");
console.log("1. string = text (words, sentences)");
console.log("2. number = numeric values (integers, decimals)");
console.log("3. boolean = true or false");
console.log("4. Types prevent mistakes in your code!");
console.log("5. TypeScript checks types automatically!");

// ========================================
// Try it yourself!
// ========================================
// Exercise 1: Create a string variable with your favorite movie
// Your code here:


// Exercise 2: Create a number variable with your birth year
// Your code here:


// Exercise 3: Create a boolean variable that says if you like pizza
// Your code here:


// Exercise 4: Try to assign a string to a number variable (see the error!)
// Uncomment this line to see TypeScript catch the mistake:
// let testNumber: number = "this will cause an error";
