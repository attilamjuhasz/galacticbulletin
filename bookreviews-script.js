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

// Search functionality for filtering book reviews
document.getElementById('blog-search').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const blogCards = document.querySelectorAll('.card > div'); // Select all direct children of .card

    blogCards.forEach(card => {
        const titleElement = card.querySelector('h2'); // Target the title inside each card
        if (titleElement && titleElement.textContent.toLowerCase().includes(searchValue)) {
            card.classList.remove('hidden'); // Remove the hidden class to show the card
        } else {
            card.classList.add('hidden'); // Add the hidden class to hide the card
        }
    });
});
