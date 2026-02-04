# Lesson 2: Introduction to React

Welcome to your second coding lesson! Now that you've learned the fundamentals of TypeScript in Lesson 1, it's time to apply those skills to build interactive web applications with React.

## What is React?

React is a popular JavaScript library for building user interfaces, especially for web applications. It allows you to:
- Create interactive, dynamic web pages
- Build reusable components (like buttons, forms, cards)
- Manage application state efficiently
- Update only the parts of a page that need to change

Think of React as a set of building blocks you can use to construct websites, just like how you learned to use variables, loops, and conditionals as building blocks in Lesson 1!

## What You'll Learn

In this lesson, you'll:
1. Set up a new React project using Vite (a fast build tool)
2. Apply your Lesson 1 skills (variables, if statements, loops) to React components
3. Create your first interactive web components
4. See your code come to life in a web browser!

## Setting Up Your React Project

### Prerequisites

Before starting, make sure you have:
- Node.js installed (you already used this in Lesson 1!)
- A text editor (VS Code recommended)
- A terminal/command prompt

### Step 1: Create a New React Project with Vite

Vite is a modern build tool that makes it easy to start a React project. Follow these steps:

1. Open your terminal
2. Navigate to where you want to create your project (not inside the foundational-coding-lessons folder)
3. Run the following command:

```bash
npm create vite@latest my-react-app -- --template react-ts
```

4. When prompted:
   - For "Use rolldown-vite (Experimental)?": Select `No` (press Enter)
   - For "Install with npm and start now?": Select `No` (press N, then Enter)

5. Navigate into your new project:

```bash
cd my-react-app
```

6. Install the dependencies:

```bash
npm install
```

7. Start the development server:

```bash
npm run dev
```

8. Open your browser and go to the URL shown in the terminal (usually `http://localhost:5173`)

Congratulations! You now have a running React application! 🎉

### Understanding the Project Structure

After creating your project, you'll see several folders and files:

```
my-react-app/
├── src/
│   ├── App.tsx          ← Your main application component
│   ├── App.css          ← Styles for your app
│   ├── main.tsx         ← Entry point of your app
│   └── index.css        ← Global styles
├── public/              ← Static files (images, icons)
├── index.html           ← Main HTML file
├── package.json         ← Project dependencies
└── vite.config.ts       ← Vite configuration
```

The most important file to start with is `src/App.tsx` - this is where you'll write your React code!

## Applying Lesson 1 Skills to React

Now let's put your Lesson 1 knowledge to work! React components use the same TypeScript concepts you learned.

### Task 1: Variables in React (Building on Lesson 1)

**Objective**: Use variables to display dynamic content on your webpage.

In Lesson 1, you learned about `let` and `const`. In React, we use these same concepts!

**Instructions**:
1. Open `src/App.tsx`
2. Find the `App` function
3. Inside the function (but before the `return` statement), create some variables:

```tsx
function App() {
  // Create your variables here (just like in Lesson 1!)
  const yourName = "Your Name Here";
  const favoriteNumber = 42;
  const isLearningReact = true;
  
  return (
    // Your JSX goes here
  )
}
```

4. Display these variables in your app by using curly braces `{}` inside the JSX:

```tsx
return (
  <div>
    <h1>Hello, {yourName}!</h1>
    <p>Your favorite number is: {favoriteNumber}</p>
    <p>Learning React: {isLearningReact ? "Yes!" : "No"}</p>
  </div>
)
```

5. Save the file and watch your browser automatically update!

**Exercise**: Create variables for your age, favorite color, and hometown, then display them on the page.

### Task 2: Conditional Rendering (Building on Lesson 1 If Statements)

**Objective**: Use if statements to show different content based on conditions.

Remember `if` statements from Lesson 1? In React, we use them to show or hide content!

**Instructions**:
1. In `src/App.tsx`, create a variable for time of day:

```tsx
function App() {
  const hour = new Date().getHours();
  let greeting;
  
  // Use if statements just like Lesson 1!
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  
  return (
    <div>
      <h1>{greeting}!</h1>
    </div>
  )
}
```

2. Save and see how the greeting changes based on the time of day!

**Exercise**: Create a variable `age` and use an if statement to display different messages for different age groups:
- Under 18: "You're a minor"
- 18-65: "You're an adult"
- Over 65: "You're a senior"

### Task 3: Rendering Lists (Building on Lesson 1 Loops)

**Objective**: Use loops to display multiple items on your webpage.

In Lesson 1, you learned about `for` loops. In React, we use `.map()` (a special kind of loop) to display lists!

**Instructions**:
1. Create an array of items:

```tsx
function App() {
  const fruits = ["Apple", "Banana", "Orange", "Grape", "Mango"];
  
  return (
    <div>
      <h2>My Favorite Fruits:</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}
```

2. The `.map()` function loops through each fruit and creates a list item for it - just like a `for` loop from Lesson 1!

**Exercise**: Create an array of your favorite hobbies or movies and display them in a numbered list.

### Task 4: Combining Everything

**Objective**: Create a small project that uses variables, conditionals, and loops together.

**Challenge**: Build a "Personal Info Card" that displays:
1. Your name and age (variables)
2. A greeting that changes based on time of day (if statements)
3. A list of your top 3 skills (loops with .map())
4. A message that says "Adult" or "Minor" based on your age (conditional rendering)

Here's a starter template:

```tsx
function App() {
  // 1. Create your variables
  const name = "Your Name";
  const age = 25;
  const skills = ["TypeScript", "Problem Solving", "React"];
  
  // 2. Create a greeting based on time
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  
  // 3. Determine if adult or minor
  const ageGroup = age >= 18 ? "Adult" : "Minor";
  
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{greeting}, {name}!</h1>
      <p>Age: {age} ({ageGroup})</p>
      
      <h2>My Skills:</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
```

Customize this template with your own information!

## Tips for Success

1. **Keep the dev server running** - When you run `npm run dev`, leave that terminal window open. Your app will automatically update when you save files!

2. **Read error messages** - If something breaks, React will show helpful error messages in your browser and terminal

3. **Use console.log()** - Just like in Lesson 1! You can use `console.log()` in your React components to debug

4. **Experiment** - Change values, add new variables, try different conditions. The best way to learn is by doing!

5. **Check the browser console** - Press F12 in your browser to see logs and errors

## Common Issues and Solutions

**Problem**: "npm: command not found"
- **Solution**: Make sure Node.js is installed. Run `node --version` to check.

**Problem**: Port already in use
- **Solution**: Another app is using port 5173. Close it or Vite will suggest a different port.

**Problem**: Changes not showing in browser
- **Solution**: Make sure you saved the file and the dev server is running. Try refreshing the browser.

**Problem**: Syntax errors
- **Solution**: Check for missing brackets, quotes, or semicolons. VS Code will usually highlight these!

## Next Steps

After completing these tasks, you'll have:
- ✅ Set up a React development environment
- ✅ Applied your TypeScript fundamentals to web development
- ✅ Created interactive web content
- ✅ Built your first React component!

Keep experimenting and building! Try adding:
- More conditional logic
- Different types of lists (ordered, unordered)
- Styling with CSS
- Additional variables and calculations

## Additional Resources

- [React Official Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript with React](https://react.dev/learn/typescript)

Happy coding! 🚀 You're now building for the web!
