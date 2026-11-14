/*
  Name: Ethan Moreta
  Description: Decision process for updating watch progress on the Dashboard.
  The script follows three yes-or-no checks and then shows what should happen.
*/

// Run checkDecision when the button is clicked
var decisionButton = document.getElementById("check-decision");
decisionButton.onclick = checkDecision;

function checkDecision() {
    // String variable for the show the user selected
    var showName = document.getElementById("decision-show").value;

    // The three answers from the decision tree
    var alreadyTracked = document.getElementById("already-tracked").value;
    var newEpisode = document.getElementById("new-episode").value;
    var moreEpisodes = document.getElementById("more-episodes").value;

    var message = document.getElementById("decision-message");

    if (showName.trim() === "") {
        message.style.color = "#8b1e1e";
        message.textContent = "Please enter a show name.";
        return;
    }

    message.style.color = "#333344";

    // Decision Node 1: Is the show already being tracked?
    if (alreadyTracked === "no") {
        message.textContent = showName + " is not on the Dashboard yet, so it was added.";
    }
    else {
        // Decision Node 2: Has the user marked a new episode as watched?
        if (newEpisode === "no") {
            message.textContent = "No new episode was marked, so the current progress for " + showName + " stays the same.";
        }
        else {
            // Decision Node 3: Are there more episodes available?
            if (moreEpisodes === "yes") {
                message.textContent = showName + " still has episodes left, so progress was updated to the next episode.";
            }
            else {
                message.textContent = showName + " has no episodes left, so the show was marked as completed.";
            }
        }
    }
}
