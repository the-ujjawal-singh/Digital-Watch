function updateClock() {
    // Get the current time
    const now = new Date();

    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format hours, minutes, and seconds to always be 2 digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time
    const timeDisplay = document.getElementById('time');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every 1000ms (1 second)
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
