var countdownInterval;
var countdownTime;

// Function to start the countdown
function startCountdown() {
  var hoursInput = parseInt(document.getElementById("hoursInput").value);
  var minutesInput = parseInt(document.getElementById("minutesInput").value);
  var secondsInput = parseInt(document.getElementById("secondsInput").value);
  var millisecondsInput = parseInt(document.getElementById("millisecondsInput").value);

  if (isNaN(hoursInput) && isNaN(minutesInput) && isNaN(secondsInput) && isNaN(millisecondsInput)) {
    alert("Please set a valid time!");
    return;
  }

  var totalMilliseconds = (isNaN(hoursInput) ? 0 : hoursInput * 3600000) +
    (isNaN(minutesInput) ? 0 : minutesInput * 60000) +
    (isNaN(secondsInput) ? 0 : secondsInput * 1000) +
    (isNaN(millisecondsInput) ? 0 : millisecondsInput);

  if (totalMilliseconds <= 0) {
    alert("Please set a valid time!");
    return;
  }

  countdownTime = totalMilliseconds;
  countdownInterval = setInterval(updateCountdown, 10);
}

// Function to update the countdown display
function updateCountdown() {
  var countdown = document.getElementById("countdown");

  var hours = Math.floor(countdownTime / 3600000);
  var minutes = Math.floor((countdownTime % 3600000) / 60000);
  var seconds = Math.floor((countdownTime % 60000) / 1000);
  var milliseconds = countdownTime % 1000;

  countdown.innerHTML = hours.toString().padStart(2, '0') + ":" +
    minutes.toString().padStart(2, '0') + ":" +
    seconds.toString().padStart(2, '0') + ":" +
    milliseconds.toString().padStart(3, '0');

  if (countdownTime <= 0) {
    clearInterval(countdownInterval);
    countdown.innerHTML = "Time's up!";
  } else {
    countdownTime -= 10;
  }
}

// Function to stop the countdown
function stopCountdown() {
  clearInterval(countdownInterval);
  countdownTime = 0;
  updateCountdown();
}

// Function to reset the countdown
function resetCountdown() {
  clearInterval(countdownInterval);
  countdownTime = 0;
  document.getElementById("hoursInput").value = "";
  document.getElementById("minutesInput").value = "";
  document.getElementById("secondsInput").value = "";
  document.getElementById("millisecondsInput").value = "";
  document.getElementById("countdown").innerHTML = "";
}

// Event listeners for the start, stop, and reset buttons
var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startCountdown);

var stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener("click", stopCountdown);

var resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resetCountdown);
