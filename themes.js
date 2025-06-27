import chalk from 'chalk';

const themes = {
  dark: {
    name: chalk.cyan.bold,
    quote: chalk.whiteBright,
    border: chalk.blueBright,
  },
  light: {
    name: chalk.blue.bold,
    quote: chalk.blackBright,
    border: chalk.gray,
  },
  neon: {
    name: chalk.magenta.bold,
    quote: chalk.greenBright,
    border: chalk.yellow,
  },
  sunset: {
    name: chalk.hex('#FF5E13').bold, // orange
    quote: chalk.hex('#FFD580'),     // light yellow
    border: chalk.hex('#FF8C42'),    // deep orange
  },
  ocean: {
    name: chalk.hex('#00B8D9').bold, // aqua blue
    quote: chalk.hex('#B2F7EF'),     // light aqua
    border: chalk.hex('#005377'),    // deep blue
  },
  forest: {
    name: chalk.hex('#228B22').bold, // forest green
    quote: chalk.hex('#A8E6A3'),     // light green
    border: chalk.hex('#4E944F'),    // medium green
  },
  candy: {
    name: chalk.hex('#FF69B4').bold, // hot pink
    quote: chalk.hex('#FFD1DC'),     // pastel pink
    border: chalk.hex('#FFB347'),    // pastel orange
  },
  midnight: {
    name: chalk.hex('#8A2BE2').bold, // blue violet
    quote: chalk.hex('#E0E0E0'),     // light gray
    border: chalk.hex('#191970'),    // midnight blue
  },
  aurora: {
    name: chalk.hex('#00FFC6').bold, // neon aqua
    quote: chalk.hex('#FF61A6'),     // pink
    border: chalk.hex('#2DFFDF'),    // teal
  },
  sunrise: {
    name: chalk.hex('#FFB347').bold, // soft orange
    quote: chalk.hex('#FFFACD'),     // lemon chiffon
    border: chalk.hex('#FF6961'),    // coral red
  },
  lavender: {
    name: chalk.hex('#B57EDC').bold, // lavender
    quote: chalk.hex('#E3E4FA'),     // lavender mist
    border: chalk.hex('#8D6EB3'),    // muted purple
  },
  emerald: {
    name: chalk.hex('#50C878').bold, // emerald green
    quote: chalk.hex('#D4F5E9'),     // mint
    border: chalk.hex('#34875A'),    // deep green
  },
  firefly: {
    name: chalk.hex('#FFD700').bold, // gold
    quote: chalk.hex('#BFFF00'),     // chartreuse
    border: chalk.hex('#FF4500'),    // orange red
  },
  galaxy: {
    name: chalk.hex('#7F00FF').bold, // violet
    quote: chalk.hex('#E100FF'),     // magenta
    border: chalk.hex('#0F2027'),    // dark blue-black
  },
  sandcastle: {
    name: chalk.hex('#C2B280').bold, // sand
    quote: chalk.hex('#FFF8DC'),     // cornsilk
    border: chalk.hex('#A0522D'),    // sienna
  },
  mint: {
    name: chalk.hex('#3EB489').bold, // mint green
    quote: chalk.hex('#E0FFF0'),     // pale mint
    border: chalk.hex('#2E8B57'),    // sea green
  },
  // Add more themes here as needed
};

export default themes;
