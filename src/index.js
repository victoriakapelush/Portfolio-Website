const clicks = document.getElementsByClassName('click');
const hiddenDescriptions = document.getElementsByClassName('hidden-description');

for (let i = 0; i < clicks.length; i++) {
    // Attach a click event listener to each 'arrow' element
    clicks[i].addEventListener('click', function() {
        // Access the corresponding 'hidden-description' element in the collection
        const currentDisplay = hiddenDescriptions[i].style.display;
        hiddenDescriptions[i].style.display = (currentDisplay === 'block') ? 'none' : 'block';
    });
};

// Make active header links underlined while visiting
const links = document.querySelectorAll('a');

links.forEach(function (link) {
    if (link.href === window.location.href) {
      link.classList.add('current-page');
    }
});

// Make testimonials slides

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".testimonial-slide");
    const dotsContainer = document.querySelector(".slider-dots");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => (slide.style.display = "none"));
        slides[index].style.display = "block";

        // Update dots
        updateDots(index);

        document.querySelector("#nextBtn").addEventListener("click", nextSlide);
        document.querySelector("#prevBtn").addEventListener("click", prevSlide);
    }

    function updateDots(index) {
        dotsContainer.innerHTML = "";
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            dot.addEventListener("click", () => showSlide(i));
            dotsContainer.appendChild(dot);
        }

        // Highlight the current dot
        dotsContainer.childNodes[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Display the first slide initially
    showSlide(currentSlide);

    // Add event listeners for next and previous buttons
    document.querySelector("#nextBtn").addEventListener("click", nextSlide);
    document.querySelector("#prevBtn").addEventListener("click", prevSlide);
});

// Display index page and all animated images

const images = document.querySelectorAll('.imageScroll');
let currentIndex = 0;
let isAnimating = false;

// Store initial CSS properties for each image
const initialStyles = [];

images.forEach((img) => {
    initialStyles.push({
        transform: img.style.transform,
        transition: img.style.transition
    });
});

window.addEventListener('scroll', () => {
    if (isAnimating) return;
    
    if (currentIndex < images.length) {
        isAnimating = true;
        images[currentIndex].style.transition = 'transform 0.5s ease';
        images[currentIndex].style.transform = 'translateX(-100%)';
        
        setTimeout(() => {
            images[currentIndex].style.transition = initialStyles[currentIndex].transition;
            images[currentIndex].style.transform = initialStyles[currentIndex].transform;
            currentIndex++;
            isAnimating = false;

            // Reset the index and animation state if all images have been animated
            if (currentIndex === images.length) {
                setTimeout(() => {
                    currentIndex = 0;
                }, 500); // Delay before resetting the index
            }
        }, 500); // Duration of the transform transition
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".imageScroll");
    const initialDelay = 1500; // Initial delay before the first image (1 second)
    const delayBetweenImages = 500; // Delay between each subsequent image (0.1 second)
    const cumulativeDelay = initialDelay; // Start cumulative delay with the initial delay

    function revealImages(index) {
        if (index < images.length) {
            setTimeout(function() {
                images[index].classList.remove("hidden");
                revealImages(index + 1);
            }, cumulativeDelay);

            cumulativeDelay += delayBetweenImages; // Increase cumulative delay for the next image
        }
    }

    revealImages(0);
});

document.addEventListener("mousemove", function(event) {
    var scrollWord = document.getElementById("scroll-word");
    scrollWord.style.left = (event.pageX + 20) + "px"; // Adjust 20px offset as needed
    scrollWord.style.top = (event.pageY + 20) + "px"; // Adjust 20px offset as needed
});

document.addEventListener("mousemove", function(event) {
    var scrollWord = document.getElementById("scroll-word");
    scrollWord.style.left = (event.pageX + 20) + "px"; // Adjust 20px offset as needed
    scrollWord.style.top = (event.pageY + 20) + "px"; // Adjust 20px offset as needed
});







