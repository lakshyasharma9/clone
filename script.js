// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open');
});

// Dropdown menu toggle for mobile
const mobileDropdownButtons = document.querySelectorAll('#mobile-menu button');
mobileDropdownButtons.forEach(button => {
    button.addEventListener('click', function() {
        const dropdown = this.nextElementSibling;
        if (dropdown) {
            dropdown.classList.toggle('hidden');
        }
    });
});