document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("show-menu");
});

// Hide menu when clicking outside
document.addEventListener("click", function (event) {
    let menu = document.querySelector(".menu");
    let button = document.querySelector(".menu-btn");
    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove("show-menu");
    }
});
