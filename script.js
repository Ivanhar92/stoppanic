let currentExercise = null;
let exerciseInterval;

function startExercise(type) {
    document.getElementById("exercise-container").classList.add("hidden");
    document.getElementById("exercise-display").classList.remove("hidden");
    currentExercise = type;

    if (type === "breathing") {
        startBreathingExercise();
    } else if (type === "54321") {
        start54321Method();
    } else if (type === "colorTherapy") {
        startColorTherapy();
    } else if (type === "relaxation") {
        startRelaxation();
    }
}

function stopExercise() {
    clearInterval(exerciseInterval);
    document.getElementById("exercise-container").classList.remove("hidden");
    document.getElementById("exercise-display").classList.add("hidden");
}

function startBreathingExercise() {
    let steps = [
        { text: "Вдохни (4 секунды)...", size: "200px", color: "green" },
        { text: "Задержи дыхание (4 секунды)...", size: "200px", color: "red" },
        { text: "Выдохни (6 секунд)...", size: "50px", color: "blue" }
    ];

    let index = 0;
    document.getElementById("breathing-circle").style.display = "block";

    function updateStep() {
        let step = steps[index];
        document.getElementById("instruction-text").innerText = step.text;
        document.getElementById("breathing-circle").style.width = step.size;
        document.getElementById("breathing-circle").style.height = step.size;
        document.getElementById("breathing-circle").style.backgroundColor = step.color;

        index = (index + 1) % steps.length;
    }

    updateStep();
    exerciseInterval = setInterval(updateStep, 4000);
}

function start54321Method() {
    let steps = [
        "Назови 5 предметов вокруг себя.",
        "Назови 4 вещи, которые можешь потрогать.",
        "Назови 3 звука, которые слышишь.",
        "Назови 2 запаха вокруг.",
        "Назови 1 ощущение в теле."
    ];

    let index = 0;
    document.getElementById("instruction-text").innerText = steps[index];

    function updateStep() {
        index++;
        if (index < steps.length) {
            document.getElementById("instruction-text").innerText = steps[index];
        } else {
            clearInterval(exerciseInterval);
            document.getElementById("instruction-text").innerText = "Ты молодец! Чувствуешь себя лучше?";
        }
    }

    exerciseInterval = setInterval(updateStep, 6000);
}

function startColorTherapy() {
    let colors = ["red", "blue", "green", "yellow", "purple"];
    let index = 0;

    function updateColor() {
        document.body.style.backgroundColor = colors[index];
        document.getElementById("instruction-text").innerText = `Назови этот цвет.`;
        index = (index + 1) % colors.length;
    }

    updateColor();
    exerciseInterval = setInterval(updateColor, 5000);
}

function startRelaxation() {
    let steps = [
        "Напряги кулаки на 5 секунд...",
        "Расслабь кулаки...",
        "Напряги плечи на 5 секунд...",
        "Расслабь плечи...",
        "Напряги ноги на 5 секунд...",
        "Расслабь ноги..."
    ];

    let index = 0;
    document.getElementById("instruction-text").innerText = steps[index];

    function updateStep() {
        index++;
        if (index < steps.length) {
            document.getElementById("instruction-text").innerText = steps[index];
        } else {
            clearInterval(exerciseInterval);
            document.getElementById("instruction-text").innerText = "Ты молодец! Расслабление завершено.";
        }
    }

    exerciseInterval = setInterval(updateStep, 5000);
}
