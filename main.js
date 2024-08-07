// I'm sowwy this looks so ugly...

let images = [
    "classroom", "com-circle", "empty-class"
]
let currentIndex = 0;
let debounce = false;

let interval;

function createDebounce() {
    debounce = true;
    debounceTimer = setTimeout(() => {
        debounce = false;
    }, 400);
}

function resetInterval() {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        carouselGoNext();
    }, 5000);
}


function carouselGoPrev() {
    if (debounce == true) {
        return;
    }
    createDebounce();
    resetInterval();

    currentIndex = Math.max(Math.min(currentIndex, images.length - 1), 0);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
        nextIndex = 0;
    }

    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
        prevIndex = images.length - 1;
    }

    const currentItem = document.querySelector(`#${images[currentIndex]}`);
    const nextItem = document.querySelector(`#${images[nextIndex]}`);
    const prevItem = document.querySelector(`#${images[prevIndex]}`);

    currentItem.className = "item next";
    nextItem.className = "item prev hidden";
    prevItem.className = "item active";

    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
}

function carouselGoNext() {
    if (debounce == true) {
        return;
    }
    createDebounce();
    resetInterval();

    currentIndex = Math.max(Math.min(currentIndex, images.length - 1), 0);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
        nextIndex = 0;
    }

    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
        prevIndex = images.length - 1;
    }

    const currentItem = document.querySelector(`#${images[currentIndex]}`);
    const nextItem = document.querySelector(`#${images[nextIndex]}`);
    const prevItem = document.querySelector(`#${images[prevIndex]}`);

    currentItem.className = "item prev";
    nextItem.className = "item active";
    prevItem.className = "item next hidden";

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
}

const prevBtn = document.querySelector("#btn-left");
const nextBtn = document.querySelector("#btn-right");

console.log(prevBtn);

prevBtn.addEventListener("click", carouselGoPrev);
nextBtn.addEventListener("click", carouselGoNext);

resetInterval();