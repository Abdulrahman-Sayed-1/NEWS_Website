document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var navBar = document.querySelector(".nav-bar");
        navBar.classList.toggle("sticky", window.scrollY > 0);
    });
});
