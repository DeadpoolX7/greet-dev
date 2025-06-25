# Greet-Dev CLI

A simple, elegant CLI tool to greet developers with motivational quotes. Built with Node.js and pnpm.

---

## Features

- Personalized greetings with customizable names.
- Multiple themes (dark, light, neon) for stylish terminal output.
- 50+ curated quotes to inspire developers.
- Lightweight and fast, with easy setup.

---

## Installation

You can use `npx` for a quick start:

```bash
npx greet-dev
npx greet-dev -n Alice
npx greet-dev -n Bob -t neon
```

Or install globally:

```bash
npm install -g greet-dev
greet-dev
greet-dev -n Alice
greet-dev -n Bob -t neon
```

---

## Screenshot

![terminal-image](greet-dev-terminal.png)

---

## Usage

- Default greeting: `greet-dev`
- Personalized greeting: `greet-dev -n Alice`
- Themed greeting: `greet-dev -n Bob -t neon`
- Show version: `greet-dev --version`
- Show help: `greet-dev --help`

---

## Available Themes

- **dark** (default): Cyan name, white quote, blue border.
- **light**: Blue name, black quote, gray border.
- **neon**: Magenta name, green quote, yellow border.

---

## Project Structure

```
greet-dev/
├── node_modules/        #  Dependencies
├── data/                # Data files
│   └── quotes.json      # Motivational quotes
├── index.js             # Main CLI script
├── package.json         # Project metadata
└── README.md            # Documentation
```

