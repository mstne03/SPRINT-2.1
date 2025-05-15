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