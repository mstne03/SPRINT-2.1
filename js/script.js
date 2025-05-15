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