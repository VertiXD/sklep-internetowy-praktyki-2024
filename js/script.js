const banner = document.querySelector('.banner');
const panels = document.querySelectorAll('.banner-panel');
const dots = document.querySelectorAll('.pagination-dot');
const scrollable_container = document.querySelector('.recommendations-container-wide');
const scrollable_products = document.querySelectorAll('.scrollable-panel');
let currentProduct = 0;
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

function updateProducts(flag) {
    const offset = -(currentProduct/4) * scrollable_container.offsetWidth;
    scrollable_container.style.transform = `translateX(${offset+flag}px)`;
}

function nextProduct() {
    if (currentProduct < scrollable_products.length/2 - 1 ) {
        currentProduct+=4;
        updateProducts(-8);
    }
}

// Przewijanie w lewo
function prevProduct() {
    if (currentProduct > 0) {
        currentProduct-=4;
        updateProducts(0);
    }
}

function toggle() {
    let blur = document.getElementById('filters');
    blur.classList.toggle('active');

    let popupBackground = document.getElementById('popupBackground');
    let popupContent = document.getElementById('popupContent');

    // toggle dla tla i zawartości popupa
    popupBackground.classList.toggle('active');
    popupContent.classList.toggle('active');
} 
  
function toIndex(){
    window.location.href = './index.html';
}
function toCart(){
    window.location.href = './koszyk.html';
}
function toProduct(){
    window.location.href = './product.html';
}
function toContact(){
    window.location.href = './kontakt.html';
}