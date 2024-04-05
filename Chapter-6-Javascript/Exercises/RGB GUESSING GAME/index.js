// Constants and variables initialization
const numColors = 12; // Total number of colors to generate
let colors = []; // Array to hold the generated colors
let pickedColor; // The color that needs to be guessed
let gameOver = false; // Flag to track if the game is over
let score = 0; // Player's score
let lives = 3; // Number of lives

// DOM element references
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.getElementById('message');
const colorOptions = document.getElementById('colorOptions');
const resetButton = document.getElementById('resetButton');

// Function to generate a random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random red value (0-255)
    const g = Math.floor(Math.random() * 256); // Random green value (0-255)
    const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
    return `rgb(${r}, ${g}, ${b})`; // Return the RGB color string
}

// Function to generate an array of random colors
function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(generateRandomColor()); // Push a random color to the array
    }
    return arr;
}

// Initialize the game
function init() {
    colors = generateRandomColors(numColors); // Generate random colors
    pickedColor = colors[Math.floor(Math.random() * numColors)]; // Pick a color to guess
    colorDisplay.style.backgroundColor = pickedColor; // Display the color to guess
    messageDisplay.textContent = ''; // Clear the message display
    resetButton.textContent = 'Shuffle the colors!'; // Update reset button text
    gameOver = false; // Reset game over flag
    renderColorOptions(); // Render color options for selection
}

// Render color options for selection
function renderColorOptions() {
    colorOptions.innerHTML = ''; // Clear existing color options
    for (let i = 0; i < colors.length; i++) {
        const colorOption = document.createElement('div'); // Create color option element
        colorOption.classList.add('colorOption'); // Add CSS class to color option
        colorOption.style.backgroundColor = colors[i]; // Set background color of the option
        colorOption.addEventListener('click', function() {
            if (!gameOver) { // If game is not over
                if (colors[i] === pickedColor) { // If correct color is selected
                    messageDisplay.textContent = 'Correct!'; // Display correct message
                    score++; // Increase score
                    init(); // Initialize a new game
                } else { // If incorrect color is selected
                    messageDisplay.textContent = 'Oh you failed, try again?'; // Display incorrect message
                    lives--; // Decrease lives
                    if (lives === 0) { // If no lives left
                        gameOver = true; // Set game over
                        messageDisplay.textContent = `Game Over! Your score is: ${score}`; // Display game over message
                    }
                }
            }
        });
        colorOptions.appendChild(colorOption); // Append color option to color options container
    }
}

// Event listener for reset button click
resetButton.addEventListener('click', function() {
    score = 0; // Reset score
    lives = 3; // Reset lives
    init(); // Initialize a new game
});

// Initialize the game when the script is loaded
init();
