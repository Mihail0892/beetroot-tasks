// // Задание 1

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     // this.diameter = 2 * this.radius;
//   }

//   get rad() {
//     return this.radius;
//   }

//   set rad(value) {
//     this.radius = value;
//   }

//   get diam() {
//     return this.radius * 2;
//   }

//   squareCircle() {
//     this.circleSquare = this.radius * this.radius * 3.14;
//     console.log(`Площадь круга равна:${this.circleSquare}`);
//   }

//   lenghtCircle() {
//     this.circleLenght = Math.floor(this.diam * 3.14);
//     console.log(`Длина круга равна:${this.circleLenght}`);
//   }
// }

// const littleCircle = new Circle(5);
// const bigCircle = new Circle(10);
// console.log(bigCircle);
// console.log(bigCircle.diam);
// console.log(bigCircle.rad);
// bigCircle.rad = 15;
// bigCircle.squareCircle();
// bigCircle.lenghtCircle();
// console.log(bigCircle.radius);
// console.log(bigCircle.diam);

// // Задание 2

// class Car {
//   constructor(model, year, color, maxSpeed, fuelTank) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.fuelTank = fuelTank;
//   }

//   getInfo() {
//     console.log(
//       `Вашему вниманию машина: ${this.model}, ${this.year} года выпуска, ${this.color} цвет, максимальная скорость ${this.maxSpeed} км/ч, объем бака ${this.fuelTank} литров `
//     );
//   }

//   getFuel() {
//     this.fuelTank += 20;
//     if (this.fuelTank > 80) return "you dont need fuel";
//     else return this.fuelTank;
//   }

//   drive() {
//     this.fuelTank -= 20;
//     if (this.fuelTank < 20) return "you need more fuel";
//     else return this.fuelTank;
//   }
// }

// const mersedec = new Car("Mersedec", "2020", "black", 250, 80);
// const bmw = new Car("BMW", "2021", "silver", 240, 70);

// console.log(mersedec.drive());
// console.log(mersedec.drive());
// console.log(mersedec.drive());
// console.log(mersedec.getFuel());
// console.log(mersedec)

//  Задание 3 Реалізуй клас, що описує канцелярський маркер.

class Marker {
  constructor(color, inkAmount) {
    this.color = color;
    this.inkAmount = inkAmount;
  }

  write(string) {
    let str = string;
    let arr = str.split("");
    let arr2 = arr.filter(function (item) {
      return item !== " ";
    });
    for (let i = 0; i <= arr2.length; i++) if ((i = i++)) this.inkAmount -= 5;
    if (this.inkAmount <= 0)
      return (this.inkAmount = 0), "заправьте маркер,йопта";
    return `Вы написали:${string}. Осталось ${this.inkAmount}% чернила`;
  }
}

class FullMarker extends Marker {
  constructor(color, inkAmount, secondColor) {
    super(color, inkAmount);
    this.secondColor = secondColor;
  }

  fullYourMarker() {
    this.inkAmount = 100;
    return `Ваш маркер еще огого.${this.inkAmount}% чернила`;
  }
}

const redMarker = new Marker("red", 100);
console.log(redMarker);
console.log(redMarker.write("gggdsgds  "));
const greenYellowMarker = new FullMarker("green", 100, "yellow");
console.log(greenYellowMarker);
console.log(greenYellowMarker.write("greпоплв"));
console.log(greenYellowMarker);
console.log(greenYellowMarker.fullYourMarker());
