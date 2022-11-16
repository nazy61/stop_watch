let tens = 0;
let seconds = 0;
let minutes = 0;

let tensNode = document.getElementById("tens");
let secondsNode = document.getElementById("seconds");
let minutesNode = document.getElementById("minutes");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let interval;

startButton.onclick = () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
};

stopButton.onclick = () => {
  clearInterval(interval);
};

resetButton.onclick = () => {
  clearInterval(interval);
  tens = 0;
  seconds = 0;
  minutes = 0;
  tensNode.innerHTML = "00";
  secondsNode.innerHTML = "00";
  minutesNode.innerHTML = "00";
};

function startTimer() {
  tens++;
  if (tens < 10) {
    tensNode.innerHTML = "0" + tens;
  } else {
    tensNode.innerHTML = tens;
  }

  if (tens == 100) {
    tens = 0;
    seconds++;
    tensNode.innerHTML = "00";
  }

  if (seconds < 10) {
    secondsNode.innerHTML = "0" + seconds;
  } else {
    secondsNode.innerHTML = seconds;
  }

  if (seconds == 60) {
    seconds = 0;
    minutes++;
    secondsNode.innerHTML = "00";
  }

  if (minutes < 10) {
    minutesNode.innerHTML = "0" + minutes;
  } else {
    minutesNode.innerHTML = minutes;
  }
}
