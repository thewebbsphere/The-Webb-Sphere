document.addEventListener("DOMContentLoaded", () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    // Restore menu state from localStorage
    const isMenuOpen = localStorage.getItem("menuState") === "open";
    if (isMenuOpen) {
        navbarCollapse.classList.add("show");
    }

    // Save menu state on toggle
    navbarToggler.addEventListener("click", () => {
        const isCurrentlyOpen = navbarCollapse.classList.contains("show");
        localStorage.setItem("menuState", isCurrentlyOpen ? "closed" : "open");
    });
});