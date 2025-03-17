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
    
    let typingSpeed;
    
    if (!isDeleting && charIndex === currentWord.length) {
        // Start deleting immediately after reaching the end of the word
        isDeleting = true;
        typingSpeed = 100; // No pause - start deleting at regular delete speed
    } else if (isDeleting && charIndex === 0) {
        // Move to the next word with no delay
        isDeleting = false;
        index = (index + 1) % words.length;
        typingSpeed = 0; // No delay between words
    } else {
        // Normal typing/deleting speed
        typingSpeed = isDeleting ? 100 : 200;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

typeEffect();
