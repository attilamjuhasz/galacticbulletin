
// Modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-modal');

// Add click event to all gallery images
document.querySelectorAll('.photo-container img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        const date = this.closest('.photo-container').querySelector('.photo-info').textContent;
        document.getElementById('modalDate').textContent = date;
    });
});

// Close modal when clicking the × button
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Scroll event handler for photo dates
function updatePhotoVisibility() {
    const photos = document.querySelectorAll('.photo-container');
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;
    const threshold = 100; // pixels from center

    photos.forEach(photo => {
        const rect = photo.getBoundingClientRect();
        const elementCenter = rect.top + (rect.height / 2);
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);

        if (distanceFromCenter < threshold) {
            photo.classList.add('in-view');
        } else {
            photo.classList.remove('in-view');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', updatePhotoVisibility);
// Initial check
window.addEventListener('load', updatePhotoVisibility);

// Hamburger menu functionality
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Close the dropdown when clicking outside
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        navbar.classList.remove('active');
    }
});

// Close the dropdown on scroll
window.addEventListener('scroll', function() {
    document.querySelector('.navbar').classList.remove('active');
});
