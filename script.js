document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("darkModeToggle");
    
    // Check if dark mode was previously enabled
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");

        // Store user preference in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

function toggleDetails(element) {
    let details = element.querySelector(".timeline-details");

    if (details.classList.contains("hidden")) {
        document.querySelectorAll(".timeline-details").forEach((el) => {
            el.classList.add("hidden");
            el.classList.remove("active");
        });

        details.classList.remove("hidden");
        details.classList.add("active");
    } else {
        details.classList.add("hidden");
        details.classList.remove("active");
    }
}

// Progress Bar Scroll Effect
window.addEventListener("scroll", () => {
    let timeline = document.querySelector(".timeline");
    let progressBar = document.querySelector(".progress-bar");

    let scrollWidth = timeline.scrollWidth - timeline.clientWidth;
    let scrollLeft = timeline.scrollLeft;
    let scrollPercentage = (scrollLeft / scrollWidth) * 100;

    progressBar.style.width = `${scrollPercentage}%`;
});
