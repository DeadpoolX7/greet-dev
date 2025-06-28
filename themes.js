import chalk from 'chalk';

const themes = {
    dark: {
        name: chalk.cyan.bold,
        quote: chalk.whiteBright,
        border: chalk.blueBright,
        category: chalk.cyanBright.italic,
    },
    light: {
        name: chalk.blue.bold,
        quote: chalk.blackBright,
        border: chalk.gray,
        category: chalk.magenta.italic,
    },
    neon: {
        name: chalk.magenta.bold,
        quote: chalk.greenBright,
        border: chalk.yellow,
        category: chalk.hex('#ffa500').italic,
    },
    sunset: {
        name: chalk.hex('#FF5E13').bold, // orange
        quote: chalk.hex('#FFD580'),     // light yellow
        border: chalk.hex('#FF8C42'),    // deep orange
        category: chalk.hex('#c70039').italic,
    },
    ocean: {
        name: chalk.hex('#00B8D9').bold, // aqua blue
        quote: chalk.hex('#B2F7EF'),     // light aqua
        border: chalk.hex('#005377'),    // deep blue
        category: chalk.hex('#00ffcc').italic,
    },
    forest: {
        name: chalk.hex('#228B22').bold, // forest green
        quote: chalk.hex('#A8E6A3'),     // light green
        border: chalk.hex('#4E944F'),    // medium green
        category: chalk.hex('#32CD32').italic,
    },
    candy: {
        name: chalk.hex('#FF69B4').bold, // hot pink
        quote: chalk.hex('#FFD1DC'),     // pastel pink
        border: chalk.hex('#FFB347'),    // pastel orange
        category: chalk.hex('#ffd700').italic,
    },
    midnight: {
        name: chalk.hex('#8A2BE2').bold, // blue violet
        quote: chalk.hex('#E0E0E0'),     // light gray
        border: chalk.hex('#191970'),    // midnight blue
        category: chalk.hex('#8a2be2').italic,
    },
    aurora: {
        name: chalk.hex('#00FFC6').bold, // neon aqua
        quote: chalk.hex('#FF61A6'),     // pink
        border: chalk.hex('#2DFFDF'),    // teal
        category: chalk.cyanBright.italic,
    },
    sunrise: {
        name: chalk.hex('#FFB347').bold, // soft orange
        quote: chalk.hex('#FFFACD'),     // lemon chiffon
        border: chalk.hex('#FF6961'),    // coral red
        category: chalk.red.italic,
    },
    lavender: {
        name: chalk.hex('#B57EDC').bold, // lavender
        quote: chalk.hex('#E3E4FA'),     // lavender mist
        border: chalk.hex('#8D6EB3'),    // muted purple
        category: chalk.cyan.italic,
    },
    emerald: {
        name: chalk.hex('#50C878').bold, // emerald green
        quote: chalk.hex('#D4F5E9'),     // mint
        border: chalk.hex('#34875A'),    // deep green
        category: chalk.magentaBright.italic,
    },
    firefly: {
        name: chalk.hex('#FFD700').bold, // gold
        quote: chalk.hex('#BFFF00'),     // chartreuse
        border: chalk.hex('#FF4500'),    // orange red
        category: chalk.green.italic,
    },
    galaxy: {
        name: chalk.hex('#7F00FF').bold, // violet
        quote: chalk.hex('#E100FF'),     // magenta
        border: chalk.hex('#0F2027'),    // dark blue-black
        category: chalk.gray.italic,
    },
    sandcastle: {
        name: chalk.hex('#C2B280').bold, // sand
        quote: chalk.hex('#FFF8DC'),     // cornsilk
        border: chalk.hex('#A0522D'),    // sienna
        category: chalk.yellow.italic,
    },
    mint: {
        name: chalk.hex('#3EB489').bold, // mint green
        quote: chalk.hex('#E0FFF0'),     // pale mint
        border: chalk.hex('#2E8B57'),    // sea green
        category: chalk.blue.italic,
    },
    // Add more themes here as needed
};

export default themes;
