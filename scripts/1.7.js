//Exercise 1.7

(() => {

    //Task 1
    const promise1 = new Promise((resolve,reject) => {
        const user = "john23";
        const password = "23vv%";

        const inputUser = "john22";
        const inputPassword = "23vvv%";

        setTimeout(() => (user===inputUser && password===inputPassword) ? 
                        resolve("User logged in! Hello world!") :
                        reject("Incorrect username or password."),2000);
    });

    //Task 2
    promise1.then(
        resolve => 
        console.log(resolve)).catch(reject => console.log(reject)
    );

    //Task 3
    const promise2 = new Promise((resolve,reject) => {
        let input = "Hello";

        setTimeout(
            () => input==="Hello" ?
            resolve("Solved!") :
            reject("Not solved..."), 2000
        );
    });

    promise2
            .then(resolve => console.log(resolve))
            .catch(reject => console.log(reject));

    //Task 4
    async function process () {
        console.log("Loading...");
        console.log(await promise1);
    }

    process();

    //Task 5
    async function process () {
        console.log("Loading...");
        try {
            const result = await promise1;
            console.log(result);
        } catch (error) {
            console.error("Captured:", error);
        }
    }

    process();

    //Task 6
    const promise3 = new Promise((resolve,reject) => {
        let input = "Hello!"

        setTimeout(() => {
                            console.log(input, "2 seconds");
                            input==="Hello!" ?
                                resolve("Solved in 2 seconds."):
                                reject("Unsolved. 2 seconds.")},
                                2000);
    });

    const promise4 = new Promise((resolve,reject) => {
        let input = "Bye!"

        setTimeout(() => {
                            console.log(input,"3 seconds");
                            input==="Bye!" ?
                                resolve("Solved in 3 seconds."):
                                reject("Unsolved. 3 seconds.")},
                                3000);
    });

    async function execute () {
        try {
            const results = await Promise.all([promise3, promise4]);
            console.log("All correct:", results);
        } catch (error) {
            console.error("Captured error", error);
        }
    };

    execute();
})();