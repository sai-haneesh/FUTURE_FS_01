const menuToggle = document.querySelector('#menuToggle');
const nav = document.querySelector('#nav');
menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  document.querySelector('#formMessage').textContent =
    `Thanks, ${data.get('name')}! The demo form works, but email delivery needs a backend or form service.`;
  event.currentTarget.reset();
});
