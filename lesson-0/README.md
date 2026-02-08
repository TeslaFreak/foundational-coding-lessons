# Lesson 0: Environment Setup

Welcome! Before you can start coding, you need to set up your development environment. This lesson will guide you through installing everything you need on your MacBook to complete all the lessons in this course.

## What You'll Install

By the end of this lesson, you'll have:

1. **Homebrew** - A package manager that makes installing software on macOS easy
2. **Git** - Version control software to manage code and clone repositories
3. **Node.js and npm** - The JavaScript runtime and package manager needed to run TypeScript
4. **Visual Studio Code (VS Code)** - A powerful text editor for coding
5. **VS Code Extensions** - Tools that make coding easier
6. **This Repository** - All the lesson files ready to use

## Prerequisites

- A MacBook (macOS)
- An internet connection
- Administrator access on your computer

## Step-by-Step Setup Instructions

### Step 1: Install Homebrew

Homebrew is a package manager for macOS that makes it easy to install software from the command line.

1. **Open Terminal**:
   - Press `Command (⌘) + Space` to open Spotlight Search
   - Type "Terminal" and press Enter
   - A window with a command prompt will open

2. **Install Homebrew**:
   - Copy and paste this command into Terminal and press Enter:
   
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   
   - You'll be prompted to enter your Mac password (it won't show as you type - this is normal!)
   - Press Enter when prompted to continue the installation
   - This may take a few minutes

3. **Follow Post-Installation Instructions**:
   - After installation, Homebrew may display some commands to run. They typically look like:
   
   ```bash
   echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
   eval "$(/opt/homebrew/bin/brew shellenv)"
   ```
   
   - Copy and paste these commands into Terminal and press Enter
   - These commands ensure Homebrew is available in all future Terminal sessions

4. **Verify Installation**:
   - Run this command to confirm Homebrew is installed:
   
   ```bash
   brew --version
   ```
   
   - You should see something like `Homebrew 4.x.x`

### Step 2: Install Git

Git is a version control system that lets you track changes in your code and collaborate with others.

1. **Install Git using Homebrew**:
   
   ```bash
   brew install git
   ```

2. **Verify Installation**:
   
   ```bash
   git --version
   ```
   
   - You should see something like `git version 2.x.x`

3. **Configure Git** (replace with your information):
   
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
   
   - Use your actual name and email address
   - This information will be attached to your code commits

4. **Set Default Branch Name**:
   
   ```bash
   git config --global init.defaultBranch main
   ```

### Step 3: Install Node.js and npm

Node.js is a JavaScript runtime that lets you run JavaScript and TypeScript outside of a web browser. npm (Node Package Manager) comes with Node.js and is used to install JavaScript/TypeScript packages.

1. **Install Node.js using Homebrew**:
   
   ```bash
   brew install node
   ```
   
   - This installs both Node.js and npm

2. **Verify Node.js Installation**:
   
   ```bash
   node --version
   ```
   
   - You should see something like `v20.x.x` or higher

3. **Verify npm Installation**:
   
   ```bash
   npm --version
   ```
   
   - You should see something like `10.x.x` or higher

### Step 4: Install Visual Studio Code

VS Code is a free, powerful code editor that's perfect for learning and professional development.

1. **Install VS Code using Homebrew**:
   
   ```bash
   brew install --cask visual-studio-code
   ```
   
   - The `--cask` flag is used for GUI applications

2. **Open VS Code**:
   - You can now open VS Code from your Applications folder
   - Or, you can open it from Terminal by typing:
   
   ```bash
   code
   ```
   
   - If the `code` command doesn't work, open VS Code manually, then:
     - Press `Command (⌘) + Shift + P` to open the Command Palette
     - Type "Shell Command: Install 'code' command in PATH"
     - Press Enter

3. **First-Time Setup**:
   - When you first open VS Code, it may ask about sending usage data - choose your preference
   - You may also see a welcome screen with tips - feel free to explore or close it

### Step 5: Install Essential VS Code Extensions

Extensions add functionality to VS Code and make coding much easier. Let's install the most important ones for TypeScript and React development.

1. **Install Extensions from Terminal**:
   - You can install extensions directly from Terminal:
   
   ```bash
   code --install-extension dbaeumer.vscode-eslint
   code --install-extension esbenp.prettier-vscode
   code --install-extension ms-vscode.vscode-typescript-next
   code --install-extension dsznajder.es7-react-js-snippets
   ```

2. **Or Install Extensions from VS Code**:
   - Click the Extensions icon in the left sidebar (it looks like four squares)
   - Search for and install these extensions:
     - **ESLint** (by Dirk Baeumer) - Helps catch errors and enforce code quality
     - **Prettier - Code formatter** (by Prettier) - Automatically formats your code
     - **JavaScript and TypeScript Nightly** (by Microsoft) - Latest TypeScript features
     - **ES7+ React/Redux/React-Native snippets** (by dsznajder) - Code snippets for React

3. **Recommended Settings**:
   - Press `Command (⌘) + ,` to open Settings
   - Search for "Format On Save" and check the box
   - Search for "Auto Save" and select "afterDelay"
   - These settings will automatically save and format your code!

### Step 6: Clone This Repository

Now you're ready to get the course materials!

1. **Choose Where to Store Your Code**:
   - Decide where you want to keep your coding projects
   - A common choice is to create a "Code" or "Projects" folder in your home directory:
   
   ```bash
   mkdir -p ~/Code
   cd ~/Code
   ```

2. **Clone the Repository**:
   
   ```bash
   git clone https://github.com/TeslaFreak/foundational-coding-lessons.git
   ```
   
   - This downloads all the course files to your computer

3. **Navigate into the Repository**:
   
   ```bash
   cd foundational-coding-lessons
   ```

4. **Open in VS Code**:
   
   ```bash
   code .
   ```
   
   - The `.` means "current directory"
   - VS Code will open with all the lesson files visible in the sidebar

### Step 7: Install Project Dependencies

The project needs some additional packages to run. Let's install them!

1. **Make Sure You're in the Project Directory**:
   - In Terminal, you should still be in the `foundational-coding-lessons` directory
   - If not, navigate there:
   
   ```bash
   cd ~/Code/foundational-coding-lessons
   ```

2. **Install Dependencies**:
   
   ```bash
   npm install
   ```
   
   - This reads the `package.json` file and installs all required packages
   - You'll see a lot of text scroll by - this is normal!
   - This may take a minute or two

3. **What Got Installed?**:
   - **TypeScript** - The language you'll be learning
   - **ts-node** - Lets you run TypeScript files directly
   - **@types/node** - Type definitions for Node.js

### Step 8: Verify Your Setup

Let's make sure everything is working correctly!

1. **Test Running a TypeScript File**:
   
   ```bash
   npm run lesson lesson-1/01-print-statements.ts
   ```
   
   - You should see various messages printed to the console
   - If you see output, congratulations! Everything is working! 🎉

2. **Explore VS Code**:
   - In VS Code, click on `lesson-1` in the sidebar
   - Click on `01-print-statements.ts` to open it
   - You should see colored syntax highlighting
   - Try hovering over variables - you should see type information appear!

3. **Test the Terminal in VS Code**:
   - In VS Code, press `` Control (^) + ` `` (backtick) to open the integrated terminal
   - You can run commands here instead of using the separate Terminal app
   - Try running: `node --version`

## Understanding Your Setup

Now that everything is installed, let's understand what each tool does:

### Terminal
- The **Terminal** (or **Command Line**) is where you type commands to interact with your computer
- You'll use it to run your code, install packages, and use Git
- Don't worry if it seems intimidating - you'll get comfortable with it quickly!

### Homebrew
- Makes installing software on Mac super easy
- Instead of downloading installers, you just type `brew install <name>`
- Keeps software up to date with `brew update` and `brew upgrade`

### Git
- Tracks changes to your code over time
- Lets you collaborate with others
- Allows you to download (clone) code from GitHub
- You'll learn more about Git as you progress

### Node.js and npm
- **Node.js** runs JavaScript/TypeScript code on your computer (not just in browsers)
- **npm** is like an app store for code - it downloads packages (libraries) your projects need
- Every time you see `npm install` or `npm run`, you're using npm

### VS Code
- Your main tool for writing code
- Features like syntax highlighting, auto-completion, and error detection make coding easier
- The integrated terminal means you don't have to switch between windows
- Extensions add superpowers to VS Code

### TypeScript
- A programming language that adds types to JavaScript
- Helps catch errors before you run your code
- You'll learn what types are in Lesson 3!

## Common Issues and Solutions

### Issue: "command not found" errors
**Solution**: 
- Make sure you completed the Homebrew post-installation commands
- Try closing and reopening Terminal
- If on newer Macs, you might need to use `~/.zshrc` instead of `~/.zprofile`

### Issue: "Permission denied" when installing
**Solution**: 
- Never use `sudo` with Homebrew or npm unless explicitly told to
- If you have permission issues, you might need to fix ownership:
  ```bash
  sudo chown -R $(whoami) /usr/local/lib/node_modules
  ```

### Issue: Git clone fails
**Solution**: 
- Check your internet connection
- Make sure you typed the repository URL correctly
- If you see a "repository not found" error, verify the repository is public

### Issue: npm install fails
**Solution**: 
- Make sure you're in the correct directory (`foundational-coding-lessons`)
- Check that Node.js and npm are installed correctly (`node --version` and `npm --version`)
- Try deleting `node_modules` and `package-lock.json`, then run `npm install` again:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

### Issue: VS Code extensions not working
**Solution**: 
- Make sure the extensions are enabled (check the Extensions panel)
- Try reloading VS Code: `Command (⌘) + Shift + P`, then type "Reload Window"
- Restart VS Code completely if issues persist

## Quick Reference: Essential Commands

Here are the commands you'll use most often:

### Terminal Navigation
```bash
pwd                  # Print current directory path
ls                   # List files in current directory
cd <directory>       # Change to a directory
cd ..                # Go up one directory
mkdir <name>         # Create a new directory
```

### Git Commands
```bash
git clone <url>      # Download a repository
git status           # Check status of changes
git pull             # Get latest updates from GitHub
```

### npm Commands
```bash
npm install          # Install project dependencies
npm run lesson <file> # Run a TypeScript lesson file
```

### VS Code Shortcuts
```
⌘ + P                # Quick file search
⌘ + Shift + P        # Command Palette
⌘ + B                # Toggle sidebar
^ + `                # Toggle terminal
⌘ + S                # Save file
⌘ + ,                # Open settings
```

## What's Next?

Congratulations! Your development environment is now fully set up. You're ready to start learning to code! 🎉

### Next Steps:

1. **Get Comfortable with Your Setup**:
   - Explore VS Code and try opening different files
   - Practice using the Terminal
   - Get familiar with the repository structure

2. **Start Learning**:
   - Head over to [Lesson 1: TypeScript Basics](../lesson-1/) to begin your coding journey
   - Make sure to read the README.md in each lesson folder
   - Take your time - there's no rush!

3. **Join the Community**:
   - Don't hesitate to ask questions if you get stuck
   - Learning to code is a journey - enjoy the process!

## Additional Resources

### Learning More About Your Tools:
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [VS Code Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
- [npm Documentation](https://docs.npmjs.com/)
- [Terminal Basics for Mac](https://support.apple.com/guide/terminal/welcome/mac)

### Troubleshooting:
- [Homebrew FAQ](https://docs.brew.sh/FAQ)
- [Node.js Guides](https://nodejs.org/en/docs/guides/)
- [VS Code Documentation](https://code.visualstudio.com/docs)

## Summary

You've accomplished a lot in this lesson:
- ✅ Installed Homebrew for easy package management
- ✅ Set up Git for version control
- ✅ Installed Node.js and npm for running TypeScript
- ✅ Got VS Code ready with helpful extensions
- ✅ Cloned the course repository
- ✅ Installed project dependencies
- ✅ Verified everything works!

Your machine is now a fully functional development environment. You have everything you need to write, run, and debug TypeScript code, build React applications, and grow as a programmer.

**Welcome to the world of coding! Let's get started with Lesson 1! 🚀**
