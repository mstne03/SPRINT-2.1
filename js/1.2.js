//Ex 1.2

console.log("*******************************************************");
console.log("*********************Exercise 1.2**********************");
console.log("*******************************************************");

(() => {

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

    //Task 3
    const negativePositive = (n) => n>0 ? `${n} is positive` :
                                    n<0 ? `${n} is negative` :
                                    `${n} is equal to 0`;
    console.log(negativePositive(-2));

    //Task 4
    const evenOdd = (array) => {
        for (n of array) {
            n%2 == 0 ? 
                        console.log(`${n} is even.`) :
                        console.log(`${n} is odd`);
        }
    };

    evenOdd([1,2,3,4,5]);
})();