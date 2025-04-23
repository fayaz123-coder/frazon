function showImages(category) {
    // Hide all image and video galleries
    document.querySelectorAll('.image-gallery, .video-gallery').forEach(gallery => {
        gallery.style.display = 'none';
    });

    // Show the selected category
    document.getElementById(category).style.display = 'flex';
}

        // Set Posters as default visible category
        document.addEventListener("DOMContentLoaded", function() {
            showImages('posters');
        });
let currentCount = 8; // How many items to show at first
let increment = 4; // How many to load each time
let currentCategory = 'posters';

function showImages(category) {
    currentCategory = category;
    currentCount = 8;

    // Hide all galleries
    document.querySelectorAll('.image-gallery, .video-gallery').forEach(gallery => {
        gallery.style.display = 'none';
    });

    // Show only current category
    const selectedGallery = document.getElementById(category);
    selectedGallery.style.display = 'flex';

    // Show limited items initially
    showLimitedItems(selectedGallery, currentCount);

    // Show "Load More" only if needed
    const loadMoreBtn = document.getElementById('loadMore');
    loadMoreBtn.style.display = selectedGallery.children.length > currentCount ? 'inline-block' : 'none';
}

function showLimitedItems(gallery, count) {
    const items = gallery.children;
    for (let i = 0; i < items.length; i++) {
        if (i < count) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showImages('posters');

    // Load More Button Functionality
    document.getElementById('loadMore').addEventListener('click', function () {
        currentCount += increment;
        const activeGallery = document.getElementById(currentCategory);
        showLimitedItems(activeGallery, currentCount);

        if (currentCount >= activeGallery.children.length) {
            this.style.display = 'none';
        }
    });
});
