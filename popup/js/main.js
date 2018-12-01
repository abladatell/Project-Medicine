
var nameOfMedicine = document.getElementById('medicineName').value;
var date = document.getElementById('datePicker').value;
var notes = document.getElementById('additionalNotes').value;

var dayValue1 = $("input[id='day1']:checked").val();
var dayValue2 = $("input[id='day2']:checked").val();
var dayValue3 = $("input[id='day3']:checked").val();

var weekValue1 = $("input[id='week1']:checked").val();
var weekValue2 = $("input[id='week2']:checked").val();
var weekValue3 = $("input[id='week3']:checked").val();
var weekValue4 = $("input[id='week4']:checked").val();
var weekValue5 = $("input[id='week5']:checked").val();
var weekValue6 = $("input[id='week6']:checked").val();
var weekValue7 = $("input[id='week7']:checked").val();


function writeUserData() {
  console.log("hi from writeuserdata");
  if (dayValue1) {
    var submitDay = 1;
  } else if (dayValue2) {
    submitDay = 2;
  } else if (dayValue3) {
    submitDay = 3;
  }

  if (weekValue1) {
    var submitWeek = 1;
  } else if (weekValue2) {
    submitWeek = 2;
  } else if (weekValue3) {
    submitWeek = 3;
  } else if (weekValue4) {
    submitWeek = 4;
  } else if (weekValue5) {
    submitWeek = 5;
  } else if (weekValue6) {
    submitWeek = 6;
  } else if (weekValue7) {
    submitWeek = 7;
  }

  console.log("writing to database");
  firebase.database().ref('user/').set({
    medicine: nameOfMedicine,
    timesADay: submitDay,
    timesAWeek: submitWeek,
    dateUntil: date,
    additionalNotes: notes
  });
}


$(document).ready(function () {
  $(function () {
    $("#datepicker").datepicker();
  });

  $("input[type='submit']").click(function () {
    writeUserData();
  });

  $("input[id='close']").click(function () {
    close();
  });



});
