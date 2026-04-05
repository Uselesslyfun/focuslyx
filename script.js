let time = 0;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").innerText =
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startStopwatch() {
    updateDisplay(); // sets 00:00 instantly

    setInterval(() => {
        time++;
        updateDisplay();
    }, 1000);
}

window.onload = startStopwatch;
