//Exercise 1.4

//Task 1
const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1,...array2];

console.log(array3);

//Task 2
const sum = (...n) => {

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

console.log(sum(2,3,4,5));

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

const operate = (arg1,arg2,arg3) => {
    return arg1*arg2*arg3;
};

console.log(operate(...arr));