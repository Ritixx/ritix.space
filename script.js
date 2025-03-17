// Typing Effect
const words = ["Ritix", "Cricket", "Geopolitics", "Technology"];
let i = 0, j = 0;
let typingText = document.getElementById("typing-text");

function typeEffect() {
    if (j < words[i].length) {
        typingText.innerHTML += words[i][j];
        j++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (j > 0) {
        typingText.innerHTML = words[i].substring(0, j - 1);
        j--;
        setTimeout(eraseEffect, 100);
    } else {
        i = (i + 1) % words.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();

// Dark/Light Mode Toggle
document.getElementById("mode-toggle").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
});
