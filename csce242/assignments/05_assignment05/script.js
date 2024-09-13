var clicks = 0;
const square = document.getElementById('square');
const rangeInput = document.getElementById('myRange');

function countUp(){
    clicks += 1;
    document.getElementById("counter").innerHTML = clicks
}

function refreshPage(){
    location.reload(true)
}

function updateSquarePosition() {
    const containerWidth = container.offsetWidth;
    const squareWidth = square.offsetWidth;

    // Calculate the max position based on the container width and square width
    const maxLeft = containerWidth - squareWidth;
    const value = rangeInput.value;

    // Calculate the new position as a percentage of the container width
    const newLeft = (value / 100) * maxLeft;

    // Apply the new position
    square.style.left = `${newLeft}px`;
}

// Initialize the square position on page load
updateSquarePosition();

// Update the square position when the range input changes
rangeInput.addEventListener('input', updateSquarePosition);