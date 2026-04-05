let time = 0;
let running = true;
let interval;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").innerText =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startStopwatch() {
    updateDisplay();

    interval = setInterval(() => {
        if (running) {
            time++;
            updateDisplay();
        }
    }, 1000);
}

function togglePause() {
    running = !running;

    let btn = document.getElementById("pauseBtn");
    btn.innerText = running ? "Pause" : "Resume";
}

window.onload = startStopwatch;
