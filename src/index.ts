class Text {
  private text: string;
  private styles: string[] = [];
  private is256ColorsEnabled: boolean;
  private isTrueColorEnabled: boolean;

  constructor(text: string) {
    this.text = text;
    this.is256ColorsEnabled = this.detect256ColorSupport();
    this.isTrueColorEnabled = this.detectTrueColorSupport();
  }

  private detect256ColorSupport(): boolean {
    return !!(process.env.TERM && process.env.TERM.includes('256color'));
  }

  private detectTrueColorSupport(): boolean {
    return !!(process.env.COLORTERM && process.env.COLORTERM === 'truecolor');
  }

  public addStyle(style: string) {
    this.styles.push(style);
    return this;
  }

  public color(r: number, g: number, b: number) {
    if (this.isTrueColorEnabled) {
      this.styles.push(`38;2;${r};${g};${b}`);
    }
    return this;
  }

  public bgColor(r: number, g: number, b: number) {
    if (this.isTrueColorEnabled) {
      this.styles.push(`48;2;${r};${g};${b}`);
    }
    return this;
  }

  public color256(code: number) {
    if (this.is256ColorsEnabled) {
      this.styles.push(`38;5;${code}`);
    }
    return this;
  }

  public bgColor256(code: number) {
    if (this.is256ColorsEnabled) {
      this.styles.push(`48;5;${code}`);
    }
    return this;
  }

  public bold() {
    this.styles.push('1');
    return this;
  }

  public dim() {
    this.styles.push('2');
    return this;
  }

  public italic() {
    this.styles.push('3');
    return this;
  }

  public underline() {
    this.styles.push('4');
    return this;
  }

  public strikethrough() {
    this.styles.push('9');
    return this;
  }

  public toString() {
    return `\x1b[${this.styles.join(';')}m${this.text}\x1b[0m`.toString();
  }
}

// Define a color palette with customizable themes and color aliasing
const theme = {
  success: (text: string) => new Text(text).color(0, 255, 0).bold().toString(),
  error: (text: string) => new Text(text).color(255, 0, 0).bold().underline().toString(),
  warning: (text: string) => new Text(text).color(255, 165, 0).bold().toString(),
  info: (text: string) => new Text(text).color(0, 0, 255).italic().toString(),
};

// Base 16-color ANSI styles 
export const black = (text: string) => new Text(text).addStyle('30').toString();
export const red = (text: string) => new Text(text).addStyle('31').toString();
export const green = (text: string) => new Text(text).addStyle('32').toString();
export const yellow = (text: string) => new Text(text).addStyle('33').toString();
export const blue = (text: string) => new Text(text).addStyle('34').toString();
export const magenta = (text: string) => new Text(text).addStyle('35').toString();
export const cyan = (text: string) => new Text(text).addStyle('36').toString();
export const white = (text: string) => new Text(text).addStyle('37').toString();
export const gray = (text: string) => new Text(text).addStyle('90').toString();
export const lightRed = (text: string) => new Text(text).addStyle('91').toString();
export const lightGreen = (text: string) => new Text(text).addStyle('92').toString();
export const lightYellow = (text: string) => new Text(text).addStyle('93').toString();
export const lightBlue = (text: string) => new Text(text).addStyle('94').toString();
export const lightMagenta = (text: string) => new Text(text).addStyle('95').toString();
export const lightCyan = (text: string) => new Text(text).addStyle('96').toString();
export const lightWhite = (text: string) => new Text(text).addStyle('97').toString();
export const blackBright = (text: string) => new Text(text).addStyle('90').addStyle('1').toString();
export const redBright = (text: string) => new Text(text).addStyle('91').addStyle('1').toString();
export const greenBright = (text: string) => new Text(text).addStyle('92').addStyle('1').toString();
export const yellowBright = (text: string) => new Text(text).addStyle('93').addStyle('1').toString();
export const blueBright = (text: string) => new Text(text).addStyle('94').addStyle('1').toString();
export const magentaBright = (text: string) => new Text(text).addStyle('95').addStyle('1').toString();
export const cyanBright = (text: string) => new Text(text).addStyle('96').addStyle('1').toString();
export const whiteBright = (text: string) => new Text(text).addStyle('97').addStyle('1').toString();
export const bgBlack = (text: string) => new Text(text).addStyle('40').toString();
export const bgRed = (text: string) => new Text(text).addStyle('41').toString();
export const bgGreen = (text: string) => new Text(text).addStyle('42').toString();
export const bgYellow = (text: string) => new Text(text).addStyle('43').toString();
export const bgBlue = (text: string) => new Text(text).addStyle('44').toString();
export const bgMagenta = (text: string) => new Text(text).addStyle('45').toString();
export const bgCyan = (text: string) => new Text(text).addStyle('46').toString();
export const bgWhite = (text: string) => new Text(text).addStyle('47').toString();
export const bgGray = (text: string) => new Text(text).addStyle('100').toString();
export const bgLightRed = (text: string) => new Text(text).addStyle('101').toString();
export const bgLightGreen = (text: string) => new Text(text).addStyle('102').toString();
export const bgLightYellow = (text: string) => new Text(text).addStyle('103').toString();
export const bgLightBlue = (text: string) => new Text(text).addStyle('104').toString();
export const bgLightMagenta = (text: string) => new Text(text).addStyle('105').toString();

// Advanced 256-color and Truecolor (24-bit) support
export const color256 = (text: string, code: number) => new Text(text).color256(code).toString();
export const bgColor256 = (text: string, code: number) => new Text(text).bgColor256(code).toString();
export const trueColor = (text: string, r: number, g: number, b: number) => new Text(text).color(r, g, b).toString();
export const bgTrueColor = (text: string, r: number, g: number, b: number) => new Text(text).bgColor(r, g, b).toString();


export const success = theme.success;
export const error = theme.error;
export const warning = theme.warning;
export const info = theme.info;
