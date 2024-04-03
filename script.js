// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; // Initialize the number of attempts made by the user

// Function to check the user's guess
function checkGuess() {
    // Get the user's input from the input field
    const userInput = parseInt(document.getElementById('user-input').value);
    const messageElement = document.getElementById('message'); // Get the message element to display feedback to the user

    // Check if the user's input is a valid number between 1 and 100
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100.'; // Display an error message if the input is invalid
        return;
    }

    attempts++; // Increment the number of attempts made by the user

    // Check if the user's input matches the secret number
    if (userInput === secretNumber) {
        messageElement.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`; // Display a success message if the user guesses correctly
        disableInput(); // Disable the input field and button after guessing correctly
    } else if (userInput < secretNumber) {
        messageElement.textContent = 'Too low. Try again.'; // Display a message indicating that the guess is too low
    } else {
        messageElement.textContent = 'Too high. Try again.'; // Display a message indicating that the guess is too high
    }
}

// Function to disable input and button after guessing correctly
function disableInput() {
    document.getElementById('user-input').disabled = true; // Disable the input field
    document.querySelector('button').disabled = true; // Disable the button
}