var timeinput;
var timedisp;
var ogtime;
var timeleft;
var count = 0;
var overtime = 0;

function asktime() {
  ogtime = prompt("How many seconds to complete quiz? \nDefault is 300\nTimer starts on exit!");
  timeinput = ogtime;
  if (timeinput == "" || timeinput == null) {
    timeinput = 300;
    timedisp = timeinput;
  }
}

function timer() {
  timeleft = timeinput - count;
  if (count >= timeinput) {
    timeleft = "0! </br> extra time: " + overtime;
    overtime = overtime + 1;
  }
  count = count + 1;
  document.getElementById("timeText").innerHTML = timeleft;
}

function starttime() {
  asktime();
  setInterval(timer, 1000);
  startbutton.parentNode.removeChild(startbutton);
}
