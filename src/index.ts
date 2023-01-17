class Text {
  private text: string;
  private styles: string[] = [];

  constructor(text: string) {
    this.text = text;
  }

  public addStyle(style: string) {
    this.styles.push(style);
    return this;
  }

  public toString() {
    return `\x1b[${this.styles.join(';')}m${this.text}\x1b[0m`.toString();
  }
}

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