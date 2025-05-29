//Exercise 1.5

(() => {

    //Task 1
    const arrayNumbers = [1,2,3,4];

    const sqrdArray = arrayNumbers.map(n => n**2);

    console.log(sqrdArray);

    //Task 2
    const evenArray = arrayNumbers.filter(n => n%2 == 0);

    console.log(evenArray);

    //Task 3
    const arrayNumbers2 = [1,10,8,11];

    console.log(arrayNumbers2.find(n => n>10));

    //Task 4
    const arrayNumbers3 = [13,7,8,21];

    console.log(arrayNumbers3.reduce((total,current) => total+current, 0));

    //Task 5
    const arrayNumbers4 = [1,3,7,10,15,17,11,5,8,12,9];

    let result = arrayNumbers4.filter(n => n>=10).map(num => num*2).reduce((total,current) => total+current, 0);

    console.log(result);

    //Task 6
    const arrayNumbers5 = [11,12,13,14];

    console.log(arrayNumbers5.every((n) => n>10));
    console.log(arrayNumbers5.some((n) => n>10));
})();