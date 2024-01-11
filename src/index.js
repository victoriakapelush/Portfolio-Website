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