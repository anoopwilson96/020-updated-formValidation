const nameInputJS = document.getElementById("nameInput");
const nameErrorJS = document.getElementById("nameError");

const emailInputJS = document.getElementById("emailInput");
const emailErrorJS = document.getElementById("emailError");

const passwordInput1JS = document.getElementById("passwordInput1");
const passwordError1JS = document.getElementById("passwordError1");

const passwordInput2JS = document.getElementById("passwordInput2");
const passwordError2JS = document.getElementById("passwordError2");

const totalErrorJS = document.getElementById("totalError");
const submitButtonJS = document.getElementById("submitButton");

// Function to validate a specific input field and update its error message
function validateInput(inputElement, errorElement, validationFunction, errorMessage) {
  const value = inputElement.value.trim();
  if (validationFunction(value)) {
    
    errorElement.innerHTML = "";
  } else {
    errorElement.innerHTML = errorMessage;
  }
}

// Validation functions
function validateName(name) {
  return name !== "";
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{8,}$/.test(password);
}

// Submit button event listener
submitButtonJS.addEventListener("click", function (event) {
  totalErrorJS.innerHTML = ""; // Clear total error message on submit

  validateInput(nameInputJS, nameErrorJS, validateName, "Name cannot be blank.");
  validateInput(emailInputJS, emailErrorJS, validateEmail, "Invalid email format.");
  validateInput(passwordInput1JS, passwordError1JS, validatePassword, "Password must meet complexity requirements.");
  validateInput(passwordInput2JS, passwordError2JS, validatePassword, "Password must meet complexity requirements.");

  const hasError = nameErrorJS.innerHTML !== "" ||
                   emailErrorJS.innerHTML !== "" ||
                   passwordError1JS.innerHTML !== "" ||
                   passwordError2JS.innerHTML !== "";

  if (hasError) {
    event.preventDefault(); // Prevent form submission if there are errors
  }
});

// Input change event listeners for real-time validation
nameInputJS.addEventListener("input", function () {
  validateInput(nameInputJS, nameErrorJS, validateName, "Name cannot be blank.");
});

emailInputJS.addEventListener("input", function () {
  validateInput(emailInputJS, emailErrorJS, validateEmail, "Invalid email format.");
});

passwordInput1JS.addEventListener("input", function () {
  validateInput(passwordInput1JS, passwordError1JS, validatePassword, "Password must meet complexity requirements.");
});

passwordInput2JS.addEventListener("input", function () {
  validateInput(passwordInput2JS, passwordError2JS, validatePassword, "Password should match");
});
