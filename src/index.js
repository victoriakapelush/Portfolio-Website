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

