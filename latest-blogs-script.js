// Opens dropdown when hamburger is clicked
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});

// Close the dropdown when clicking outside
document.addEventListener('click', function (event) {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        navbar.classList.remove('active');
    }
});

// Close the dropdown on scroll
window.addEventListener('scroll', function () {
    document.querySelector('.navbar').classList.remove('active');
});

document.getElementById('blog-search').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const blogCards = document.querySelectorAll('.card > a');

    blogCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = 'flex'; // Ensure cards remain flex items for layout
        } else {
            card.style.display = 'none';
        }
    });
});
