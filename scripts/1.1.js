//Ex 1.1
const numbers = [];

(() => {
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
    const output1 = document.querySelector(".task__content-answer");
    const form = document.querySelector(".task__content-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const sumFunc = () => {
            let n1 = parseInt(document.querySelector("#num1").value);
            let n2 = parseInt(document.querySelector("#num2").value);
            const result = document.getElementById("result1");

            if (isNaN(n1)) {
                n1 = 0;
            }

            if (isNaN(n2)) {
                n2 = 0;
            }

            const sum = (n,m) => n+m;

            let r = sum(n1,n2);

            result.innerHTML = r;

            output1.style.display = "flex";
        };

        sumFunc();
    });

    //Task 2
    const randNumber = document.querySelector(".task__content-form-submit-btn--2");

    randNumber.addEventListener("click", () => {
        const randFunc = () => {
            output1.innerHTML = "";
            let number = Math.floor(Math.random()*101);

            const output2 = document.querySelector("#result2");

            output2.innerHTML = number;
        };

        randFunc();
    });

    //Task 3
    const greet = document.querySelector(".task__content-form-submit-btn--3");
    const greetDisplay = document.querySelector(".task__content-answer--alt-greet");

    greet.addEventListener("click", () => {
        const output3 = document.querySelector("#result3");
        let personName = document.getElementById("name").value;

        if (!personName) {
            personName = "nobody";
        }

        const person = new Person(personName);

        output3.innerHTML = person.greet();
        greetDisplay.style.display = "flex";
    });

    //Task 4
    const addNum = document.querySelector(".task__content-form-submit-btn--4");
    const showArray = document.querySelector(".task__content-form-submit-btn--4--print");
    const arrayDisplay = document.querySelector(".task__content-answer--alt-array");

    addNum.addEventListener("click", () => {
        let num = document.getElementById("nums").value;

        if (isNaN(num) || num === "") {
            return;
        }

        numbers.push(num);
    });

    showArray.addEventListener("click", () => {
        const arrayFunc = () => {
            let arrayOutput = document.getElementById("arrayOutput");
            let out = "";
            arrayOutput.innerHTML = "";

            for (number of numbers) {

                out += number+",";
            }

            arrayOutput.innerHTML = out;
            arrayDisplay.style.display = "flex";
        };

        arrayFunc();
    });
    
    //Task 5
    const messageDisplay = document.querySelector(".task__content-answer--alt-message");
    const showMessage = document.querySelector(".task__content-form-submit-btn--5");

    showMessage.addEventListener("click", () => {
        const messageFunc = () => {
            let messageOutput = document.getElementById("messageOutput");
            let messageOut = document.getElementById("message").value;
            
            messageOutput.innerHTML = "";
            messageOutput.innerHTML = messageOut;
            messageDisplay.style.display = "flex";
        };

        setTimeout(messageFunc, 3000);
    });
})();