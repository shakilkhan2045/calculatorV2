let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Event listener for button clicks
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Stop the propagation to prevent double input
        handleInput(e.target.innerHTML);
    });
});

// Event listener for keyboard input
document.addEventListener('keydown', (e) => {
    e.preventDefault(); // Prevent default behavior to avoid duplicate input
    // Check if the pressed key is a valid input
    const validInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.', '=', 'Enter', 'Backspace'];
    
    if (validInputs.includes(e.key)) {
        handleInput(e.key);
    }
});

// Function to handle input
function handleInput(value) {
    switch(value) {
        case '=':
        case 'Enter':
            string = eval(string);
            break;

        case 'AC':
            string = "";
            break;

        case 'DEL':
        case 'Backspace':
            string = string.substring(0, string.length - 1);
            break;

        default:
            string += value;
    }

    input.value = string;
}
