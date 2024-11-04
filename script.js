// Select the carousel items and buttons
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;

// Function to show the item based on the index
function showItem(index) {
    // Ensure index stays within bounds
    currentIndex = (index + totalItems) % totalItems;
    
    // Move all items to the right position
    carouselItems.forEach((item, i) => {
        item.style.transform = `translateX(${100 * (i - currentIndex)}%)`;
    });
}

// Event listeners for the next and previous buttons
document.querySelector('.next').addEventListener('click', () => {
    showItem(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showItem(currentIndex - 1);
});

// Initialize the carousel
showItem(currentIndex);
