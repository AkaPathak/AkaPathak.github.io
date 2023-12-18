// Example of a simple dynamic behavior
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    aboutSection.style.display = 'none'; // Hide about section initially

    document.querySelector('nav ul li a[href="#about"]').addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.style.display = 'block'; // Show about section on click
    });
});
