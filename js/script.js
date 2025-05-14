(() => {
    const links = document.querySelectorAll(".nav-link");
    const tasks = document.querySelectorAll(".task");

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

    const output = document.querySelector(".task__content-answer");
    output.style.display = "none";
    const form = document.querySelector(".task__content-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let n1 = parseInt(document.querySelector("#num1").value);
        let n2 = parseInt(document.querySelector("#num2").value);
        const result = document.getElementById("result");

        const sum = (n,m) => n+m;

        let r = sum(n1,n2);

        result.innerHTML = r;

        output.style.display = "flex";
    });
})();