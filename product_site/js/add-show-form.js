/*
Name: Ethan Moreta
Date: November 23, 2026
Description: Gives real-time feedback on the Add a Show form using
the focus, blur, and submit events. A valid submit adds the show to My Shows.
*/

// Select the form elements
var addShowForm = document.getElementById("add-show-form");
var showTitle = document.getElementById("show-title");
var showService = document.getElementById("service");
var showsTableBody = document.querySelector(".shows-table tbody");
var titleMessage = document.getElementById("title-message");
var formMessage = document.getElementById("form-message");

// Displays a message in an element.
// Parameters: element, text, and className (which sets the color).
function showMessage(element, text, className) {
    element.textContent = text;
    element.className = className;
}

// Checks the show title.
// Returns an error message, or an empty string if the title is valid.
function getTitleError(title) {
    var length = title.trim().length;

    if (length === 0) {
        return "The show title cannot be blank.";
    }
    if (length < 2 || length > 50) {
        return "The title must be 2 to 50 characters.";
    }
    return "";
}

// Focus: tell the user how to enter correct input
function onTitleFocus() {
    showMessage(formMessage, "", "");
    showMessage(titleMessage, "Enter 2 to 50 characters. Cannot be blank.", "hint-message");
}

// Blur: check the input. Returns true if the title is valid.
function checkTitle() {
    var error = getTitleError(showTitle.value);

    if (error !== "") {
        showMessage(titleMessage, error, "error-message");
        return false;
    }

    showMessage(titleMessage, "Looks good!", "success-message");
    return true;
}

// Adds a new row to the My Shows table.
// Parameters: title and service - the text for the two cells.
function addShowRow(title, service) {
    var row = showsTableBody.insertRow();
    row.insertCell().textContent = title;
    row.insertCell().textContent = service;
}

// Submit: stop the page from reloading and confirm the response
function onFormSubmit(event) {
    event.preventDefault();

    if (!checkTitle()) {
        showMessage(formMessage, "Please fix the error above and try again.", "error-message");
        return;
    }

    // Use the option's text (like "HBO Max") so it matches the table
    var serviceName = showService.options[showService.selectedIndex].text;
    addShowRow(showTitle.value.trim(), serviceName);

    // Show all services so the new show is visible (uses show-filter.js)
    serviceFilter.value = "All";
    onServiceChange();

    // Leave the field before resetting so blur does not check an empty title
    showTitle.blur();
    addShowForm.reset();
    showMessage(titleMessage, "", "");
    showMessage(formMessage, "Your responses were successfully recorded!", "success-message");
}

// Assign the functions as event listeners
showTitle.addEventListener("focus", onTitleFocus);
showTitle.addEventListener("blur", checkTitle);
addShowForm.addEventListener("submit", onFormSubmit);
