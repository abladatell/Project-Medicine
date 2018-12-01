$(document).ready(function() {

  $("body, html").css({
    "margin" : "0px",
    "padding" : "0px",
    "background-color" : "#DCDCDC"
  });

  $("#myheader").css({
    "width" : "100%",
    "height" : "70px",
    "background-color" : 	"#383838",
  });

  $("body").append("<div id='navigation'></div>");
  $("body").append("<div id='contentbackground'></div>");

  $("#navigation").css({
    "width" : "100%",
    "height" : "50px",
    "float" : "left",
    "background-color" : "#DCDCDC",
    "border-bottom" : "1px #696969 solid"
  });

  $("#contentbackground").css({
    "width" : "100%",
    "height" : "600px",
    "float" : "left"
  });

  $("#myheader").append("<div class='frame' id='headercontent' class='tempcolor'></div>");
  $("#navigation").append("<div class='frame' id='navigationcontent'></div>");
  $("#contentbackground").append("<div class='frame' id='schedule'></div>");

  $(".frame").css({
    "width" : "1160px",
    "height" : "100%",
    "margin-left" : "auto",
    "margin-right" : "auto",
    "padding-left" : "20px",
    "padding-right" : "20px"
  });

  $(".tempcolor").css("background-color", "green");

  $("#headercontent").css({
    "padding-top" : "10px",
    "padding-bottom" : "10px"
  });


  $("#headercontent").append("<img id='logoimg' src='https://dummyimage.com/50x50/000/fff' alt='logo'>");
  $("#headercontent").append("<span id='title'>myMedicationApp</span>");
  $("#headercontent").append("<span class='headerwelcome'>User!</span>");
  $("#headercontent").append("<span class='headerwelcome'>Welcome </span>");

  $("#logoimg").css({
    "display" : "block",
    "margin-bottom": "5px",
    "float" : "left"
  });

  $("#title").css({
    "font-size" : "2em",
    "color" : "white",
    "font-family" : "Fredericka the Great, cursive",
    "display" : "block",
    "margin-top": "5px",
    "margin-left" : "10px",
    "margin-bottom": "5px",
    "float" : "left"
  });

  $(".headerwelcome").css({
    "font-size" : "1.8em",
    "color" : "white",
    "font-family" : "Fredericka the Great, cursive",
    "display" : "block",
    "margin-top": "5px",
    "margin-left" : "10px",
    "margin-bottom": "20px",
    "float" : "right"
  });

  $("#navigationcontent").append("<button class='buttons' id='add'>Add Medication</button>");
  $("#navigationcontent").append("<button class='buttons' id='delete'>Delete Medication</button>");
  $("#navigationcontent").append("<span id='logout' onclick='logOut()'>Logout</span>");



  $(".buttons").css({
    "font-family" : "Open Sans, sans-serif",
    "margin-right" : "20px",
    "font-size" : "1.3em",
    "margin-top" : "10px"
  });

  $("#logout").css({
    "font-family" : "Open Sans, sans-serif",
    "font-size" : "1.3em",
    "float" : "right",
    "margin-top" : "10px"
  });

  $("#schedule").append("<div id='date'></div>");
  $("#schedule").append("<div id='schedule_list'></div>");

  $("#date").css({
    "width" : "100%",
    "height" : "9%",
  })

  $("#schedule_list").css({
    "width" : "100%",
    "height" : "91%",
    "background-color" : "#C8C8C8",
    "border-top" : "2px #696969 solid "
  })


  var todaydate = new Date(); //Initialize default date, which is today.

  var themonth = ['January', 'February', 'March', 'April', 'May', 'June',
   'July', 'August', 'September', 'October', 'November', 'December'];

  function myMonth() {
    if (todaydate.getMonth() == 0) {
      return themonth[0];
    } else if (todaydate.getMonth() == 1) {
      return themonth[1];
    } else if (todaydate.getMonth() == 2) {
      return themonth[2];
    } else if (todaydate.getMonth() == 3) {
      return themonth[3];
    } else if (todaydate.getMonth() == 4) {
      return themonth[4];
    } else if (todaydate.getMonth() == 5) {
      return themonth[5];
    } else if (todaydate.getMonth() == 6) {
      return themonth[6];
    } else if (todaydate.getMonth() == 7) {
      return themonth[7];
    } else if (todaydate.getMonth() == 8) {
      return themonth[8];
    } else if (todaydate.getMonth() == 9) {
      return themonth[9];
    } else if (todaydate.getMonth() == 10) {
      return themonth[10];
    } else {
      return themonth[11];
    }
  }

  var thedays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
   'Thursday', 'Friday', 'Saturday', 'Sunday'];

  function myDay() {
    if (todaydate.getDay() == 0) {
      return thedays[0];
    } else if (todaydate.getDay() == 1) {
      return thedays[1];
    } else if (todaydate.getDay() == 2) {
      return thedays[2];
    } else if (todaydate.getDay() == 3) {
      return thedays[3];
    } else if (todaydate.getDay() == 4) {
      return thedays[4];
    } else if (todaydate.getDay() == 5) {
      return thedays[5];
    } else {
      return thedays[6];
    }
  }


  $("#date").append("<span id='thedate'>" + myDay()
    + ", " + myMonth() + " " + todaydate.getDate()
    + ", " + todaydate.getFullYear() + "</span>");

  $("#date").css({
    "font-family" : "Open Sans, sans-serif",
    "font-size" : "1.3em",
    "padding-top" : "15px",
    "text-align" : "center",
    "font-weight" : "bold"
  });


  $("#date").append("<img id='left' class='dateicon' src='./images/left-arrow.svg'>");
  $("#date").append("<img id='right' class='dateicon' src='./images/right-arrow.svg'>");

  $(".dateicon").css({
    "height" : "50px",
    "width" : "50px",
    "margin-left" : "20px",
    "margin-right" : "20px",
    "margin-top" : "-10px"
  });

  $("#left").css({
    "float" : "left"
  });

  $("#right").css({
    "float" : "right"
  });

  function expandDay(theDate) {
    if (theDate == "Sun") {
      return thedays[0];
    } else if (theDate == "Mon") {
      return thedays[1];
    } else if (theDate == "Tue") {
      return thedays[2];
    } else if (theDate == "Wed") {
      return thedays[3];
    } else if (theDate == "Thu") {
      return thedays[4];
    } else if (theDate == "Fri") {
      return thedays[5];
    } else {
      return thedays[6];
    }
  }

  function expandMonth(theMonth) {
    if (theMonth == "Jan") {
      return themonth[0];
    } else if (theMonth == "Feb") {
      return themonth[1];
    } else if (theMonth == "Mar") {
      return themonth[2];
    } else if (theMonth == "Apr") {
      return themonth[3];
    } else if (theMonth == "May") {
      return themonth[4];
    } else if (theMonth == "Jun") {
      return themonth[5];
    } else if (theMonth == "Jul") {
      return themonth[6];
    } else if (theMonth == "Aug") {
      return themonth[7];
    } else if (theMonth == "Sep") {
      return themonth[8];
    } else if (theMonth == "Oct") {
      return themonth[9];
    } else if (theMonth == "Nov") {
      return themonth[10];
    } else {
      return themonth[11];
    }
  }

  $("#left").on("click", function(){
    var milliseconds = todaydate.setDate(todaydate.getDate() - 1);
    var someDate = new Date(milliseconds);
    var dayOfWeek = someDate.toString().substring(0, 3);
    var monthExpanded = someDate.toString().substring(4, 7);
    var previousDay = someDate.toString().substring(8, 15);
    $("#thedate").empty();
    $("#thedate").append(expandDay(dayOfWeek) + ", " + expandMonth(monthExpanded)
      + " " + previousDay);
  });

  $("#right").on("click", function(){
    var milliseconds = todaydate.setDate(todaydate.getDate() + 1);
    var someDate = new Date(milliseconds);
    var dayOfWeek = someDate.toString().substring(0, 3);
    var monthExpanded = someDate.toString().substring(4, 7);
    var nextDay = someDate.toString().substring(8, 15);
    $("#thedate").empty();
    $("#thedate").append(expandDay(dayOfWeek) + ", " + expandMonth(monthExpanded)
      + " " + nextDay);
  });

  $("body").append("<div id='popupcover'></div>");
  $("body").append("<div id='popup'></div>");
  $("#popup").append("<div id='cancelicon'></div>");

  $("#popupcover").css({
    "width" : "100%",
    "height" : "100%",
    "position" : "absolute",
    "background-color" : "rgba(0, 0, 0, 0.5)",
    "top" : "0",
    "left" : "0",
    "z-index" : "10",
    "display" : "none"
  });

  $("#popup").css({
    "width" : "800px",
    "height": "550px",
    "background-color" : "white",
    "display" : "none",
    "margin" : "0 auto",
    "z-index" : "11",
    "top" : "5%",
    "left" : "20%",
    "right" : "20%",
    "position" : "absolute"
  });

  $("#cancelicon").css({
    "z-index" : "12",
    "position" : "absolute",
    "background-color" : "red",
    "border-radius" : "50%",
    "top" : "-3%",
    "width" : "60px",
    "height" : "60px",
    "display" : "none",
    "left" : "96%"
  });

  $("#cancelicon").append("<img id='cancel' src='./images/cancel.svg'>");

  $("#cancel").css({
    "width" : "50%",
    "height" : "50%",
    "display" : "block",
    "margin-top" : "15px",
    "margin-left" : "auto",
    "margin-right" : "auto"
  });

  $("#add").on("click", function(){
    $("#popupcover").fadeIn("slow");
    $("#popup").fadeIn("slow");
    $("#cancelicon").fadeIn("slow");
  });

  $("#popupcover, #cancelicon").on("click", function(){
    $("#popupcover").fadeOut("slow");
    $("#popup").fadeOut("slow");
    $("#cancelicon").fadeOut("slow");
  });

  $("#popup").append("<form id='popupform' onsubmit='getValues'>" +
  "</form>");
  $("#popupform").append("<div id='container1'></div>");
  $("#container1").append("<span id='name'>Name of Medicine: <input id='inputName' class='textfield' type='text' name='inputName'></span><br><br>");
  $("#container1").append("<span id='day'>How many times a day?</span><br><br>");
  $("#container1").append("<span id='notes'>Additional Notes: </span> <br><br>");

  for (i = 3; i >= 1; i--){
    $("#day").after("<input type='radio' id='day" + i + "'><label for='day" + i + "'>" + i + "</label> ");
  }

  $("#until").append("<input class='textfield' type='text' id='datepicker' placeholder='yyyymmdd'>");
  $("#notes").append("<br><textarea id='fieldbox' rows='4' cols='70'></textarea>");

  $("#container1").append("<div id='buttons'><input class='textfield' id='submitbutton' type='submit'> "
    + "<input class='textfield' type='button' id='cancelbutton' value='Cancel'></div>");

  $("#container1").css({
    "padding-left" : "10%",
    "padding-right" : "20%",
    "padding-top" : "10%",
    "font-size" : "1.3em",
    "font-family" : "Open Sans, sans-serif"
  });

  $(".textfield").css({
    "font-size" : "1em"
  });


  $("#submitbutton").on("click", function(){

    var id = sessionStorage.getItem("uid");

    var entry = firebase.database().ref().child('medications/' + id).push();
    var entry2 = firebase.database().ref('medications/' + id).push().child('additional-notes');

    var myMedName = $('#inputName').val();
    var myNotes = $('#fieldbox').val();

    var myTimeStamp = Date.now();
    console.log(myTimeStamp);

    entry.update({
      "medication" : myMedName,
      "additional-notes" : myNotes,
      "timestamp" : myTimeStamp
    });

    window.alert("Working!");

  });

});
