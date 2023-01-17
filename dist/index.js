"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bold = exports.white = exports.lightCyan = exports.lightMagenta = exports.lightBlue = exports.lightYellow = exports.lightGreen = exports.lightRed = exports.darkGray = exports.lightGray = exports.cyan = exports.magenta = exports.blue = exports.yellow = exports.green = exports.red = exports.black = void 0;
class Text {
    constructor(text) {
        this.styles = [];
        this.text = text;
    }
    addStyle(style) {
        this.styles.push(style);
        return this;
    }
    toString() {
        return `\x1b[${this.styles.join(';')}m${this.text}\x1b[0m`;
    }
    error() {
        console.error(this.toString());
    }
    warn() {
        console.warn(this.toString());
    }
}
const black = (text) => new Text(text).addStyle('30');
exports.black = black;
const red = (text) => new Text(text).addStyle('31');
exports.red = red;
const green = (text) => new Text(text).addStyle('32');
exports.green = green;
const yellow = (text) => new Text(text).addStyle('33');
exports.yellow = yellow;
const blue = (text) => new Text(text).addStyle('34');
exports.blue = blue;
const magenta = (text) => new Text(text).addStyle('35');
exports.magenta = magenta;
const cyan = (text) => new Text(text).addStyle('36');
exports.cyan = cyan;
const lightGray = (text) => new Text(text).addStyle('37');
exports.lightGray = lightGray;
const darkGray = (text) => new Text(text).addStyle('90');
exports.darkGray = darkGray;
const lightRed = (text) => new Text(text).addStyle('91');
exports.lightRed = lightRed;
const lightGreen = (text) => new Text(text).addStyle('92');
exports.lightGreen = lightGreen;
const lightYellow = (text) => new Text(text).addStyle('93');
exports.lightYellow = lightYellow;
const lightBlue = (text) => new Text(text).addStyle('94');
exports.lightBlue = lightBlue;
const lightMagenta = (text) => new Text(text).addStyle('95');
exports.lightMagenta = lightMagenta;
const lightCyan = (text) => new Text(text).addStyle('96');
exports.lightCyan = lightCyan;
const white = (text) => new Text(text).addStyle('97');
exports.white = white;
const bold = (text) => new Text(text).addStyle('1');
exports.bold = bold;
