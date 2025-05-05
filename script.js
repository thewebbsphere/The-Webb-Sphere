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
        navbarCollapse.classList.toggle("show", !isCurrentlyOpen);
        localStorage.setItem("menuState", !isCurrentlyOpen ? "open" : "closed");
    });

    const navLinks = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});