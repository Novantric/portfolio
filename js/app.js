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

// Header sidebar show/hide button
function toggleSidebar() {
    const sidebar = document.getElementById('header')

    sidebar.classList.toggle('showHeader');

    // Prevent tabbing through items with inert atrb
    if (sidebar.classList.contains('showSidebar')) {
        document.body.classList.add('sidebar-open');
        mainContent.forEach(element => element.inert = true);
    } else {
        document.body.classList.remove('sidebar-open');
        mainContent.forEach(element => element.inert = false);
    }
}