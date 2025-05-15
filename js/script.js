//Task 1
const operate = (n) => n**3;

const process = (n,f) => {
    return f(n);
};

console.log(process(2,operate));