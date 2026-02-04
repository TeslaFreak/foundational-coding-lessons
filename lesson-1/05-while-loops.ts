// ========================================
// While Loops (Conditional Repetition)
// ========================================
// While loops repeat code as long as a condition is true

// Basic while loop - count from 1 to 5
console.log("Counting with while loop:");
let count = 1;
while (count <= 5) {
  console.log(count);
  count++;
}

// While loop with a different condition
console.log("\nCounting down:");
let countdown = 10;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Liftoff!");

// While loop that adds numbers
console.log("\nSum of numbers 1 to 10:");
let sum = 0;
let number = 1;
while (number <= 10) {
  sum = sum + number;
  number++;
}
console.log("Sum:", sum);

// While loop with a string condition
console.log("\nBuilding a string:");
let message = "";
let i = 0;
while (i < 5) {
  message = message + "* ";
  i++;
}
console.log(message);

// Do-while loop (runs at least once)
console.log("\nDo-while example:");
let x = 0;
do {
  console.log("This runs at least once. x =", x);
  x++;
} while (x < 3);

// Be careful with infinite loops!
// This would run forever (don't uncomment):
// while (true) {
//   console.log("This never stops!");
// }

// While loop vs For loop comparison
console.log("\nComparing while and for:");

// Using while
console.log("While loop:");
let j = 0;
while (j < 3) {
  console.log(j);
  j++;
}

// Using for (does the same thing)
console.log("For loop:");
for (let k = 0; k < 3; k++) {
  console.log(k);
}

// ========================================
// Try it yourself!
// ========================================
// Exercise 1: Use a while loop to print numbers from 10 to 20
// Your code here:


// Exercise 2: Calculate the sum of all even numbers from 2 to 20
// Your code here:


// Exercise 3: Print "Hello!" 5 times using a while loop
// Your code here:

