/*
Name: Ethan Moreta
Date: November 16, 2026
Description: Decision process for updating watch progress on the Dashboard.
This script uses helper functions to validate input and generate a decision message.
*/

// Run checkDecision when the button is clicked
var decisionButton = document.getElementById("check-decision");
decisionButton.onclick = checkDecision;

// Checks whether the user entered a show name.
// Parameter: showName - the name entered by the user.
// Returns true if the name is valid, otherwise false.
function validateShowName(showName) {
    return showName.trim() !== "";
}

// Checks the user's answers and returns the correct decision message.
// Parameters: showName, alreadyTracked, newEpisode, and moreEpisodes.
// Returns a message explaining what should happen to the show.
function getDecisionMessage(showName, alreadyTracked, newEpisode, moreEpisodes) {

    // Decision Node 1: Is the show already being tracked?
    if (alreadyTracked === "no") {
        return showName + " is not on the Dashboard yet, so it was added.";
    }

    // Decision Node 2: Has the user marked a new episode as watched?
    if (newEpisode === "no") {
        return "No new episode was marked, so the current progress for " + showName + " stays the same.";
    }

    // Decision Node 3: Are there more episodes available?
    if (moreEpisodes === "yes") {
        return showName + " still has episodes left, so progress was updated to the next episode.";
    }

    return showName + " has no episodes left, so the show was marked as completed.";
}

// Main function that gets the user's answers and displays the result.
function checkDecision() {

    // Get the show name
    var showName = document.getElementById("decision-show").value;

    // Get the three answers from the decision tree
    var alreadyTracked = document.getElementById("already-tracked").value;
    var newEpisode = document.getElementById("new-episode").value;
    var moreEpisodes = document.getElementById("more-episodes").value;

    var message = document.getElementById("decision-message");

    // Check whether a show name was entered
    if (!validateShowName(showName)) {
        message.style.color = "#8b1e1e";
        message.textContent = "Please enter a show name.";
        return;
    }

    // Generate and display the decision result
    message.style.color = "#333344";
    message.textContent = getDecisionMessage(
        showName,
        alreadyTracked,
        newEpisode,
        moreEpisodes
    );
}
