// I'm sowwy this looks so ugly...
const classroom = document.getElementById("classroom");
const comCircle = document.getElementById("com-circle");
const emptyClass = document.getElementById("empty-class");

let images = [classroom, comCircle, emptyClass]

let currentIndex = 0;
let debounce = false;
let interval;
const counter = document.getElementById("counter");


// Returns the previous and next integer of num
function getPrevNext(num) {
    let next = num + 1;
    if (next >= images.length) {
        next = 0;
    }

    let prev = num - 1;
    if (prev < 0) {
        prev = images.length - 1;
    }
    
    return [prev, next];
}


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


function updateCounter() {
    counter.textContent = `${currentIndex + 1}/${images.length}`
}


function carouselGoPrev() {
    if (debounce == true) {
        return;
    }
    createDebounce();
    resetInterval();

    const [prev, next] = getPrevNext(currentIndex);

    const currentItem = images[currentIndex];
    const nextItem = images[next];
    const prevItem = images[prev];

    currentItem.className = "item next";
    nextItem.className = "item prev hidden";
    prevItem.className = "item active";

    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateCounter();
}


function carouselGoNext() {
    if (debounce == true) {
        return;
    }
    createDebounce();
    resetInterval();

    const [prev, next] = getPrevNext(currentIndex);

    const currentItem = images[currentIndex];
    const nextItem = images[next];
    const prevItem = images[prev];

    currentItem.className = "item prev";
    nextItem.className = "item active";
    prevItem.className = "item next hidden";

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateCounter();
}

const prevBtn = document.querySelector("#btn-left");
const nextBtn = document.querySelector("#btn-right");

prevBtn.addEventListener("click", carouselGoPrev);
nextBtn.addEventListener("click", carouselGoNext);

resetInterval();