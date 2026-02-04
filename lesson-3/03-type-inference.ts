// ========================================
// Type Inference
// ========================================
// Type inference is TypeScript's ability to automatically
// figure out what type a variable is based on its value
// You don't always have to write the type - TypeScript is smart!

// ========================================
// How Type Inference Works
// ========================================

console.log("=== Type Inference Basics ===");

// TypeScript can infer the type from the initial value
let message = "Hello!"; // TypeScript knows this is a string
let count = 42; // TypeScript knows this is a number
let ready = true; // TypeScript knows this is a boolean

console.log("Message:", message); // string
console.log("Count:", count); // number
console.log("Ready:", ready); // boolean

// Even without : string, : number, : boolean - TypeScript knows!

// ========================================
// Type Inference Still Provides Type Safety
// ========================================

console.log("\n=== Type Safety with Inference ===");

let score = 100; // Inferred as number
console.log("Score:", score);

// This works (assigning another number)
score = 95;
console.log("New score:", score);

// This would cause an error (uncomment to see):
// score = "ninety-five"; // Error! TypeScript inferred score is a number

console.log("TypeScript infers the type and enforces it!");

// ========================================
// Explicit vs Inferred Types
// ========================================

console.log("\n=== Explicit vs Inferred ===");

// These are the same to TypeScript!
let explicitName: string = "Alice";
let inferredName = "Bob";

console.log("Explicit:", explicitName); // Both are strings
console.log("Inferred:", inferredName); // Both are strings

// Both provide the same type safety
// explicitName = 123;  // Error!
// inferredName = 456;  // Error!

// ========================================
// When Type Inference Happens
// ========================================

console.log("\n=== Type Inference Examples ===");

// From string values
let city = "New York"; // inferred as string
let motto = "The Big Apple"; // inferred as string

// From number values
let population = 8000000; // inferred as number
let area = 302.6; // inferred as number
let founded = 1624; // inferred as number

// From boolean values
let isCapital = false; // inferred as boolean
let hasSubway = true; // inferred as boolean

console.log("City:", city);
console.log("Population:", population);
console.log("Is capital:", isCapital);

// ========================================
// Type Inference with Operations
// ========================================

console.log("\n=== Inference with Operations ===");

// TypeScript infers the result type of operations
let num1 = 10;
let num2 = 20;
let sum = num1 + num2; // inferred as number (10 + 20 = number)

let word1 = "Hello";
let word2 = "World";
let combined = word1 + " " + word2; // inferred as string

console.log("Sum:", sum); // 30 (number)
console.log("Combined:", combined); // "Hello World" (string)

// ========================================
// Type Inference with Arrays
// ========================================

console.log("\n=== Inference with Arrays ===");

// TypeScript infers array types too!
let fruits = ["apple", "banana", "orange"]; // inferred as string[]
let numbers = [1, 2, 3, 4, 5]; // inferred as number[]
let booleans = [true, false, true]; // inferred as boolean[]

console.log("Fruits:", fruits); // string[]
console.log("Numbers:", numbers); // number[]
console.log("Booleans:", booleans); // boolean[]

// Type safety still applies
// fruits.push(123); // Error! Can't add number to string[]
fruits.push("grape"); // Works! Adding string to string[]
console.log("Updated fruits:", fruits);

// ========================================
// When to Use Inference vs Explicit Types
// ========================================

console.log("\n=== When to Use Each Approach ===");

// Use INFERENCE when the type is obvious:
let price = 19.99; // Obviously a number
let productName = "Laptop"; // Obviously a string
let inStock = true; // Obviously a boolean

// Use EXPLICIT TYPES when:

// 1. The variable is declared without an initial value
let futureValue: string;
futureValue = "Assigned later";

// 2. You want to make the type extra clear
let temperature: number = 72; // Clear it's a number, not just any value
let userId: string = "12345"; // Looks like number, but it's actually a string

// 3. The type might not be obvious to other developers
let ratio: number = 0.75; // Could be confused with percentage

console.log("Both approaches work! Use what makes your code clearer.");

// ========================================
// Mixed Examples
// ========================================

console.log("\n=== Real-World Example ===");

// Building a user profile - mix of inferred and explicit types
let username = "john_doe"; // inferred as string
let email = "john@example.com"; // inferred as string
let age = 25; // inferred as number
let isVerified = true; // inferred as boolean
let profileViews = 1250; // inferred as number

// Array of hobbies - inferred as string[]
let hobbies = ["reading", "gaming", "coding"];

console.log("User Profile:");
console.log("  Username:", username);
console.log("  Email:", email);
console.log("  Age:", age);
console.log("  Verified:", isVerified);
console.log("  Profile views:", profileViews);
console.log("  Hobbies:", hobbies);

// ========================================
// Key Takeaways
// ========================================

console.log("\n=== Key Takeaways ===");
console.log("1. TypeScript can automatically figure out types");
console.log("2. Inference provides the same safety as explicit types");
console.log("3. Use inference when the type is obvious");
console.log("4. Use explicit types when you need clarity");
console.log("5. Both approaches help prevent bugs!");

// ========================================
// Try it yourself!
// ========================================
// Exercise 1: Create variables WITHOUT type annotations (let TypeScript infer)
// Create: a name, an age, and whether you're a student
// Your code here:


// Exercise 2: Try to assign a wrong type to an inferred variable
// Create a variable with a number, then try to assign it a string
// Uncomment to see the error:
// let myNumber = 42;
// myNumber = "forty-two"; // Error!


// Exercise 3: Create an array and let TypeScript infer its type
// Then try adding an item of the wrong type to see the error
// Your code here:


// Exercise 4: Create a calculation and print the result
// Notice TypeScript infers the result type
// Your code here:
