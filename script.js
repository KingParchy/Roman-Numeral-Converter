// Get the DOM elements
const form = document.getElementById("form");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
const numberInput = document.getElementById("number");

// Define the convertToRoman function that takes a number as an argument and converts it to a Roman numeral
const convertToRoman = (num) => {
    // Define the array of Roman numerals and their corresponding integer values
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];

    // Initialize an empty string to store the Roman numeral representation of the number
    let roman = "";

    // Iterate through the romanNumerals array
    for (let i = 0; i < romanNumerals.length; i++) {
        // While the number is greater than or equal to the current Roman numeral value
        while (num >= romanNumerals[i][1]) {
            // Append the Roman numeral to the roman string
            roman += romanNumerals[i][0];
            // Subtract the Roman numeral value from the number
            num -= romanNumerals[i][1];
        }
    }

    // Return the Roman numeral representation of the number
    return roman;
};

// Define the clearOutput function that clears the output element
const clearOutput = () => {
    // Clear the inner text of the output element
    output.innerText = "";
    // Remove the alert class from the output element
    output.classList.remove("alert");
};

// Define the converted function that handles the conversion process
const converted = () => {
    // Get the number entered by the user
    const number = parseInt(numberInput.value);
    // Make the output element visible
    output.classList.remove("hidden");
    // Clear the previous output
    clearOutput();

    // Check if the input is a valid number
    if (isNaN(number)) {
        // Display an error message if the input is not a valid number
        output.classList.add("alert");
        output.textContent = "Please enter a valid number";
    } else if (number < 1) {
        // Display an error message if the number is less than 1
        output.classList.add("alert");
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (number > 3999) {
        // Display an error message if the number is greater than 3999
        output.classList.add("alert");
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        // Display the converted Roman numeral if the input is valid
        output.textContent = convertToRoman(number);
    }
};

// Add an event listener to the form that triggers the converted function when the form is submitted
form.addEventListener("submit", (e) => {
    e.preventDefault();
    converted();
});

// Add an event listener to the convert button that triggers the converted function when the button is clicked
convertButton.addEventListener("click", converted);
