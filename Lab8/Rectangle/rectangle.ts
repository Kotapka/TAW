export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}

class Rectangle {
  a: Point;
  b: Point;
  c: Point;
  d: Point;

  constructor(a: Point, b: Point, c: Point, d: Point) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  move(a: Point, b: Point, c: Point, d: Point): void {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }

  getArea(): number {
    const width: number = Math.sqrt(
      Math.pow(this.b.x - this.a.x, 2) + Math.pow(this.b.y - this.a.y, 2)
    );
    const height: number = Math.sqrt(
      Math.pow(this.c.x - this.a.x, 2) + Math.pow(this.c.y - this.a.y, 2)
    );
    return width * height;
  }
}

const a = new Point(3, 2);
const b = new Point(8, 2);
const c = new Point(3, 1);
const d = new Point(8, 1);

const rect = new Rectangle(a, b, c, d);

console.log(rect.getArea());
