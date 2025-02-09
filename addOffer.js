/*function validateForm() {
    //validation titre
    const title = document.getElementById('title').value;
    if (title.length<3) {
        alert("Title must be at least 3 characters long.");
        return false;
    }
    //validation destination
    const destination = document.getElementById('destination').value;
    const destinationRegex = /^[A-Za-z\s]+$/;
    if (destination.length<3 || !destinationRegex.test(destination)) {
        alert("Destination must be at least 3 characters long and contain only letters and spaces.")
        return false;
    }
    //validation date
    const departure_date = new Date(document.getElementById('departureDate').value);
    const return_date = new Date(document.getElementById('returnDate').value);
    if(departure_date>=return_date){
        alert("Return date must be after departure date.");
        return false;
    }
    //validation prix
    const price = parseInt(parseFloat(document.getElementById('price').value));
    if(isNaN(price) || price<=0){
        alert("Price must a positive number.");
        return false;
    }
    //if all is valid , the form is submitted
    alert("Travel offer added successfully!");
    return true;
}*/


/*
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("offerForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission initially

        // Clear previous messages
        document.querySelectorAll(".error-message, .success-message").forEach(msg => msg.remove());

        let isValid = true;

        // Validate Title
        const title = document.getElementById("title");
        if (title.value.length < 3) {
            showError(title, "Title must be at least 3 characters long.");
            isValid = false;
        } else {
            showSuccess(title);
        }

        // Validate Destination
        const destination = document.getElementById("destination");
        const destinationRegex = /^[A-Za-z\s]+$/;
        if (destination.value.length < 3 || !destinationRegex.test(destination.value)) {
            showError(destination, "Destination must be at least 3 characters and contain only letters and spaces.");
            isValid = false;
        } else {
            showSuccess(destination);
        }

        // Validate Departure and Return Dates
        const departureDate = new Date(document.getElementById("departureDate").value);
        const returnDate = new Date(document.getElementById("returnDate").value);
        if (isNaN(departureDate.getTime())) {
            showError(document.getElementById("departureDate"), "Please enter a valid departure date.");
            isValid = false;
        } else {
            showSuccess(document.getElementById("departureDate"));
        }

        if (isNaN(returnDate.getTime()) || returnDate <= departureDate) {
            showError(document.getElementById("returnDate"), "Return date must be a valid date after the departure date.");
            isValid = false;
        } else {
            showSuccess(document.getElementById("returnDate"));
        }

        // Validate Price
        const price = document.getElementById("price");
        if (isNaN(price.value) || price.value <= 0) {
            showError(price, "Price must be a positive number.");
            isValid = false;
        } else {
            showSuccess(price);
        }

        // If all validations pass, submit the form
        if (isValid) {
            alert("Travel offer added successfully!");
            form.submit();
        }
    });

    function showError(input, message) {
        const error = document.createElement("div");
        error.classList.add("error-message");
        error.style.color = "red";
        error.textContent = message;
        input.after(error);
    }

    function showSuccess(input) {
        const success = document.createElement("div");
        success.classList.add("success-message");
        success.style.color = "green";
        success.textContent = "Valid";
        input.after(success);
    }
});

document.addEventListener('DOMContentLoaded',function(){
    const titleInput = document.getElementById('title');
    const destinationInput = document.getElementById('destination');

    function validateField(input, regex, minlength, errorMessage){
        let errorDiv = input.nextElementSibling;
        //if no error exists, create one
        if(!errorDiv || (!errorDiv.classList.contains('error-message') && !errorDiv.classList.contains('success-message'))){
            errorDiv = document.createElement('div');
            errorDiv.className = 'validation-message';
            input.parentNode.insertBefore(errorDiv, input.nextSibling);
        }
        //validate the input 
        if(input.value.length >= minlength && regex.test(input.value)){
            errorDiv.textContent = 'Correct ✅';
            errorDiv.className = 'validation-message success-messsage';
        }
        else{
            errorDiv.textContent = errorMessage;
            errorDiv.className = 'validation-message error-messsage';
        }
    }

    //remove existing messages before adding a new one 
    function clearValidationMeassages (input){
        let errorDiv = input.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('validation-message')){
            errorDiv.remove();
        }
    }

    //add event listeners fo real-time validation
    titleInput.addEventListener('keyup',function(){
        clearValidationMeassages(titleInput);
        validateField(titleInput, /./, 3, 'Title must be at least 3 characters long.');
    });
    destinationInput.addEventListener('keyup', function(){
        clearValidationMeassages(destinationInput);
        validateField(destinationInput, /^[A-Za-z\s]+$/, 3, 'Destination must be at least 3 characters long and contain only letters.');
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("offerForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission initially

        // Clear previous messages
        document.querySelectorAll(".validation-message").forEach(msg => msg.remove());

        let isValid = true;

        // Validate Title
        const title = document.getElementById("title");
        if (title.value.length < 3) {
            showMessage(title, "Title must be at least 3 characters long.", false);
            isValid = false;
        } else {
            showMessage(title, "Valid ✅", true);
        }

        // Validate Destination
        const destination = document.getElementById("destination");
        const destinationRegex = /^[A-Za-z\s]+$/;
        if (destination.value.length < 3 || !destinationRegex.test(destination.value)) {
            showMessage(destination, "Destination must be at least 3 characters and contain only letters and spaces.", false);
            isValid = false;
        } else {
            showMessage(destination, "Valid ✅", true);
        }

        // Validate Dates
        const departureDate = new Date(document.getElementById("departureDate").value);
        const returnDate = new Date(document.getElementById("returnDate").value);
        if (isNaN(departureDate.getTime())) {
            showMessage(document.getElementById("departureDate"), "Please enter a valid departure date.", false);
            isValid = false;
        } else {
            showMessage(document.getElementById("departureDate"), "Valid ✅", true);
        }

        if (isNaN(returnDate.getTime()) || returnDate <= departureDate) {
            showMessage(document.getElementById("returnDate"), "Return date must be a valid date after the departure date.", false);
            isValid = false;
        } else {
            showMessage(document.getElementById("returnDate"), "Valid ✅", true);
        }

        // Validate Price
        const price = document.getElementById("price");
        if (isNaN(price.value) || price.value <= 0) {
            showMessage(price, "Price must be a positive number.", false);
            isValid = false;
        } else {
            showMessage(price, "Valid ✅", true);
        }

        // If all validations pass, submit the form
        if (isValid) {
            alert("Travel offer added successfully!");
            form.submit();
        }
    });

    function showMessage(input, message, isSuccess) {
        let msgDiv = input.nextElementSibling;

        // Remove any existing validation messages
        if (msgDiv && msgDiv.classList.contains("validation-message")) {
            msgDiv.remove();
        }

        msgDiv = document.createElement("div");
        msgDiv.classList.add("validation-message");
        msgDiv.textContent = message;
        msgDiv.style.color = isSuccess ? "green" : "red";

        input.after(msgDiv);
    }

    // Real-time validation
    function validateField(input, regex, minLength, errorMessage) {
        let value = input.value.trim();
        if (value.length >= minLength && regex.test(value)) {
            showMessage(input, "valid ✅", true);
        } else {
            showMessage(input, errorMessage, false);
        }
    }

    const titleInput = document.getElementById('title');
    const destinationInput = document.getElementById('destination');

    titleInput.addEventListener('keyup', function () {
        validateField(titleInput, /.*/, 3, "Title must be at least 3 characters long.");
    });

    destinationInput.addEventListener('keyup', function () {
        validateField(destinationInput, /^[A-Za-z\s]+$/, 3, "Destination must be at least 3 characters long and contain only letters.");
    });
});
