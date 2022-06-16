// // Створи об'єкт, що описує автомобіль

// const car = {
//   manufacturer: "Citroen",
//   model: "C5 AIRCROSS",
//   manufacturerYear: 2020,
//   averageSpeed: 150,
//   tankVolume: 53,
//   fuelConsumption: 5,
//   driver: "Mihail",
//   showCar: function () {
//     console.log(
//       `${this.manufacturer}, ${this.model},${this.manufacturerYear} год, ${this.averageSpeed} км/ч, объем бака ${this.tankVolume} литров, расход ${this.fuelConsumption}литров/100км, ${this.driver}`
//     );
//   },
//   anotherDrivers: function (name2, name3) {
//     this.anotherDriver = {
//       driver2: name2,
//       driver3: name3,
//     };
//     console.log(this.anotherDriver);
//   },
//   needFuel(fuel) {
//     if (fuel <= 5) console.log("you need more fuel");
//   },
//   time: function (distanse) {
//     let time = +(distanse / this.averageSpeed);
//     let y = 0;
//     if (time % 4 === 0) y = time / 4 - 1;
//     else y = Math.floor(time / 4);
//     let x = +(time + y);
//     return +x;
//   },
//   permission: function (driverName) {
//     if (
//       driverName === this.driver ||
//       driverName === this.anotherDriver.driver2 ||
//       driverName === this.anotherDriver.driver3
//     ) {
//       console.log("you can drive the car");
//     } else {
//       console.log("wait for driver");
//     }
//     return driverName;
//   },
//   buyFuel: function (distanse) {
//     let powerResorve = ((car.tankVolume - 5) / car.fuelConsumption) * 100;
//     if (distanse > powerResorve) console.log("you need more fuel for this way");
//   },
// };

// car.showCar();
// car.anotherDrivers("Yana", "Vitaliy");
// car.needFuel(4);
// console.log(car.time(1000));
// car.permission("Olya");
// car.buyFuel(2000);

// Створити об'єкт, що описує час (години, хвилини, секунди)

// const currentDate = new Date();

// const dateObj = {
//   hours: currentDate.getHours(),
//   minutes: currentDate.getMinutes(),
//   seconds: currentDate.getSeconds(),
//   getTime() {
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//   },
//   plushours(hour) {
//     let rem = hour % 24;
//     if (this.hours + hour <= 23) {
//       this.hours = this.hours + hour;
//     } else if (rem === 0) this.hours = this.hours;
//     else if (this.hours + rem - 24 < 0) {
//       this.hours = this.hours + rem;
//     } else this.hours = this.hours + rem - 24;
//   },
//   plusminutes(min) {
//     let rem = min % 60;
//     let fullm = Math.floor(min / 60);
//     let fullmb = Math.ceil(min / 60);
//     if (this.minutes + min <= 59) {
//       this.minutes = this.minutes + min;
//     } else if (rem === 0)
//       (this.minutes = this.minutes) && (this.hours = this.hours + fullm);
//     else if (this.minutes + rem - 60 < 0) {
//       (this.hours = this.hours + fullm) && (this.minutes = this.minutes + rem);
//     } else
//       (this.hours = this.hours + fullmb) &&
//         (this.minutes = this.minutes + rem - 60);
//   },
//   plusseconds(sec) {
//     let rem = sec % 60;
//     let fulls = Math.floor(sec / 60);
//     let fullmb = Math.ceil(sec / 60);
//     if (this.seconds + sec <= 59) {
//       this.seconds = this.seconds + sec;
//     } else if (rem === 0)
//       (this.seconds = this.seconds) && (this.minutes = this.minutes + fulls);
//     else if (this.seconds + rem - 60 < 0) {
//       (this.minutes = this.minutes + fulls) &&
//         (this.seconds = this.seconds + rem);
//     } else
//       (this.minutes = this.minutes + fullmb) &&
//         (this.seconds = this.seconds + rem - 60);
//   },
// };

// dateObj.plushours(3);
// dateObj.plusminutes(15);
// dateObj.plusseconds(120);
// dateObj.getTime();


// Второй способ 

let date = new Date();
let myDate = {
  hours: function (hourse) {
    date.setHours(date.getHours() + hourse);
  },
  minute: function (minut) {
    date.setMinutes(date.getMinutes() + minut);
  },
  second: function (second) {
    date.setSeconds(date.getSeconds() + second);
  },
  show() {
    console.log(date);
  },
};
myDate.hours(5);
myDate.minute(15);
myDate.second(10);
myDate.show();
