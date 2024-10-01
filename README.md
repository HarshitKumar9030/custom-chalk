
# simple-chalk

A lightweight and simple alternative to Chalk for those who don't need all the advanced features. If you just want a fast and easy way to color your text in the terminal, this is for you!

## Installation

To install via npm:

```bash
npm install simple-chalk
```

Or, using Yarn:

```bash
yarn add simple-chalk
```

## Usage

Here’s how you can start using `simple-chalk`:

```js
const chalk = require('simple-chalk');

console.log(chalk.red('Hello world!'));
console.log(chalk.greenBright('Success message'));
console.log(chalk.bgBlue('Text with blue background'));
```

You can also chain multiple styles:

```js
console.log(chalk.red().bold().underline('Bold and underlined red text!'));
```

### Available Styles

- **Colors**: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`, `lightRed`, `lightGreen`, `lightYellow`, `lightBlue`, `lightMagenta`, `lightCyan`, `lightWhite`
- **Bright Colors**: `blackBright`, `redBright`, `greenBright`, `yellowBright`, `blueBright`, `magentaBright`, `cyanBright`, `whiteBright`
- **Background Colors**: `bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`, `bgGray`, `bgLightRed`, `bgLightGreen`, `bgLightYellow`, `bgLightBlue`, `bgLightMagenta`, `bgLightCyan`

### Additional Styling

- **Bold**: `chalk.bold(text)`
- **Italic**: `chalk.italic(text)`
- **Underline**: `chalk.underline(text)`
- **Strikethrough**: `chalk.strikethrough(text)`

### 256-Color and Truecolor Support

For terminals that support 256-color or Truecolor (24-bit) mode:

```js
// 256 color
console.log(chalk.color256('Text with 256-color!', 200));

// Truecolor
console.log(chalk.trueColor('Text with true RGB color!', 128, 0, 128));
```

## License

This project is licensed under the MIT License.

## Author

- [Harshit Kumar](https://www.leoncyriac.me)

---

Enjoy using `simple-chalk` and keep your terminal colorful and stylish! 😄