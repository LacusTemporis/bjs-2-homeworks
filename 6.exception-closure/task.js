function parseCount(value) {
	let parse = Number.parseFloat(value);
	if (isNaN(parse)) {
		throw new Error("Невалидное значение")
	} else {
		return parse;
	}
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error
	}
}


class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || a + c <= b || b + c <= a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}

		this.a = a;
		this.b = b;
		this.c = c;

	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = (this.a + this.b + this.c) / 2;
		this._area = Number.parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
		return this._area;
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c)
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			},
			get area() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}