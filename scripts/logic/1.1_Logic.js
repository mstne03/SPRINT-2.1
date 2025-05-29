//Task 1
const sumFunc = (number, secondNumber) => {
    isNaN(number) ? number = 0 : "";

    isNaN(secondNumber) ? secondNumber = 0 : "";

    return number + secondNumber;
};

//Task 2
const randFunc = () =>  Math.floor(Math.random()*101);

//Task 4
const arrayFunc = () => {
    let out = "";

    for (number of numbers) {
        out += number+",";
    }

    return out;
};