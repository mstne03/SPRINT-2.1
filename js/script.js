//Exercise 1.6

//Task 1
const names = ["Anna", "Bernat", "Clara"];

names.forEach(name => console.log(name));

//Task 2
for (n of names) {
    console.log(n);
}

//Task 3
const numbers = [1,2,3,4,5,6];

const even = numbers.filter(number => number%2 == 0);

console.log(even);