//Tabs
const links = document.querySelectorAll(".nav-link");
const tasks = document.querySelectorAll(".task");

links.forEach(link => {
    link.addEventListener("click", () => {
        const targetLink = link.getAttribute("data-tab");

        links.forEach((l) => l.classList.remove("active"));
        tasks.forEach((task) => task.classList.remove("active"));

        link.classList.add("active");
        document
            .querySelector(`.task--${targetLink}`)
            .classList.add("active");
    });
});

//Task 1
const sumOutput = document.querySelector(".task__content-answer");
const form = document.querySelector(".task__content-form");
const result = document.querySelector("#result1");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let sumNumber = parseInt(document.querySelector("#num1").value);
    let secondSumNumber = parseInt(document.querySelector("#num2").value);
    result.innerHTML = sumFunc(sumNumber, secondSumNumber);
    sumOutput.style.display = "flex";
});

//Task 2
const randNumber = document.querySelector(".task__content-form-submit-btn--2");
const randomOutput = document.querySelector("#result2");

randNumber.addEventListener("click", () => {
   randomOutput.innerHTML = randFunc();
});

//Task 3
const greet = document.querySelector(".task__content-form-submit-btn--3");
const greetDisplay = document.querySelector(".task__content-answer--alt-greet");
const output3 = document.querySelector("#result3");
const person = new Person(personName);

greet.addEventListener("click", () => {
   
    let personName = document.getElementById("name").value;

    (!personName) ? personName = "nobody" : "";

    output3.innerHTML = person.greet();
    greetDisplay.style.display = "flex";
});

//Task 4
const addNum = document.querySelector(".task__content-form-submit-btn--4");
const showArray = document.querySelector(".task__content-form-submit-btn--4--print");
const arrayDisplay = document.querySelector(".task__content-answer--alt-array");
const arrayOutput = document.querySelector("#arrayOutput");
const numbers = [];

addNum.addEventListener("click", () => {
    let num = document.getElementById("nums").value;

    if (isNaN(num) || num === "") {
        return;
    }

    numbers.push(num);
});

showArray.addEventListener("click", () => {
    arrayOutput.innerHTML = "";
    arrayOutput.innerHTML = arrayFunc();
    arrayDisplay.style.display = "flex";
});

//Task 5
const messageDisplay = document.querySelector(".task__content-answer--alt-message");
const showMessage = document.querySelector(".task__content-form-submit-btn--5");

showMessage.addEventListener("click", () => {
    let messageOutput = document.getElementById("messageOutput");
    let messageOut = document.getElementById("message").value;

    messageOutput.innerHTML = "";

    messageDisplay.style.display = "flex";
    setTimeout(() => messageOutput.innerHTML = messageOut, 3000);
});