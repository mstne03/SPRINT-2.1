(() => {
    const links = document.querySelectorAll(".nav-link");
    const tasks = document.querySelectorAll(".task");
    const output1 = document.querySelector(".task__content-answer");
    const form = document.querySelector(".task__content-form");
    const randNumber = document.querySelector(".task__content-form-submit-btn--2");

    links.forEach(link => {
        link.addEventListener("click", () => {
            const targetLink = link.getAttribute("data-tab");

            links.forEach((l) => l.classList.remove("active"));
            tasks.forEach((task) => task.classList.remove("active"));

            link.classList.add("active");
            document
                .querySelector(`.task--${targetLink}`)
                .classList.add("active");
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let n1 = parseInt(document.querySelector("#num1").value);
        let n2 = parseInt(document.querySelector("#num2").value);
        const result = document.getElementById("result1");

        const sum = (n,m) => n+m;

        let r = sum(n1,n2);

        result.innerHTML = r;

        output1.style.display = "flex";
    });

    randNumber.addEventListener("click", () => {
        let number = Math.floor(Math.random()*101);

        const output2 = document.querySelector("#result2");

        output2.innerHTML = number;
    });
})();