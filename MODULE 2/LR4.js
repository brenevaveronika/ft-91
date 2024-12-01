class Figure {
    #x; #y;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    square() {
        return undefined
    }
}

class Circle extends Figure {
    #r;
    constructor(x, y, r) {
        super(x, y);
        this.#r = r;
    }
    square() {
        return Math.PI * this.#r * this.#r;
    }
}

class Rectangle extends Figure {
    #h; #w;
    constructor(x, y, h, w) {
        super(x, y);
        this.#h = h;
        this.#w = w;
    }
    square() {
        return this.#h * this.#w
    }
}

const circle = new Circle(5, 10, 3);
console.log(`Центр круга: (${circle.getX()}, ${circle.getY()})`);
console.log(`Площадь круга: ${circle.square().toFixed(2)}`); // Форматируем до двух знаков после запятой

const rectangle = new Rectangle(2, 4, 5, 10);
console.log(`Центр прямоугольника: (${rectangle.getX()}, ${rectangle.getY()})`);
console.log(`Площадь прямоугольника: ${rectangle.square()}`); // Площадь прямоугольника