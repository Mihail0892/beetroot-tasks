// Калькулятор

// let a = +prompt("введіть перше число");
// let b = +prompt("введіть друге число");
// let result = prompt("введіть математичну операцію");
// if (result === "+") {
//   console.log(a + b);
// } else if (result === "-") {
//   console.log(a - b);
// } else if (result === "*") {
//   console.log(a * b);
// } else if (result === "/") {
//   if (b != 0) {
//     console.log(a / b);
//   } else console.log("на нуль ділити не можна");
// } else {
//   console.log("невірна математична дія");
// }

/* Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/

// let age = prompt("Скільки вам років?");
// if (age >= 0 && age <= 11) {
//   console.log("дитина");
// } else if (age >= 12 && age <= 17) {
//   console.log("підліток");
// } else if (age >= 18 && age <= 59) {
//   console.log("дорослий");
// } else if (age >= 60 && age <= 100) {
//   console.log("пенсіонер");
// } else if (age >= 101) {
//   console.log("стільки не живуть=)");
// } else {
//   console.log("помилка");
// }

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

// let num = +prompt("Введіть цифру від 1 до 9");
// if (num === 1) {
//   console.log("!");
// } else if (num === 2) {
//   console.log("@");
// } else if (num === 3) {
//   console.log("#");
// } else if (num === 4) {
//   console.log("$");
// } else if (num === 5) {
//   console.log("%");
// } else if (num === 6) {
//   console.log("^");
// } else if (num === 7) {
//   console.log("&");
// } else if (num === 8) {
//   console.log("*");
// } else if (num === 9) {
//   console.log("(");
// } else {
//   console.log("помилка");
// }

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

// let x = prompt("Введіть перше число");
// let y = prompt("Введіть друге число");
// let sum = 0;
// while (x < y) {
//   x++;
//   if (x < y) {
//     sum = sum + x;
//   }
// }
// console.log(sum);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.

// let a = +prompt("Enter first number");
// let b = +prompt("Enter second number");
// let gcd;
// while (a !== b) {
//   if (a > b) {
//     a = a - b;
//   } else {
//     b = b - a;
//   }
// }
// gcd = a;
// console.log ('For this numbers greatest common divisor is:', gcd);

// Запитай у користувача число і виведи всі дільники цього числа.

// let numb = prompt ('Enter your number');
// for (let i=0; i<=numb; i++) {
//   if (numb%i==0) {
//     console.log(i);
//   }
// }

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

// let str = prompt("enter your number");
// if (str.charAt(0) === str.charAt(4) && str.charAt(1) === str.charAt(3)) {
//   console.log("your number is palindrom");
// } else {
//   console.log("your number is not palindrom");
// }

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою

// let summa = prompt("Введіть суму покупки");
// let discount_1 = 0.03;
// let discount_2 = 0.05;
// let discount_3 = 0.07;
// if (summa < 200) {
//   console.log("Сума до оплати:", summa);
// } else if (summa >= 200 && summa <= 300)
//   console.log("Сума до оплати:", (summa = summa - summa * discount_1));
//   else if (summa > 300 && summa <= 500)
//   console.log("Сума до оплати:", (summa = summa - summa * discount_2));
//   else
//   console.log("Сума до оплати:", (summa = summa - summa * discount_3));

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.

// let n,
//   q1 = 0;
// q2 = 0;
// q3 = 0;
// q4 = 0;
// q5 = 0;

// for (let i = 0; i < 10; ++i) {
//   n = +prompt("введите 10 чисел: ");

//   if (n > 0) {
//     q1++;
//   } else if (n < 0) {
//     q2++;
//   } else if (n === 0) {
//     q3++;
//   }
//   if (n % 2 == 0) {
//     q4++;
//   } else if (n % 2 != 0) {
//     q5++;
//   }
// }
// console.log("Количество положительных: ", q1);
// console.log("Количество отрицательных: ", q2);
// console.log("Количество нулевых: ", q3);
// console.log("Количество парных: ", q4);
// console.log("Количество непарных: ", q5);

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? »

// const days = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
//   "Воскресенье",
// ];
// let currDay = 0;

// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//   currDay = (currDay + 1) % days.length;
// }

// Максимум. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

// let a = +prompt("number");
// for (let b = 1; b <= 10; b++) {
//   console.log(a * b);
// }
