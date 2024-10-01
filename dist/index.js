"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = exports.warning = exports.error = exports.success = exports.bgTrueColor = exports.trueColor = exports.bgColor256 = exports.color256 = exports.bgLightMagenta = exports.bgLightBlue = exports.bgLightYellow = exports.bgLightGreen = exports.bgLightRed = exports.bgGray = exports.bgWhite = exports.bgCyan = exports.bgMagenta = exports.bgBlue = exports.bgYellow = exports.bgGreen = exports.bgRed = exports.bgBlack = exports.whiteBright = exports.cyanBright = exports.magentaBright = exports.blueBright = exports.yellowBright = exports.greenBright = exports.redBright = exports.blackBright = exports.lightWhite = exports.lightCyan = exports.lightMagenta = exports.lightBlue = exports.lightYellow = exports.lightGreen = exports.lightRed = exports.gray = exports.white = exports.cyan = exports.magenta = exports.blue = exports.yellow = exports.green = exports.red = exports.black = void 0;
var Text = /** @class */ (function () {
    function Text(text) {
        this.styles = [];
        this.text = text;
        this.is256ColorsEnabled = this.detect256ColorSupport();
        this.isTrueColorEnabled = this.detectTrueColorSupport();
    }
    Text.prototype.detect256ColorSupport = function () {
        return !!(process.env.TERM && process.env.TERM.includes('256color'));
    };
    Text.prototype.detectTrueColorSupport = function () {
        return !!(process.env.COLORTERM && process.env.COLORTERM === 'truecolor');
    };
    Text.prototype.addStyle = function (style) {
        this.styles.push(style);
        return this;
    };
    Text.prototype.color = function (r, g, b) {
        if (this.isTrueColorEnabled) {
            this.styles.push("38;2;".concat(r, ";").concat(g, ";").concat(b));
        }
        return this;
    };
    Text.prototype.bgColor = function (r, g, b) {
        if (this.isTrueColorEnabled) {
            this.styles.push("48;2;".concat(r, ";").concat(g, ";").concat(b));
        }
        return this;
    };
    Text.prototype.color256 = function (code) {
        if (this.is256ColorsEnabled) {
            this.styles.push("38;5;".concat(code));
        }
        return this;
    };
    Text.prototype.bgColor256 = function (code) {
        if (this.is256ColorsEnabled) {
            this.styles.push("48;5;".concat(code));
        }
        return this;
    };
    Text.prototype.bold = function () {
        this.styles.push('1');
        return this;
    };
    Text.prototype.dim = function () {
        this.styles.push('2');
        return this;
    };
    Text.prototype.italic = function () {
        this.styles.push('3');
        return this;
    };
    Text.prototype.underline = function () {
        this.styles.push('4');
        return this;
    };
    Text.prototype.strikethrough = function () {
        this.styles.push('9');
        return this;
    };
    Text.prototype.toString = function () {
        return "\u001B[".concat(this.styles.join(';'), "m").concat(this.text, "\u001B[0m").toString();
    };
    return Text;
}());
// Define a color palette with customizable themes and color aliasing
var theme = {
    success: function (text) { return new Text(text).color(0, 255, 0).bold().toString(); },
    error: function (text) { return new Text(text).color(255, 0, 0).bold().underline().toString(); },
    warning: function (text) { return new Text(text).color(255, 165, 0).bold().toString(); },
    info: function (text) { return new Text(text).color(0, 0, 255).italic().toString(); },
};
// Base 16-color ANSI styles 
var black = function (text) { return new Text(text).addStyle('30').toString(); };
exports.black = black;
var red = function (text) { return new Text(text).addStyle('31').toString(); };
exports.red = red;
var green = function (text) { return new Text(text).addStyle('32').toString(); };
exports.green = green;
var yellow = function (text) { return new Text(text).addStyle('33').toString(); };
exports.yellow = yellow;
var blue = function (text) { return new Text(text).addStyle('34').toString(); };
exports.blue = blue;
var magenta = function (text) { return new Text(text).addStyle('35').toString(); };
exports.magenta = magenta;
var cyan = function (text) { return new Text(text).addStyle('36').toString(); };
exports.cyan = cyan;
var white = function (text) { return new Text(text).addStyle('37').toString(); };
exports.white = white;
var gray = function (text) { return new Text(text).addStyle('90').toString(); };
exports.gray = gray;
var lightRed = function (text) { return new Text(text).addStyle('91').toString(); };
exports.lightRed = lightRed;
var lightGreen = function (text) { return new Text(text).addStyle('92').toString(); };
exports.lightGreen = lightGreen;
var lightYellow = function (text) { return new Text(text).addStyle('93').toString(); };
exports.lightYellow = lightYellow;
var lightBlue = function (text) { return new Text(text).addStyle('94').toString(); };
exports.lightBlue = lightBlue;
var lightMagenta = function (text) { return new Text(text).addStyle('95').toString(); };
exports.lightMagenta = lightMagenta;
var lightCyan = function (text) { return new Text(text).addStyle('96').toString(); };
exports.lightCyan = lightCyan;
var lightWhite = function (text) { return new Text(text).addStyle('97').toString(); };
exports.lightWhite = lightWhite;
var blackBright = function (text) { return new Text(text).addStyle('90').addStyle('1').toString(); };
exports.blackBright = blackBright;
var redBright = function (text) { return new Text(text).addStyle('91').addStyle('1').toString(); };
exports.redBright = redBright;
var greenBright = function (text) { return new Text(text).addStyle('92').addStyle('1').toString(); };
exports.greenBright = greenBright;
var yellowBright = function (text) { return new Text(text).addStyle('93').addStyle('1').toString(); };
exports.yellowBright = yellowBright;
var blueBright = function (text) { return new Text(text).addStyle('94').addStyle('1').toString(); };
exports.blueBright = blueBright;
var magentaBright = function (text) { return new Text(text).addStyle('95').addStyle('1').toString(); };
exports.magentaBright = magentaBright;
var cyanBright = function (text) { return new Text(text).addStyle('96').addStyle('1').toString(); };
exports.cyanBright = cyanBright;
var whiteBright = function (text) { return new Text(text).addStyle('97').addStyle('1').toString(); };
exports.whiteBright = whiteBright;
var bgBlack = function (text) { return new Text(text).addStyle('40').toString(); };
exports.bgBlack = bgBlack;
var bgRed = function (text) { return new Text(text).addStyle('41').toString(); };
exports.bgRed = bgRed;
var bgGreen = function (text) { return new Text(text).addStyle('42').toString(); };
exports.bgGreen = bgGreen;
var bgYellow = function (text) { return new Text(text).addStyle('43').toString(); };
exports.bgYellow = bgYellow;
var bgBlue = function (text) { return new Text(text).addStyle('44').toString(); };
exports.bgBlue = bgBlue;
var bgMagenta = function (text) { return new Text(text).addStyle('45').toString(); };
exports.bgMagenta = bgMagenta;
var bgCyan = function (text) { return new Text(text).addStyle('46').toString(); };
exports.bgCyan = bgCyan;
var bgWhite = function (text) { return new Text(text).addStyle('47').toString(); };
exports.bgWhite = bgWhite;
var bgGray = function (text) { return new Text(text).addStyle('100').toString(); };
exports.bgGray = bgGray;
var bgLightRed = function (text) { return new Text(text).addStyle('101').toString(); };
exports.bgLightRed = bgLightRed;
var bgLightGreen = function (text) { return new Text(text).addStyle('102').toString(); };
exports.bgLightGreen = bgLightGreen;
var bgLightYellow = function (text) { return new Text(text).addStyle('103').toString(); };
exports.bgLightYellow = bgLightYellow;
var bgLightBlue = function (text) { return new Text(text).addStyle('104').toString(); };
exports.bgLightBlue = bgLightBlue;
var bgLightMagenta = function (text) { return new Text(text).addStyle('105').toString(); };
exports.bgLightMagenta = bgLightMagenta;
// Advanced 256-color and Truecolor (24-bit) support
var color256 = function (text, code) { return new Text(text).color256(code).toString(); };
exports.color256 = color256;
var bgColor256 = function (text, code) { return new Text(text).bgColor256(code).toString(); };
exports.bgColor256 = bgColor256;
var trueColor = function (text, r, g, b) { return new Text(text).color(r, g, b).toString(); };
exports.trueColor = trueColor;
var bgTrueColor = function (text, r, g, b) { return new Text(text).bgColor(r, g, b).toString(); };
exports.bgTrueColor = bgTrueColor;
exports.success = theme.success;
exports.error = theme.error;
exports.warning = theme.warning;
exports.info = theme.info;
