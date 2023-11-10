//Get all the required DOM elements

const passwordInput = document.querySelector(".password-box input"),
    copyIcon = document.querySelector(".password-box .copy-icon"),
    rangeInput = document.querySelector(".range-box input"),
    sliderNumber = document.querySelector(".range-box .slider-number"),
    generateButton = document.querySelector(".generate-button");

//Characters of alphabet(a-z/A-Z), numbers(0-9)and Symbols($%&[]....)
let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~";


//Creating a function to generate passwords randomly
//This function will be called on, page reload, generateButton clicked and rangeInput slide
const generatePassword = () => {
    let newPassword = "";

    //for loop will run till rangeInput value
    for(let i = 0; i < rangeInput.value; i++){
        let randomNumbers = Math.floor(Math.random() * allCharacters.length);
        newPassword += allCharacters[randomNumbers];
    }
    passwordInput.value = newPassword;
    copyIcon.classList.replace("uil-file-check-alt", "uil-copy"); //Replace icons
};

//Add an event listener to the Slider
rangeInput.addEventListener("input", () => {
    //Updating the slider number with the current range input value
    sliderNumber.innerHTML = rangeInput.value;
    generatePassword();
});

//copy passInput's value on copyIcon click
copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("uil-copy", "uil-file-check-alt"); //Replace icons
});

generatePassword();
//Add an event listener to the generate button
generateButton.addEventListener("click", generatePassword);