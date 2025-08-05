// JS for button alert
document.addEventListener("DOMContentLoaded", () => {
    const joinBtns = document.querySelectorAll(".btn");

    joinBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Thank you for joining Fitness Gym!");
        });
    });

    const navItems = document.querySelectorAll(".navbar li");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navItems.forEach(el => el.classList.remove("active"));
            item.classList.add("active");
        });
    });
});