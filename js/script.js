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

//Task 4
const obj = {
    name: "Ona",
    age: 25,
    city: "Barcelona"
};

for (atr in obj) {
    console.log(atr+":");
    console.log(obj[atr]);
}

//Task 5
const arrayNum = [1,2,3,4,5,6];

for (num of arrayNum) {
    if (num==5) {
        break;
    }

    console.log(num);
}