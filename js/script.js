const banner = document.querySelector('.banner');
const panels = document.querySelectorAll('.banner-panel');
const dots = document.querySelectorAll('.pagination-dot');
let currentPanel = 0;

// Przewijanie w prawo
function nextPanel() {
    if (currentPanel < panels.length - 1) {
        currentPanel++;
        updateBanner();
    }
    else{
        currentPanel = 0;
        updateBanner();
    }
}

// Przewijanie w lewo
function prevPanel() {
    if (currentPanel > 0) {
        currentPanel--;
        updateBanner();
    }
    else{
        currentPanel = 2;
        updateBanner();
    }
}

function updateBanner() {
    const offset = -currentPanel * banner.offsetWidth;
    banner.style.transform = `translateX(${offset}px)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentPanel);
    });
}

// Przejścia do konkretnego panela na paginacji
function goToPanel(index) {
    currentPanel = index;
    updateBanner();
}

// Automatyczne przewijanie
let intervalId;
function startAutoScroll() {
    intervalId = setInterval(nextPanel, 5000);
}

function stopAutoScroll() {
    clearInterval(intervalId);
}

window.addEventListener('load', () => {
    updateBanner();
    startAutoScroll();
});
const plusButtons = document.querySelectorAll(".plus_button");
const minusButtons = document.querySelectorAll(".minus_button");

plusButtons.forEach(function(button) {
    button.addEventListener("click", () => {
        const input = button.parentElement.querySelector(".product_count");
        let value = parseInt(input.value);
        if (value < 99) {
            input.value = value + 1;
        }
    });
});

minusButtons.forEach(function(button) {
    button.addEventListener("click", () => {
        const input = button.parentElement.querySelector(".product_count");
        let value = parseInt(input.value);
        if (value > 1) {
            input.value = parseInt(input.value) - 1;
        }
    });
});