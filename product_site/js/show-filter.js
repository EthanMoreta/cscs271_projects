/*
Name: Ethan Moreta
Date: November 23, 2026
Description: Filters the My Shows table on the Dashboard by streaming service.
The filter runs when the user changes the service dropdown.
*/

// Step 1: Select the elements
var serviceFilter = document.getElementById("service-filter");
// .rows updates automatically when a new show is added to the table
var showRows = document.querySelector(".shows-table tbody").rows;
var filterMessage = document.getElementById("filter-message");

// Step 2: Define the code that runs when the event occurs
// Shows the rows that match the chosen service and hides the rest.
function onServiceChange() {
    var chosenService = serviceFilter.value;
    var visibleCount = 0;

    for (var i = 0; i < showRows.length; i++) {
        // The second cell in each row holds the streaming service
        var rowService = showRows[i].cells[1].textContent;

        if (chosenService === "All" || rowService === chosenService) {
            showRows[i].style.display = "";
            visibleCount++;
        } else {
            showRows[i].style.display = "none";
        }
    }

    if (visibleCount > 0) {
        filterMessage.className = "hint-message";
        filterMessage.textContent = "Shows displayed: " + visibleCount;
    } else {
        filterMessage.className = "error-message";
        filterMessage.textContent = "No shows found for this service. Try another one.";
    }
}

// Step 3: Assign the function as an event listener
serviceFilter.addEventListener("change", onServiceChange);
