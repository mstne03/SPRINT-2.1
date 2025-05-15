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