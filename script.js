// Typing Effect
const words = ["Ritix", "Cricket", "Geopolitics", "Technology"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const dynamicText = document.querySelector(".dynamic-text");

function typeEffect() {
    let currentWord = words[index];
    if (isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex--);
    } else {
        dynamicText.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 70 : 150);
}

typeEffect();

// Light/Dark Mode Toggle
const toggleSwitch = document.getElementById("theme-toggle");
toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});
