//Exercise 1.6

console.log("*******************************************************");
console.log("***********************Exercise 1.6********************");
console.log("*******************************************************");

(() => {

    //Task 1
    const names = ["Anna", "Bernat", "Clara"];

    names.forEach(name => console.log(name));

    //Task 2
    for (n of names) {
        console.log(n);
    }

    //Task 3
    const numbers2 = [1,2,3,4,5,6];

    const even = numbers2.filter(number => number%2 == 0);

    console.log(even);

    //Task 4
    const obj = {
        name: "Ona",
        age: 25,
        city: "Barcelona"
    };

    for (atr in obj) {
        console.log(`${atr}: ${obj[atr]}`);
    }

    //Task 5
    const arrayNum = [1,2,3,4,5,6];

    for (num of arrayNum) {
        if (num==5) {
            break;
        }

        console.log(num);
    }

    //Task 6
    const names2 = ["Anna","Bernat","Clara","Clara"];
    let i = 0;

    for (n of names2) {
        console.log(`${++i} ${n}`);
    };
})();