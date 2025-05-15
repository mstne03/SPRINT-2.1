//Exercise 1.5

//Task 1
const array = [1,2,3,4];

const sqrdArray = array.map(n => n**2);

console.log(sqrdArray);

//Task 2
const evenArray = array.filter(n => n%2 == 0);

console.log(evenArray);

//Task 3
const array2 = [1,10,8,11];

console.log(array2.find(n => n>10));

//Task 4
const array3 = [13,7,8,21];

console.log(array3.reduce((total,current) => total+current));

//Task 5
const array4 = [1,3,7,10,15,17,11,5,8,12,9];

let result = array4.filter(n => n>=10).map(num => num*2).reduce((total,current) => total+current);

console.log(result);

//Task 6
const array5 = [11,12,13,14];

console.log(array5.every((n) => n>10));
console.log(array5.some((n) => n>10));