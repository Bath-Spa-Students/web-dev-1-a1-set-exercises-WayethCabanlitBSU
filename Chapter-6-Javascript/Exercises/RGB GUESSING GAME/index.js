const numColors = 12;
let colors = [];
let pickedColor;
let gameOver = false;
let score = 0;
let lives = 3;

const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.getElementById('message');
const colorOptions = document.getElementById('colorOptions');
const resetButton = document.getElementById('resetButton');

// Generate random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Generate random colors array
function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(generateRandomColor());
    }
    return arr;
}

// Initialize game
function init() {
    colors = generateRandomColors(numColors);
    pickedColor = colors[Math.floor(Math.random() * numColors)];
    colorDisplay.style.backgroundColor = pickedColor;
    messageDisplay.textContent = '';
    resetButton.textContent = 'Shuffle the colors!';
    gameOver = false;
    renderColorOptions();
}

// Render color options
function renderColorOptions() {
    colorOptions.innerHTML = '';
    for (let i = 0; i < colors.length; i++) {
        const colorOption = document.createElement('div');
        colorOption.classList.add('colorOption');
        colorOption.style.backgroundColor = colors[i];
        colorOption.addEventListener('click', function() {
            if (!gameOver) {
                if (colors[i] === pickedColor) {
                    messageDisplay.textContent = 'Correct!';
                    score++;
                    init();
                } else {
                    messageDisplay.textContent = 'Oh you failed, try again?';
                    lives--;
                    if (lives === 0) {
                        gameOver = true;
                        messageDisplay.textContent = `Game Over! Your score is: ${score}`;
                    }
                }
            }
        });
        colorOptions.appendChild(colorOption);
    }
}

// Reset game
resetButton.addEventListener('click', function() {
    score = 0;
    lives = 3;
    init();
});

// Initialize game
init();
