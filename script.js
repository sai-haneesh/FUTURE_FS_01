// 1. Select the Navigation Elements
const menuToggle = document.querySelector('#menuToggle');
const nav = document.querySelector('#nav');

// 2. Toggle the Mobile Navigation Menu
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// 3. Close the Menu When a Navigation Link Is Clicked
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});

// 4. Display the Current Year in the Footer
document.querySelector('#year').textContent = new Date().getFullYear();

// 5. Handle the Contact Form Submission
document.querySelector('#contactForm').addEventListener('submit', event => {
    event.preventDefault();

    // Get the Form Data
    const data = new FormData(event.currentTarget);

    // Display a Success Message
    document.querySelector('#formMessage').textContent =
        `Thanks, ${data.get('name')}! The demo form works, but email delivery needs a backend or form service.`;

    // Reset the Form
    event.currentTarget.reset();
});
