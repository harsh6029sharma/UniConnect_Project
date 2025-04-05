document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    let currentIndex = 0;

    // Set the initial position of items
    items.forEach((item, index) => {
        item.style.left = `${index * 100}%`;
    });

    // Move to the next slide
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else {
            currentIndex = 0; // Loop back to the first item
            track.style.transform = `translateX(0)`;
        }
    });

    // Move to the previous slide
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else {
            currentIndex = totalItems - 1; // Loop back to the last item
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });
});