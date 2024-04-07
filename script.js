document.addEventListener("DOMContentLoaded", function () {
    const navSideButton = document.getElementById("nav-side-button");
    const sideMenu = document.getElementById("side-menu");
    const navBar = document.getElementById("nav-bar");

    navSideButton.addEventListener("click", function () {
        sideMenu.style.display =
            sideMenu.style.display === "none" ? "block" : "none";
        navBar.classList.toggle("hide");
    });
});
