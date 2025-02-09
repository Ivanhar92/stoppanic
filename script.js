function startBreathing() {
    let container = document.getElementById('exercise-container');
    container.innerHTML = '<h2>Дыхательное упражнение</h2><p>Вдохни...</p>';

    let circle = document.createElement('div');
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.background = 'blue';
    circle.style.borderRadius = '50%';
    circle.style.margin = '20px auto';
    container.appendChild(circle);

    let breathPhases = [
        { text: 'Вдох (4 секунды)', size: '150px', color: 'green' },
        { text: 'Задержка (4 секунды)', size: '150px', color: 'red' },
        { text: 'Выдох (6 секунд)', size: '50px', color: 'blue' }
    ];

    let i = 0;
    function updateBreath() {
        if (i >= breathPhases.length) {
            i = 0;
        }
        circle.style.width = breathPhases[i].size;
        circle.style.height = breathPhases[i].size;
        circle.style.background = breathPhases[i].color;
        container.children[1].textContent = breathPhases[i].text;
        i++;
        setTimeout(updateBreath, 4000);
    }

    updateBreath();
}

function start54321() {
    let container = document.getElementById('exercise-container');
    container.innerHTML = '<h2>Метод 5-4-3-2-1</h2><p>Назови 5 предметов вокруг себя...</p>';
    setTimeout(() => {
        container.innerHTML += '<p>Назови 4 звука...</p>';
    }, 5000);
    setTimeout(() => {
        container.innerHTML += '<p>Назови 3 запаха...</p>';
    }, 10000);
    setTimeout(() => {
        container.innerHTML += '<p>Назови 2 вкуса...</p>';
    }, 15000);
    setTimeout(() => {
        container.innerHTML += '<p>Назови 1 ощущение...</p>';
    }, 20000);
}

function startColorTherapy() {
    let container = document.getElementById('exercise-container');
    container.innerHTML = '<h2>Цветотерапия</h2><p>Смотри на цвет и назови его про себя...</p>';

    let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let i = 0;
    let colorDiv = document.createElement('div');
    colorDiv.style.width = '100px';
    colorDiv.style.height = '100px';
    colorDiv.style.margin = '20px auto';
    container.appendChild(colorDiv);

    function changeColor() {
        if (i >= colors.length) i = 0;
        colorDiv.style.background = colors[i];
        i++;
        setTimeout(changeColor, 3000);
    }

    changeColor();
}

function startTensionRelax() {
    let container = document.getElementById('exercise-container');
    container.innerHTML = '<h2>Напряжение и расслабление</h2><p>Сожми кулаки на 5 секунд...</p>';

    setTimeout(() => {
        container.innerHTML += '<p>Теперь расслабь руки...</p>';
    }, 5000);
    setTimeout(() => {
        container.innerHTML += '<p>Сожми плечи...</p>';
    }, 10000);
    setTimeout(() => {
        container.innerHTML += '<p>Теперь расслабь...</p>';
    }, 15000);
}

