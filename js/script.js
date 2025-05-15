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