(function () {
    "use strict";

    const toggle = document.querySelector(".theme-toggle");

    function setTheme(isDark) {
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    toggle.addEventListener("click", function () {
        const isDark = !document.documentElement.classList.contains("dark");
        setTheme(isDark);
    });
})();
