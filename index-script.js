// Function to shuffle array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to show random blogs
function showRandomBlogs() {
    const cardContainer = document.querySelector('.card');
    const blogCards = Array.from(cardContainer.querySelectorAll('a'));
    const shuffledCards = shuffleArray(blogCards);
    
    // Hide all cards first
    blogCards.forEach(card => card.style.display = 'none');
    
    // Show only first 6 cards with random order
    shuffledCards.slice(0, 6).forEach((card, index) => {
        card.style.display = 'block';
        card.style.order = Math.floor(Math.random() * 1000); // Random order value
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', showRandomBlogs);

// Hamburger menu functionality
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