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

// Store the original order of blogs
let originalOrder = [];
document.addEventListener('DOMContentLoaded', () => {
    originalOrder = Array.from(document.querySelectorAll('.card > a'));
});

function filterBlogs() {
    const searchValue = document.getElementById('blog-search').value.toLowerCase();
    const selectedCategory = document.getElementById('filter-dropdown').value;
    const firstCard = document.querySelector('.card');

    // If no search and showing all categories, restore original order
    if (searchValue === '' && selectedCategory === 'all') {
        originalOrder.forEach(card => {
            card.style.display = '';
            firstCard.appendChild(card);
        });
        return;
    }

    // Hide all cards initially
    const blogCards = document.querySelectorAll('.card > a');
    blogCards.forEach(card => card.style.display = 'none');

    // Filter and show matching cards
    const matchingCards = originalOrder.filter(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const blogDiv = card.querySelector('div[data-categories]');
        const categories = blogDiv ? blogDiv.getAttribute('data-categories').split(',') : [];

        const matchesSearch = title.includes(searchValue);
        const matchesCategory = selectedCategory === 'all' || categories.includes(selectedCategory);

        return matchesSearch && matchesCategory;
    });

    // Show matching cards in original order
    matchingCards.forEach(card => {
        card.style.display = '';
        firstCard.appendChild(card);
    });
}

document.getElementById('blog-search').addEventListener('input', filterBlogs);
document.getElementById('filter-dropdown').addEventListener('change', filterBlogs);