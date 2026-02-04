// ========================================
// Type Annotations
// ========================================
// Type annotations are how we EXPLICITLY tell TypeScript
// what type a variable should be
// Syntax: let variableName: type = value;

// ========================================
// Explicit Type Annotations
// ========================================

console.log("=== Explicit Type Annotations ===");

// The : type part is the "type annotation"
let userName: string = "Bob";
let userAge: number = 30;
let isActive: boolean = true;

console.log("User:", userName, "Age:", userAge, "Active:", isActive);

// ========================================
// When to Use Type Annotations
// ========================================

console.log("\n=== When to Use Type Annotations ===");

// 1. When declaring a variable without an initial value
let futureValue: string; // We'll assign it later
futureValue = "Now I have a value!";
console.log("Future value:", futureValue);

// 2. When you want to be extra clear about the type
let productPrice: number = 29.99; // Clear that it's a number
let productName: string = "Laptop"; // Clear that it's text
console.log("Product:", productName, "Price:", productPrice);

// 3. When the type might not be obvious
let scorePercentage: number = 0.95; // Could look like money, but it's a percentage
let errorMessage: string = "404"; // Looks like a number, but it's a string!
console.log("Score:", scorePercentage);
console.log("Error:", errorMessage);

// ========================================
// Type Annotations with Different Types
// ========================================

console.log("\n=== Various Type Annotations ===");

// Strings (text)
let firstName: string = "Alice";
let lastName: string = "Smith";
let fullName: string = firstName + " " + lastName;
console.log("Full name:", fullName);

// Numbers (any numeric value)
let quantity: number = 5;
let total: number = 99.99;
let year: number = 2024;
let negativeBalance: number = -50;
console.log("Quantity:", quantity, "Total:", total, "Year:", year);

// Booleans (true or false)
let isLoggedIn: boolean = false;
let hasPermission: boolean = true;
let isVerified: boolean = true;
console.log("Logged in:", isLoggedIn, "Has permission:", hasPermission);

// ========================================
// Type Safety with Annotations
// ========================================

console.log("\n=== Type Safety in Action ===");

// Once we set a type, TypeScript enforces it!
let studentName: string = "Charlie";
console.log("Student:", studentName);

// This works (assigning another string)
studentName = "David";
console.log("Updated student:", studentName);

// These would cause errors (uncomment to see):
// studentName = 123;           // Error! Can't assign number to string
// studentName = true;          // Error! Can't assign boolean to string
// studentName = undefined;     // Error! Can't assign undefined to string

console.log("TypeScript protects us from assigning wrong types!");

// ========================================
// Multiple Variables of Same Type
// ========================================

console.log("\n=== Multiple Variables ===");

// You can declare multiple variables of the same type
let city: string = "Boston";
let state: string = "Massachusetts";
let country: string = "USA";

console.log("Location:", city, ",", state, ",", country);

let monday: number = 1;
let tuesday: number = 2;
let wednesday: number = 3;

console.log("Days:", monday, tuesday, wednesday);

// ========================================
// Arrays with Type Annotations
// ========================================

console.log("\n=== Arrays with Types ===");

// Arrays can also have type annotations!
// Type[] means "an array of Type"
let colors: string[] = ["red", "blue", "green"];
let scores: number[] = [90, 85, 92, 88];
let flags: boolean[] = [true, false, true];

console.log("Colors:", colors);
console.log("Scores:", scores);
console.log("Flags:", flags);

// TypeScript ensures all items match the array's type
// colors.push(123);  // Error! Can't add number to string array
colors.push("yellow"); // Works! Adding a string to string array
console.log("Updated colors:", colors);

// ========================================
// Benefits of Type Annotations
// ========================================

console.log("\n=== Benefits of Type Annotations ===");
console.log("1. Makes code self-documenting");
console.log("2. Catches errors before runtime");
console.log("3. Enables better editor autocomplete");
console.log("4. Helps other developers understand your code");
console.log("5. Prevents accidental type changes");

// ========================================
// Try it yourself!
// ========================================
// Exercise 1: Create variables with type annotations for:
//   - Your favorite food (string)
//   - Number of pets you have (number)
//   - Whether you like coding (boolean)
// Your code here:


// Exercise 2: Create an array of your top 3 favorite numbers
// Use type annotation: let variable: number[] = [...]
// Your code here:


// Exercise 3: Declare a variable with type annotation but no initial value
// Then assign it a value on the next line
// Your code here:


// Exercise 4: Try to create a number variable and assign it a string
// Uncomment to see the error:
// let testVar: number = "this should error";
