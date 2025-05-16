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
        const greetFunc = () => {
            const output3 = document.querySelector("#result3");
            let personName = document.getElementById("name").value;

            if (!personName) {
                personName = "nobody";
            }

            const person = {
                name: personName,
                greet() {
                    return `Greetings ${this.name}!`;
                }
            };

            output3.innerHTML = person.greet();
            greetDisplay.style.display = "flex";
        };

        greetFunc();
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

//Ex 1.2

//Task 1
const canDrive = (age) => 
    age>=18 ? 
    "You can drive." 
    : "You can't drive!";

console.log(canDrive(12));
console.log(canDrive(18));

//Task 2
const compare = (n1,n2) => n1>n2 ? `${n1} is bigger than ${n2}` :
                           n1<n2 ? `${n1} is smaller than ${n2}` :
                           `${n1} is equal to ${n2}`;
console.log(compare(6,6));

//Task 3
const negativePositive = (n) => n>0 ? `${n} is positive` :
                                n<0 ? `${n} is negative` :
                                `${n} is equal to 0`;
console.log(negativePositive(-2));

//Task 4
const evenOdd = (array) => {
    for (n of array) {
        n%2 == 0 ? 
                    console.log(`${n} is even.`) :
                    console.log(`${n} is odd`);
    }
};

evenOdd([1,2,3,4,5]);

//Ex 1.3

//Task 1
const operate = (n) => n**3;

const process = (n,f) => {
    return f(n);
};

console.log(process(2,operate));

//Task 2
const sum = (n1,n2) => n1+n2;

const calculate = (n1,n2,f) => {
    return f(n1,n2);
};

console.log(calculate(2,3,sum));

//Task 3
const returnName = (name) => {
    console.log(name);
}

const waitGreet = (name, f) => {
    
    setTimeout(() => {
        f(name);
    }, 2000);
};

waitGreet("Marc",returnName);

//Task 4
const squared = (n) => n**2;

const array = [1,2,3,4,5,6,7,8,9,10];

const processElements = (a,f) => {
    for (element of a) {
        console.log(f(element));
    }
};

processElements(array,squared);

//Task 5
const charArray = (word) => {
    const a = [];
    for (char of word) {
        a.push(char);
    }

    return a;
};

const processChain = (str, f) => {
    let newStr = "";
    for (l of str) {
        newStr += l.toUpperCase();
    }

    return f(newStr);
};

console.log(processChain("Hola que tal",charArray));

//Exercise 1.4

//Task 1
const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1,...array2];

console.log(array3);

//Task 2
const sum2 = (...n) => {

    let result = 0;

    for (num of n) {
        num = parseInt(num);

        if (isNaN(num)) {
            continue;
        }

        result += num;
    }

    return result;
};

console.log(sum2(2,3,4,5));

//Task 3
const car1 = {
    brand: "Ferrari",
    model: "Testarosa",
    power: 750
}

const car2 = {...car1};

car2.brand = "Lamborghini";

console.log("Car1:");
console.log(car1);
console.log("Car2:");
console.log(car2);

//Task 4
const a = [1,2,3,"Chirimoya","Alcachofa"];

let [n1,n2,...n3] = a;

console.log(n1);
console.log(n2);
console.log(n3);

//Task 5
const arr = [5,2,3];

const operate2 = (arg1,arg2,arg3) => {
    return arg1*arg2*arg3;
};

console.log(operate2(...arr));

//Task 6
const obj1 = {
    name: "Marc",
    age: 23,
    id: 2
};

const obj2 = {
    town: "Palamós",
    province: "Girona",
    country: "Spain"
}

const obj3 = {...obj1,...obj2};

console.log(obj3);

//Exercise 1.5

//Task 1
const arrayNumbers = [1,2,3,4];

const sqrdArray = arrayNumbers.map(n => n**2);

console.log(sqrdArray);

//Task 2
const evenArray = arrayNumbers.filter(n => n%2 == 0);

console.log(evenArray);

//Task 3
const arrayNumbers2 = [1,10,8,11];

console.log(arrayNumbers2.find(n => n>10));

//Task 4
const arrayNumbers3 = [13,7,8,21];

console.log(arrayNumbers3.reduce((total,current) => total+current));

//Task 5
const arrayNumbers4 = [1,3,7,10,15,17,11,5,8,12,9];

let result = arrayNumbers4.filter(n => n>=10).map(num => num*2).reduce((total,current) => total+current);

console.log(result);

//Task 6
const arrayNumbers5 = [11,12,13,14];

console.log(arrayNumbers5.every((n) => n>10));
console.log(arrayNumbers5.some((n) => n>10));