"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return Point;
}());
exports.Point = Point;
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    Rectangle.prototype.move = function (a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    };
    Rectangle.prototype.getArea = function () {
        var width = Math.sqrt(Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2));
        var height = Math.sqrt(Math.pow(this.c.x - this.a.x, 2) + Math.pow(this.c.y - this.a.y, 2));
        return width * height;
    };
    return Rectangle;
}());
var a = new Point(3, 2);
var b = new Point(8, 2);
var c = new Point(3, 1);
var d = new Point(8, 1);
var rect = new Rectangle(a, b, c, d);
console.log(rect.getArea());
