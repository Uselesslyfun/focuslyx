window.onload = function () {

    // TIMER ----------------
    let time = 0;
    let running = true;

    function updateDisplay() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        document.getElementById("timer").innerText =
            `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    setInterval(() => {
        if (running) {
            time++;
            updateDisplay();
        }
    }, 1000);

    window.togglePause = function () {
        running = !running;
        document.getElementById("pauseBtn").innerText =
            running ? "Pause" : "Resume";
    };

    // NOTES ----------------
    const input = document.getElementById("noteInput");
    const container = document.getElementById("notesContainer");

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            const text = input.value.trim();

            if (text !== "") {
                const note = document.createElement("div");
                note.className = "note";
                note.innerText = text;

                container.prepend(note);

                input.value = "";
            }
        }
    });
};
