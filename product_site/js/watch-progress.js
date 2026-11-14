/*
  Name: Ethan Moreta
  Description: Watch Progress Tracker for the MultiWatch dashboard.
  The user enters a show name and episode counts, and this script
  checks the input, calculates the percent finished, and updates the page.
*/

// Run checkProgress when the button is clicked
var checkButton = document.getElementById("check-progress");
checkButton.onclick = checkProgress;

function checkProgress() {
    // String variable for the show name
    var showName = document.getElementById("progress-show").value;

    // Number variables for the episode counts
    var episodesWatched = Number(document.getElementById("episodes-watched").value);
    var totalEpisodes = Number(document.getElementById("total-episodes").value);

    var message = document.getElementById("progress-message");
    var progressBarWrap = document.getElementById("progress-bar-wrap");
    var progressBar = document.getElementById("progress-bar");

    // Clear the last result before checking the new input
    message.style.color = "#8b1e1e";
    progressBarWrap.style.display = "none";

    // Show name has to be filled in
    if (showName.trim() === "") {
        message.textContent = "Please enter a show name.";
        return;
    }

    // Episode counts have to be real numbers, and the total has to be greater than zero
    if (isNaN(episodesWatched) || isNaN(totalEpisodes) || episodesWatched < 0 || totalEpisodes <= 0) {
        message.textContent = "Please enter valid episode counts. The total number of episodes must be greater than zero.";
        return;
    }

    // Watched episodes cannot be higher than the total
    if (episodesWatched > totalEpisodes) {
        message.textContent = "Episodes watched cannot be more than the total number of episodes.";
        return;
    }

    // Percentage of the show that is finished
    var progress = (episodesWatched / totalEpisodes) * 100;
    progress = Math.round(progress);

    message.style.color = "#333344";
    message.textContent = showName + " is " + progress + "% complete (" + episodesWatched + " of " + totalEpisodes + " episodes).";

    // Fill the bar to match the percentage
    progressBar.style.width = progress + "%";
    progressBarWrap.style.display = "block";
}
