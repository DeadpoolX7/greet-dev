#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import themes from './themes.js';

// Resolve __dirname and __filename in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load motivational quotes from JSON file
const quotes = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data', 'quotes.json'), 'utf8')
);

// Load package metadata
const pkg = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8')
);

/**
 * Selects a random quote from the quotes array.
 * @returns {string} A random motivational quote.
 */
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Define available border styles
const borderStyles = {
  single: {
    topLeft: '┌', top: '─', topRight: '┐',
    left: '│', right: '│',
    bottomLeft: '└', bottom: '─', bottomRight: '┘'
  },
  double: {
    topLeft: '╔', top: '═', topRight: '╗',
    left: '║', right: '║',
    bottomLeft: '╚', bottom: '═', bottomRight: '╝'
  },
  round: {
    topLeft: '╭', top: '─', topRight: '╮',
    left: '│', right: '│',
    bottomLeft: '╰', bottom: '─', bottomRight: '╯'
  }
};

// Emojis for greeting and quote
const GREETING_EMOJI = '👋';
const QUOTE_EMOJI = '💡';

// Helper to center-align text in a given width
function centerText(text, width) {
  const len = text.replace(/\x1b\[[0-9;]*m/g, '').length; // strip ANSI
  if (len >= width) return text;
  const pad = width - len;
  const padLeft = Math.floor(pad / 2);
  const padRight = pad - padLeft;
  return ' '.repeat(padLeft) + text + ' '.repeat(padRight);
}

// Boxed layout printer
function printBoxedGreeting({ name, theme, borderStyle }) {
  const selectedTheme = themes[theme] || themes.dark;
  const selectedBorder = borderStyles[borderStyle] || borderStyles.single;
  const quote = getRandomQuote();

  // Prepare lines
  const greetingLine = `${GREETING_EMOJI} Hello, ${name}!`;
  const quoteLine = `${QUOTE_EMOJI} "${quote}"`;

  // Determine box width (max line length + padding)
  const contentLines = [greetingLine, quoteLine];
  const contentWidth = Math.max(...contentLines.map(l => l.length));
  const boxWidth = Math.max(50, contentWidth + 4);

  // Build box
  const top = selectedTheme.border(
    selectedBorder.topLeft +
    selectedBorder.top.repeat(boxWidth - 2) +
    selectedBorder.topRight
  );
  const bottom = selectedTheme.border(
    selectedBorder.bottomLeft +
    selectedBorder.bottom.repeat(boxWidth - 2) +
    selectedBorder.bottomRight
  );
  const empty = selectedTheme.border(selectedBorder.left) +
    ' '.repeat(boxWidth - 2) +
    selectedTheme.border(selectedBorder.right);

  // Print box
  console.log('\n' + top);
  console.log(empty);
  console.log(
    selectedTheme.border(selectedBorder.left) +
    selectedTheme.name(centerText(greetingLine, boxWidth - 2)) +
    selectedTheme.border(selectedBorder.right)
  );
  console.log(
    selectedTheme.border(selectedBorder.left) +
    selectedTheme.quote(centerText(quoteLine, boxWidth - 2)) +
    selectedTheme.border(selectedBorder.right)
  );
  console.log(empty);
  console.log(bottom + '\n');
}

// Configure CLI options and actions
program
  .version(pkg.version)
  .description('A CLI tool to greet developers with style and motivation')
  .option('-n, --name <name>', 'Your name for a personalized greeting', 'Developer')
  .option('-t, --theme <theme>', 'Choose a theme (dark, light, neon, ...)', 'dark')
  .option('-b, --border <border>', 'Border style (single, double, round)', 'single')
  .action(({ name, theme, border }) => {
    if (!themes[theme]) {
      console.log(
        chalk.red(`Invalid theme! Available themes: ${Object.keys(themes).join(', ')}`)
      );
      process.exit(1);
    }
    if (!borderStyles[border]) {
      console.log(
        chalk.red(`Invalid border! Available borders: ${Object.keys(borderStyles).join(', ')}`)
      );
      process.exit(1);
    }
    printBoxedGreeting({ name, theme, borderStyle: border });
  });

// Parse command-line arguments
program.parse(process.argv);