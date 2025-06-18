// Get the button element by its ID
const scrollTopBtn = document.getElementById("scrollTopBtn");

// check the scroll position
window.onscroll = function() {
    // show the button if page scrolled more than 100px
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        // or hide the button
        scrollTopBtn.style.display = "none";
    }
};

// scroll to the top of the page smoothly when the button is clicked
scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


//work with modal, button to open it and the close button
const modal = document.getElementById("modal");
const ctaButton = document.getElementById("ctaButton");
const closeBtn = document.querySelector(".close-btn");

// show the modal when the user clicks the cta button
ctaButton.onclick = function() {
    modal.style.display = "block";
}

// hide the modal when the user clicks the close button X
closeBtn.onclick = function() {
    modal.style.display = "none";
}

//close the form when site is clicked outside the form
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Select all the feature cards
const featureCards = document.querySelectorAll(".feature-card");

// Set up the Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // If the card is in the viewport, add the 'visible' class
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    // Trigger when 10% of the card is visible
    threshold: 0.1 
});

// Tell the observer to watch each feature card
featureCards.forEach(card => {
    observer.observe(card);
});