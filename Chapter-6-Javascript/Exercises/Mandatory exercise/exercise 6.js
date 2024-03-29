window.onload = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener('change', calculate);
    });
}

function calculate() {
    const petrolPrice = document.querySelector('#petrol_price').value;
    const liters = document.querySelector('#liters').value;

    if (!petrolPrice || !liters) return;

    document.querySelector('#totalAmount').innerText = petrolPrice * liters;
}