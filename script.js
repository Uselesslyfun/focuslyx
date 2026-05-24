// =========================
// TIMER
// =========================

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

function togglePause() {

    running = !running;

    document.getElementById("pauseBtn").innerText =
        running ? "Pause" : "Resume";
}

// =========================
// NOTES
// =========================

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

// =========================
// PI MODAL
// =========================

const piButton = document.getElementById("piButton");
const piModal = document.getElementById("piModal");
const closePi = document.getElementById("closePi");

piButton.addEventListener("click", () => {

    piModal.style.display = "flex";

});

closePi.addEventListener("click", () => {

    piModal.style.display = "none";

});

// =========================
// ORBIT GENERATOR
// =========================

const piCircle = document.getElementById("piCircle");

let orbitCount = 0;

function createOrbit() {

    orbitCount++;

    // CREATE RING
    const orbit = document.createElement("div");

    orbit.classList.add("orbit");

    // ONLY FEW PERFECT RINGS
    const ringSizes = [260, 320, 380, 440];

    const size =
        ringSizes[(orbitCount - 1) % ringSizes.length];

    orbit.style.width = size + "px";
    orbit.style.height = size + "px";

    // SPEEDS
    orbit.style.animationDuration =
        (12 + orbitCount * 2) + "s";

    // HOW MANY ORBS ON THIS RING
    const orbCount =
        Math.min(orbitCount + 1, 8);

    // CREATE MULTIPLE ORBS
    for (let i = 0; i < orbCount; i++) {

        const orb = document.createElement("div");

        orb.classList.add("orb");

        // RANDOM COLORS
        const colors = ["purple", "blue"];

        orb.classList.add(
            colors[Math.floor(Math.random() * colors.length)]
        );

        // RANDOM SMALL
        if (Math.random() > 0.5) {
            orb.classList.add("small");
        }

        // PERFECT CIRCLE POSITIONING
        const angle =
            (360 / orbCount) * i;

        orb.style.transform =
    `rotate(${angle}deg)
     translateY(-${size/2}px)`;

        orbit.appendChild(orb);
    }

    piCircle.appendChild(orbit);

    // LIMIT
    if (orbitCount > 6) {

        clearInterval(orbitInterval);

    }

}

// FIRST ORBIT
createOrbit();

// CONTINUE ADDING
const orbitInterval = setInterval(() => {

    createOrbit();

}, 4000);

// =========================
// FORM PERFECT CIRCLE
// =========================

const formBtn =
    document.getElementById("formCircleBtn");

formBtn.addEventListener("click", () => {

    const allOrbs =
        document.querySelectorAll(".orb");

    const total =
        allOrbs.length;

    // PERFECT FINAL RADIUS
    const radius = 150;

    allOrbs.forEach((orb, index) => {

        // STOP ORBIT ANIMATION
        orb.parentElement.style.animation = "none";

        // PERFECT ANGLE
        const angle =
            (Math.PI * 2 / total) * index;

        // CALCULATE POSITION
        const x =
            Math.cos(angle) * radius;

        const y =
            Math.sin(angle) * radius;

        // ANIMATE INTO CIRCLE
        orb.style.transition =
            "all 1.8s cubic-bezier(0.22,1,0.36,1)";

        orb.style.left =
            `calc(50% + ${x}px)`;

        orb.style.top =
            `calc(50% + ${y}px)`;

        orb.style.transform =
            "translate(-50%, -50%)";

    });

});
