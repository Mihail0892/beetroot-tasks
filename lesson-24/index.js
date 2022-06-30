// Створити кнопку, яка буде відкривати модалку.
// Вміст модалки - це форма логіну (інпут для username, інпут для password, кнопка для сабміту форми, кнопка для закривання модалки). Також модалка повинна закриватись при кліку ззовні модалки.
// Користувач повинен мати можливсіть переглянути символи паролю, що вводить.
// Якщо хоча б один інпут (username або password) при сабміті пустий, то показувати alert з відповідним попередженням.
// Якщо введені дані невірні, показувати alert з відповідним повідомленням.
// Якщо введені дані вірні, закривати модалку і показувати привітальне повідомлення на екрані (welcome, username).

import { loginData } from "./login.js";

const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const modalWindow = document.getElementById("modal");
const loginForm = document.getElementById("login-form");
const passwordInput = document.getElementById("password-input");
const passwordShow = document.getElementById("password-show");
const passwordHide = document.getElementById("password-hide");
const Boris = document.getElementById("johnson");

openButton.addEventListener("click", () => {
  modalWindow.style.display = "block";
  openButton.style.display = "none";
});

closeButton.addEventListener("click", () => {
  modalWindow.style.display = "none";
  openButton.style.display = "block";
});

document.addEventListener("click", (Event) => {
  if (
    !Event.target.closest(".modal-window") &&
    !Event.target.closest(".open-button")
  ) {
    modalWindow.style.display = "none";
    openButton.style.display = "block";
    Boris.style.display = "none";
    // passwordInput.innerHTML==='';
  }
});

loginForm.addEventListener("submit", (Event) => {
  Event.preventDefault();

  const formData = new FormData(Event.target);
  const username = formData.get("username");
  const password = formData.get("password");

  if (username === loginData.username && password === loginData.password) {
    modalWindow.style.display = "none";
    setTimeout(()=> Boris.style.display = "block", 1500);
    // alert(`Привіт, ${username}`);
  } else if (
    (username === "" || password === "") 
    // username !== loginData.username ||
    // password !== loginData.password
  ) {
    alert("Введіть ім'я та пароль");
  } else setTimeout(() => alert("Невірне ім'я або пароль"), 1000);
});

passwordShow.addEventListener("click", () => {
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
    passwordShow.style.display = "none";
    passwordHide.style.display = "block";
  }
});

passwordHide.addEventListener("click", () => {
  if (passwordInput.getAttribute("type") === "text") {
    passwordInput.setAttribute("type", "password");
    passwordShow.style.display = "block";
    passwordHide.style.display = "none";
  }
});
