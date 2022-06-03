// let a = 0.1;
// let b = 0.2;
// let c = a + b;
// console.log(c.toFixed(2));

let a = "1";
let b = 2;
a = +a;
let c = a + b;
console.log(c);

let fleshMemory = prompt("Объем памяти, ГБ:");
let fileSize = 0.82;
let filesAmount = fleshMemory / fileSize;
console.log("Возможно загрузить файлов:", Math.floor(filesAmount));

let myMoney = prompt("Сколько у меня денег:");
let chocolateCost = prompt("Стоимость шоколадки:");
let chocolatesAmount = myMoney / chocolateCost;
let myChange = myMoney % chocolateCost;
console.log("Я могу купить шоколадок:", Math.floor(chocolatesAmount));
console.log("Моя сдача:", myChange);

let num = prompt("Введи число:");
console.log("Обратное число:", "\u202E" + num);

let money = prompt("Сумма вклада:");
let yearPercent = 0.05;
let mounthPercent = yearPercent / 12;
let income = money * mounthPercent * 2;
console.log("Сумма от начисленных процентов:", income.toFixed(2));
