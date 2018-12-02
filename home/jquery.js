$(document).ready(function() {

  $("body").append("<div id='navigation'></div>");
  $("body").append("<div id='contentbackground'></div>");

  $("#myheader").append("<div class='frame' id='headercontent' class='mobilecolor'></div>");
  $("#myheader").after("<div class='frame' id='welcomemobile'><span class='headerwelcome'>Welcome <span>User!</span></span></div>");
  $("#navigation").append("<div class='frame' id='navigationcontent'></div>");
  $("#contentbackground").append("<div class='frame' id='schedule'></div>");

  $("#headercontent").append("<img id='logoimg' src='https://dummyimage.com/50x50/000/fff' alt='logo'>");
  $("#headercontent").append("<span id='title'>myMedicationApp</span>");
  $("#headercontent").append("<span class='headerwelcome' id='theuser'>User!</span><img id='logoutmobile' src='./images/logout.svg'>");
  $("#headercontent").append("<span class='headerwelcome' id='welcomedefault'>Welcome </span>");

  $("#navigationcontent").append("<span class='buttonbox'><button class='buttons' id='add'>Add Medication</button></span>");
  $("#navigationcontent").append("<span class='buttonbox'><button class='buttons' id='delete'>Delete Medication</button></span>");
  $("#navigationcontent").append("<span id='logout' onclick='logOut()'>Sign out</span>");

  $("#schedule").append("<div id='date'></div>");
  $("#schedule").append("<div id='schedule_list'></div>");

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

  $("#date").append("<img class='left' id='leftdesktop' class='dateicon' src='./images/left-arrow.svg'>");
  $("#date").append("<img class='right' id='rightdesktop' class='dateicon' src='./images/right-arrow.svg'>");


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

  $(".left").on("click", function(){
    var milliseconds = todaydate.setDate(todaydate.getDate() - 1);
    var someDate = new Date(milliseconds);
    var dayOfWeek = someDate.toString().substring(0, 3);
    var monthExpanded = someDate.toString().substring(4, 7);
    var previousDay = someDate.toString().substring(8, 15);
    $("#thedate").empty();
    $("#thedate").append(expandDay(dayOfWeek) + ", " + expandMonth(monthExpanded)
      + " " + previousDay);
  });

  $(".right").on("click", function(){
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

  $("#cancelicon").append("<img id='cancel' src='./images/cancel.svg'>");

  $("#add").on("click", function(){
    $("#popupcover").fadeIn("slow");
    $("#popup").css("display", "block");
    $("#popup").fadeIn("slow");
    $("#cancelicon").fadeIn("slow");
  });

  $("#popup").append("<div id='popupformdiv'></div>");

  $("#popup").append("<form id='popupform' onsubmit='getValues'>"
    + "</form>");
  $("#popupform").append("<div id='container1'></div>");
  $("#container1").append("<div id='popupname'>Add Medication</div><br>");
  $("#container1").append("<span id='name'>Name of Medicine: <input id='inputName' class='textfield' type='text' name='inputName'></span><br><br>");
  $("#container1").append("<span id='day'>How many times a day?</span><br><br>");
  $("#container1").append("<span id='notes'>Additional Notes: </span> <br><br>");

  for (i = 3; i >= 1; i--){
    $("#day").after("<input type='radio' name='dayName' id='day" + i + "'><label for='day" + i + "'>" + i + "</label> ");
  }

  $("#week").after("<input type='radio' name='weekName' id='week7'><label for='week7'>Daily</label>");

  for (i = 6; i >= 1; i--){
    $("#week").after("<input type='radio' name='weekName' id='week" + i + "'><label for='week" + i + "'>" + i + "</label>  ");
  }

  $("#until").append("<input class='textfield' type='text' id='datepicker' placeholder='yyyymmdd'>");
  $("#notes").append("<br><textarea id='fieldbox' rows='4' cols='70'></textarea>");

  $("#container1").append("<div id='buttons'><input class='textfield' id='submitbutton' type='submit'> "
    + "<input class='textfield' type='button' id='cancelbutton' value='Cancel'></div>");

  $("#popupcover, #cancelicon, #cancelbutton").on("click", function(){
    $("#popupcover").fadeOut("slow");
    $("#popup").fadeOut("slow");
    $("#cancelicon").fadeOut("slow");
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
