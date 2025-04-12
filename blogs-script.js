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

function filterBlogs() {
    const searchValue = document.getElementById('blog-search').value.toLowerCase();
    const selectedCategory = document.getElementById('filter-dropdown').value;
    const cards = document.querySelectorAll('.card');
    const blogCards = document.querySelectorAll('.card > a');
    
    // Hide all card containers first
    cards.forEach(card => card.style.display = 'none');
    
    // Show only the first card container and make it flex
    const firstCard = document.querySelector('.card');
    if (firstCard) {
        firstCard.style.display = 'flex';
    }

    blogCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        const blogDiv = card.querySelector('div[data-categories]');
        const categories = blogDiv ? blogDiv.getAttribute('data-categories').split(',') : [];

        const matchesSearch = title.includes(searchValue);
        const matchesCategory = selectedCategory === 'all' || categories.includes(selectedCategory);

        if (matchesSearch && matchesCategory) {
            card.style.display = '';
            // Move matching cards to the first container
            firstCard.appendChild(card);
        } else {
            card.style.display = 'none';
        }
    });
}

document.getElementById('blog-search').addEventListener('input', filterBlogs);
document.getElementById('filter-dropdown').addEventListener('change', filterBlogs);