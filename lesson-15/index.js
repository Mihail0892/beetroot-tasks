// let first-name = 'Egor';
// let 12lastname = 'Popov';
// let CITY FROM = 'NY';
/*
    let такМожноНоНенужно = 'vot tak';
*/

let myName = prompt('Звать то как?');
console.log('Привет,', myName);


let yourBirthYear = prompt('В каком году Вы родились?');
const thisYear = 2022;
let yourAge = thisYear - yourBirthYear;
console.log('Ваш возраст:', yourAge );


let squareSide = prompt('Сторона квадрата равна:');
squareSide=Number(squareSide);
let squarePerimeter = squareSide + squareSide + squareSide + squareSide;
console.log('Периметр квадрата равен:',squarePerimeter);


let radius = prompt('Чему равен радиус круга?');
const Pi = 3.14;
let cercleArea = Pi*radius*radius;
console.log('Площадь окружности:',cercleArea );


let distance = prompt('Какое расстояние необходимо проехать?');
let time = prompt('За какое время хотите добраться?');
let speed = distance / time;
console.log('Вам необходимо двигаться со скоростью:',speed,'км/ч');


let dollars = prompt('Сколько вы хотите обменять?');
const ratio = 0.95;
let euros = dollars * ratio;
console.log('Сколько вы получите:',euros);













