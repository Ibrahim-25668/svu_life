// Index Category 
function indexCategory(category) {
    let indexCards = document.querySelectorAll('.event-card');

    indexCards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Events Filter 
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const dateFilter = document.getElementById("dateFilter");
const locationFilter = document.getElementById("locationFilter");

if (searchInput) {
    searchInput.addEventListener("keyup", filterEvents);
}

if (categoryFilter) {
    categoryFilter.addEventListener("change", filterEvents);
}

if (dateFilter) {
    dateFilter.addEventListener("change", filterEvents);
}

if (locationFilter) {
    locationFilter.addEventListener("change", filterEvents);
}

function filterEvents() {

    let searchValue = searchInput.value.toLowerCase();
    let categoryValue = categoryFilter.value;
    let dateValue = dateFilter.value;
    let locationValue = locationFilter.value;

    let cards = document.querySelectorAll(".event-card");

    cards.forEach(card => {

        let title = card.querySelector("h5").textContent.toLowerCase();
        let categoryMatch = categoryValue === "all" || card.classList.contains(categoryValue);
        let dateMatch = !dateValue || card.getAttribute("data-date") === dateValue;
        let locationMatch = locationValue === "all" || card.getAttribute("data-location") === locationValue;
        let searchMatch = title.includes(searchValue);

        if (categoryMatch && dateMatch && locationMatch && searchMatch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// Scroll to top button
window.onscroll = function () {
    let btn = document.getElementById("topBtn");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let isValid = true;

    // Inputs
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    // Errors
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let subjectError = document.getElementById("subjectError");
    let messageError = document.getElementById("messageError");

    // Reset
    nameError.classList.add("d-none");
    emailError.classList.add("d-none");
    subjectError.classList.add("d-none");
    messageError.classList.add("d-none");

    // Name validation
    if (name.value.trim() === "") {
        nameError.classList.remove("d-none");
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        emailError.classList.remove("d-none");
        isValid = false;
    }

    // Subject validation
    if (subject.value.trim() === "") {
        subjectError.classList.remove("d-none");
        isValid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        messageError.classList.remove("d-none");
        isValid = false;
    }

    // Success
    if (isValid) {
        document.getElementById("successMessage").classList.remove("d-none");
        document.getElementById("contactForm").reset();
    }

});