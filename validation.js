const nameRegex = /^[A-Z][a-z]*([- ][A-Z][a-z]*)*$/
const emailRegex = /^[\w-\.]+@([\w-]\.)+[\w-]{2,4}$/
const numberRegex = /^[0-9]{10}$/
const error_message = document.getElementById("message-container");

function validateName(name) {
    const isValid = nameRegex.test(name);
    displayMessage(isValid, "Please enter a valid name");
    return isValid;
}

function validateEmail(email) {
    const isValid = emailRegex.test(email);
    displayMessage(isValid, "Please enter a valid email");
    return isValid;
}
function validatePhonenumber(phone) {
    const isValid = numberRegex.test(phone);
    displayMessage(isValid, "Please enter a valid 10 digit phone number");
    return isValid;
}
function validateMessage(message) {
    const isValid = message.trim().split(/\s+/).length >= 3 && message.trim().split(/\s+/).length <= 50;
    displayMessage(isValid, "Please enter a message with 3 to 50 words");
    return isValid;
}

function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value;
    let phone = document.getElementById("phone").value;

    const isValidName = validateName(name);
    const isValidEmail = validateEmail(email);
    const isValidMessage = validateMessage(message);
    const isValidNumber = validatePhonenumber(phone);

   
    return isValidName && isValidEmail && isValidMessage && isValidNumber;
}

function displayMessage(isValid, message) {
    if (!isValid) {
        error_message.innerText = message;
        error_message.style.display = "block";
    } else {
        console.log("All values are logged")
        error_message.innerText = ""; 
        error_message.style.display = "none";
    }
}

