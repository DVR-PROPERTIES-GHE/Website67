// Variables
let points = 0;
let level = 1;
let pointsPerClick = 1;
let nextLevelAt = 100;
let prevLevelAt = 0;

// Elements
const counterEl = document.getElementById("counter");
const levelEl = document.getElementById("levelcount");
const ppcEl = document.getElementById("ppc");
const progressBarEl = document.getElementById("progress-bar");
const nextEl = document.getElementById("next");
const clickSound = document.getElementById("click-sound");
const clickImage = document.getElementById("click-image");

// Click event
clickImage.addEventListener("click", countup);

function countup() {
    // Play click sound
    clickSound.currentTime = 0;
    clickSound.play();

    // Add points
    points += pointsPerClick;

    // Level up loop (safe)
    while (points >= nextLevelAt) {
        level++;
        pointsPerClick = Math.min(pointsPerClick * 2, 1024); // Cap to prevent crash
        prevLevelAt = nextLevelAt;
        nextLevelAt = prevLevelAt + 100 * level;

        levelEl.innerText = "Level " + level + " - Dick Click";
        ppcEl.innerText = "Points per click: " + pointsPerClick;
    }

    // Update counter
    counterEl.innerText = points;

    // Update progress bar
    let progressPercent = ((points - prevLevelAt) / (nextLevelAt - prevLevelAt)) * 100;
    if (progressPercent > 100) progressPercent = 100;
    progressBarEl.style.width = progressPercent + "%";

    // Update next level text
    nextEl.innerText = "Next level at: " + nextLevelAt + " points";
}
