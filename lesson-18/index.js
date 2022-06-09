// Створи функцію, яка буде виводити кількість переданих їй аргументів.

// let argsAmount = function () {
//   console.log(arguments.length);
// };
// argsAmount(3, 5, "dgdgk", 5, 78, -3);

// Напиши функцію, яка приймає 2 числа і повертає :

// let a = +prompt("enter number-1");
// let b = +prompt("enter number-2");
// function getResult(a, b) {
//   if (a < b) return -1;
//   if (a > b) return 1;
//   if (a === b) return 0;
// }
// console.log(getResult(a, b));

// Напиши функцію, яка обчислює факторіал переданого їй числа. 1й писал сам, второй нагуглил

// let n = +prompt("enter n");
// function calcFactorial(n) {
//     result = n;
//   for (let i = n - 1; i > 1; i--) {
//     result = result * i;
//   }
//   return result;
// }
// calcFactorial(n);
// console.log(result);

// let n = +prompt("enter n");
// function factorial(n){
//     if (n==1) return 1;
//     else return n*factorial(n-1);
//     }
//     console.log(factorial(n));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.

// let a = +prompt("enter number-1");
// let b = +prompt("enter number-2");
// let c = +prompt("enter number-3");
// function getStr(a, b, c) {
//   return String(a)+String(b)+String(c);
// }
// console.log(getStr(a, b, c));

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 1й вариант без prompt, второй с.

// let a
// let b
// function calcSquare(a, b) {
//   if (arguments.length === 1) return a * a;
//   if (arguments.length === 2) return a * b;
// }
// console.log(calcSquare(7, 2));

// let a = +prompt("довжина");
// let b = +prompt("ширина");
// function square(a, b) {
//   if (b === 0) return a * a;
//   else if (a === 0) return b * b;
//   else return a * b;
// }
// console.log(square(a, b));

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.

// let number = +prompt("enter your number");
// function perfect(number) {
//   let summa = 0;
//   for (let i = 0; i < number; i++) {
//     if (number % i === 0) {
//       summa = summa + i;
//     }
//   }
//   if (summa === number) {
//     console.log("perfect number.");
//   } else {
//     console.log("not perfect number.");
//   }
// }
// perfect(number);

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими.

// let start;
// let end;
// function allPerfectNumb(start, end) {
//   for (start; start <= end; start++)
//     if (perfect(start) === true) console.log(start);

//   function perfect(number) {
//     let summa = 0;
//     for (let i = 0; i < number; i++) {
//       if (number % i === 0) {
//         summa = summa + i;
//       }
//     }
//     if (summa === number) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// allPerfectNumb(1, 1000);

// Вариант того же задания с prompt

let start = +prompt("введіть початок діапазону");
let end = +prompt("введіть кінець діапазону");
function allPerfectNumb(start, end) {
  for (start; start <= end; start++)
    if (perfect(start) === true) console.log(start);

  function perfect(number) {
    let summa = 0;
    for (let i = 0; i < number; i++) {
      if (number % i === 0) {
        summa = summa + i;
      }
    }
    if (summa === number) {
      return true;
    } else {
      return false;
    }
  }
}
allPerfectNumb(start, end);
