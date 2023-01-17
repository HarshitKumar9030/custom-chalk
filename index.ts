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
      return `\x1b[${this.styles.join(';')}m${this.text}\x1b[0m`;
    }
  
    public error() {
      console.error(this.toString());
    }
  
    public warn() {
      console.warn(this.toString());
    }
  }
  
  export const black = (text: string) => new Text(text).addStyle('30');
  export const red = (text: string) => new Text(text).addStyle('31');
  export const green = (text: string) => new Text(text).addStyle('32');
  export const yellow = (text: string) => new Text(text).addStyle('33');
  export const blue = (text: string) => new Text(text).addStyle('34');
  export const magenta = (text: string) => new Text(text).addStyle('35');
  export const cyan = (text: string) => new Text(text).addStyle('36');
  export const lightGray = (text: string) => new Text(text).addStyle('37');
  export const darkGray = (text: string) => new Text(text).addStyle('90');
  export const lightRed = (text: string) => new Text(text).addStyle('91');
  export const lightGreen = (text: string) => new Text(text).addStyle('92');
  export const lightYellow = (text: string) => new Text(text).addStyle('93');
  export const lightBlue = (text: string) => new Text(text).addStyle('94');
  export const lightMagenta = (text: string) => new Text(text).addStyle('95');
  export const lightCyan = (text: string) => new Text(text).addStyle('96');
  export const white = (text: string) => new Text(text).addStyle('97');
  export const bold = (text: string) => new Text(text).addStyle('1');