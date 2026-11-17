/*
Name: Ethan Moreta
Date: November 16, 2026
Description: Watch Progress Tracker for the MultiWatch dashboard.
This script uses helper functions to validate episode counts and calculate progress.
*/

// Run checkProgress when the button is clicked
var checkButton = document.getElementById("check-progress");
checkButton.onclick = checkProgress;

// Checks whether the episode counts entered by the user are valid.
// Parameters: episodesWatched and totalEpisodes - the episode counts entered by the user.
// Returns an error message if the inputs are invalid, otherwise returns an empty string.
function getEpisodeValidationMessage(episodesWatched, totalEpisodes) {

    // Make sure both fields have values
    if (episodesWatched.trim() === "" || totalEpisodes.trim() === "") {
        return "Please enter both episode counts.";
    }

    // Convert the inputs into numbers
    var watched = Number(episodesWatched);
    var total = Number(totalEpisodes);

    // Check that both inputs are valid numbers
    if (!Number.isFinite(watched) || !Number.isFinite(total) || watched < 0 || total <= 0) {
        return "Please enter valid episode counts. The total number of episodes must be greater than zero.";
    }

    // Watched episodes cannot be higher than the total
    if (watched > total) {
        return "Episodes watched cannot be more than the total number of episodes.";
    }

    return "";
}

// Calculates the percentage of episodes watched.
// Parameters: episodesWatched and totalEpisodes - the episode counts.
// Returns the rounded percentage completed.
function calculateProgress(episodesWatched, totalEpisodes) {
    var progress = (episodesWatched / totalEpisodes) * 100;
    return Math.round(progress);
}

// Main function that checks the inputs and updates the progress tracker.
function checkProgress() {

    // Get the show name
    var showName = document.getElementById("progress-show").value;

    // Get the episode counts
    var episodesWatchedInput = document.getElementById("episodes-watched").value;
    var totalEpisodesInput = document.getElementById("total-episodes").value;

    // Convert the episode counts into numbers
    var episodesWatched = Number(episodesWatchedInput);
    var totalEpisodes = Number(totalEpisodesInput);

    var message = document.getElementById("progress-message");
    var progressBarWrap = document.getElementById("progress-bar-wrap");
    var progressBar = document.getElementById("progress-bar");

    // Clear the last result before checking new input
    message.style.color = "#8b1e1e";
    progressBarWrap.style.display = "none";

    // Show name has to be filled in
    if (showName.trim() === "") {
        message.textContent = "Please enter a show name.";
        return;
    }

    // Check whether the episode counts are valid
    var validationMessage = getEpisodeValidationMessage(
        episodesWatchedInput,
        totalEpisodesInput
    );

    if (validationMessage !== "") {
        message.textContent = validationMessage;
        return;
    }

    // Calculate the percentage of the show completed
    var progress = calculateProgress(episodesWatched, totalEpisodes);

    // Display the progress result
    message.style.color = "#333344";
    message.textContent = showName + " is " + progress + "% complete (" + episodesWatched + " of " + totalEpisodes + " episodes).";

    // Fill the bar to match the percentage
    progressBar.style.width = progress + "%";
    progressBarWrap.style.display = "block";
}
