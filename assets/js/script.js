//handle for currentday  display
var currentDayEl = $("#currentDay");
//get handle for save button
var saveButtonEl = $(".saveBtn");

//get current hour
const currentTime = moment().hour();
date = moment().format("dddd, MMMM Do YYYY");
currentDayEl.text(date);

//change color of textbox according to current time
changeColor();

//changecolor when hour changed
setInterval(() => {
  changeColor();
}, 60000);

//function to change color
function changeColor() {
  var textboxArray = $(".description");
  $.each(textboxArray, function (indexNum, value) {
    //console.log($(this).attr("id"));
    var schedulerHour = $(this).attr("id");
    console.log("schedular time", schedulerHour);
    console.log("current time", currentTime);

    if (currentTime > schedulerHour) {
      //assign class past
      $(value).addClass("past");
    } else if (currentTime == schedulerHour) {
      //assign class present
      $(value).addClass("present");
    } else if (currentTime < schedulerHour) {
      //assign class future
      $(value).addClass("future");
    }
  });
}

//function to save data

function saveData(event) {
  //get data from user when saved
  var id = $(event.target).closest(".row").find(".description").attr("id");
  var text = $(event.target).closest(".row").find(".description").val();

  //get local data if there is
  var data = JSON.parse(localStorage.getItem("data")) || [];

  //add user data to local data
  var newData = {
    id: id,
    text: text,
  };
  data.push(newData);

  // write back to local data
  localStorage.setItem("data", JSON.stringify(data));
}

saveButtonEl.on("click", saveData);

// var data = JSON.parse(localStorage.getItem("data")) || [];
// if (data.length > 0) {
//   data.forEach((datum) => {
//     var query = `[id="${datum.id}"]`; //"[id='" +datum.id+ "']"
//     $(query).val(datum.text);
//   });
// }
