document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.foot-content h3');
    headers.forEach(header => {
        header.addEventListener('click', function () {
            if (window.innerWidth <= 700) {
                this.parentElement.classList.toggle('show');
            }
        });
    });
});

function toggleDropdown() {
    const dropdown = document.querySelector('.foot-dropdown');
    dropdown.classList.toggle('show');
}