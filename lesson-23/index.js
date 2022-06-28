// // Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl +, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

// const div = document.getElementById("div-id");
// const text = document.getElementById("text-id");
// let keys = {
//   ctrl: false,
//   q: false,
//   d: false,
// };
// document.addEventListener("keydown", (Event) => {
//   if (Event.key === "Control") {
//     keys.ctrl = true;
//   }
//   if (Event.key === "q") {
//     keys.q = true;
//   }
//   if (Event.key === "d") {
//     keys.d = true;
//   }
//   if (keys.ctrl && keys.q) {
//     event.preventDefault();
//     div.style.display = "none";
//     text.style.display = "block";
//     text.innerHTML = div.innerHTML;
//   }
//   if (keys.ctrl && keys.d) {
//     event.preventDefault();
//     div.style.display = "block";
//     text.style.display = "none";
//     text.addEventListener("change", (Event) => {
//       console.log(Event.target.value);
//       div.innerHTML = Event.target.value;
//     });
//   }
// });

// document.addEventListener("keyup", (Event) => {
//   if (Event.key === "Control") {
//     keys.ctrl = false;
//   }
//   if (Event.key === "q") {
//     keys.q = false;
//   }
//   if (Event.key === "d") {
//     keys.d = false;
//   }
// });

// text.addEventListener("change", (Event) => {
//   console.log(Event.target.value);
//   div.innerHTML = Event.target.value;
// });

// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

// const myTable = document.getElementById("table");
// let tableElements = document.querySelectorAll("tbody>tr");
// let array = [];
// console.log(array);
// let sortArray = Array.from(tableElements, (e) => {
//   let childNodes = e.getElementsByTagName("td");
//   array.push({
//     name: childNodes[0].textContent,
//     age: +childNodes[1].textContent,
//     city: childNodes[2].textContent,
//   });
// });

// let tbody = document.getElementById("tbody-id");

// myTable.addEventListener("click", (Event) => {
//   if (Event.target.closest(".first")) {
//     let sortByName = array.sort((a, b) => (a.name < b.name ? -1 : 1));
//     tableElements.innerHTML=sortByName.values;
//     // tableElements=sortByName.values;
//     console.log(tableElements);
//   }

//   if (Event.target.closest(".second")) {
//     let sortByAge = array.sort((a, b) => a.age - b.age);
//     console.log(sortByAge);
//   }

//   if (Event.target.closest(".third")) {
//     let sortByCity = array.sort((a, b) => (a.city < b.city ? -1 : 1));
//     tbody.innerHTML = "";
//     tbody.innerHTML = sortByCity;
//     console.log(sortByCity);
//   }
// });

const bigSq = document.querySelector(".square");
const littleSq = document.querySelector(".little-square");

bigSq.addEventListener("mousedown", (Event) => {
  const goMouseMove = (Event) => {
    let newX = Event.clientX;
    let newY = Event.clientY;
    bigSq.style.width = newX + "px";
    bigSq.style.height = newY + "px";
    console.log(newX, newY);
  };
  if (Event.target.closest(".little-square")) {
    document.addEventListener("mousemove", goMouseMove);
  }
  const stopMousemove = () => {
    document.removeEventListener("mousemove", goMouseMove);
  };
  
  document.addEventListener("mouseup", stopMousemove);
});


