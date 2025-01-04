function filterItems(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (category === 'all') {
            product.style.display = 'block';
        } else if (product.classList.contains(category)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
// Highlight Menu Aktif
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});
// Toggle Menu Responsif
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('open');
}