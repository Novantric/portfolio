// Show/hide to top button on scroll
const scrollButton = document.getElementById("aside-to-top");
const scrollThreshold = 150;

function updateButtonVisibility() {
    if (window.scrollY > scrollThreshold)
        { scrollButton.style.display = "block"; }
    else 
        { scrollButton.style.display = "none"; }
}

window.addEventListener("scroll", updateButtonVisibility);
updateButtonVisibility();