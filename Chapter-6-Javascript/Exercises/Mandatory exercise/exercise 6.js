// Execute the following code when the window is fully loaded
window.onload = () => {
    // Select all input elements on the page
    const inputs = document.querySelectorAll("input");

    // Iterate over each input element
    inputs.forEach(input => {
        // Add an event listener to each input element, listening for 'change' event
        input.addEventListener('change', calculate);
    });
}

// Function to calculate the total amount based on petrol price and liters
function calculate() {
    // Get the value of petrol price input field
    const petrolPrice = document.querySelector('#petrol_price').value;

    // Get the value of liters input field
    const liters = document.querySelector('#liters').value;

    // If either petrol price or liters is not provided, exit the function
    if (!petrolPrice || !liters) return;

    // Calculate the total amount by multiplying petrol price and liters
    const totalAmount = petrolPrice * liters;

    // Display the calculated total amount in the designated element
    document.querySelector('#totalAmount').innerText = totalAmount;
}
