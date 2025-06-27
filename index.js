#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import themes from './themes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const quotes = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'quotes.json'), 'utf8'));

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function generateGreeting(name = 'Developer', theme = 'dark') {
  const selectedTheme = themes[theme] || themes.dark;
  const quote = getRandomQuote();
  const border = selectedTheme.border('═'.repeat(50));

  console.log(`\n${border}`);
  console.log(selectedTheme.name(`Hello, ${name}!`));
  console.log(selectedTheme.quote(`"${quote}"`));
  console.log(`${border}\n`);
}

program
  .version(pkg.version)
  .description('A CLI tool to greet developers with style and motivation')
  .option('-n, --name <name>', 'Your name for a personalized greeting', 'Developer')
  .option('-t, --theme <theme>', 'Choose a theme (dark, light, neon)', 'dark')
  .action(({ name, theme }) => {
    if (!themes[theme]) {
      console.log(chalk.red(`Invalid theme! Available themes: ${Object.keys(themes).join(', ')}`));
      process.exit(1);
    }
    generateGreeting(name, theme);
  });

program.parse(process.argv);