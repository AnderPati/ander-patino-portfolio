const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");
        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "☰";
        });
    });

    document.addEventListener("click", (e) => {
        const isClickInsideNav = navLinks.contains(e.target);
        const isClickButton = menuButton.contains(e.target);

        if (!isClickInsideNav && !isClickButton) {
            navLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "☰";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            navLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "☰";
        }
    });
}