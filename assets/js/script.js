var currentDayEl = $("#currentDay");

date = moment().format("dddd, MMMM Do YYYY");
currentDayEl.text(date);
// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function () {
//     // dateTime = moment().format("MMMM Do YYYY at h:mm:ss");

//   }, 1000);
// }
// setTime();
