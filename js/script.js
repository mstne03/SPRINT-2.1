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