$(document).ready(function() {
  $("body, html").css({
    "margin" : "0px",
    "padding" : "0px",
    "background-color" : "#DCDCDC"
  });

  $("#myheader").css({
    "width" : "100%",
    "height" : "100px",
    "background-color" : 	"#383838",
  });

  $("body").append("<div id='navigation'></div>");
  $("body").append("<div id='contentbackground'></div>");

  $("#navigation").css({
    "width" : "100%",
    "height" : "60px",
    "float" : "left",
    "background-color" : "#DCDCDC",
    "border-bottom" : "1px #696969 solid"
  });

  $("#contentbackground").css({
    "width" : "100%",
    "height" : "750px",
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


  $("#headercontent").append("<img id='logoimg' src='https://dummyimage.com/60x60/000/fff' alt='logo'>");
  $("#headercontent").append("<span id='title'>myMedicationApp</span>");
  $("#headercontent").append("<span class='headerwelcome'>User!</span>");
  $("#headercontent").append("<span class='headerwelcome'>Welcome </span>");

  $("#logoimg").css({
    "font-size" : "2em",
    "display" : "block",
    "margin-top": "10px",
    "margin-bottom": "20px",
    "float" : "left"
  });

  $("#title").css({
    "font-size" : "2em",
    "color" : "white",
    "font-family" : "Fredericka the Great, cursive",
    "display" : "block",
    "margin-top": "20px",
    "margin-left" : "10px",
    "margin-bottom": "20px",
    "float" : "left"
  });

  $(".headerwelcome").css({
    "font-size" : "1.8em",
    "color" : "white",
    "font-family" : "Fredericka the Great, cursive",
    "display" : "block",
    "margin-top": "20px",
    "margin-left" : "10px",
    "margin-bottom": "20px",
    "float" : "right"
  });

  $("#navigationcontent").append("<button class='buttons' id='add'>Add Medication</button>");
  $("#navigationcontent").append("<button class='buttons' id='delete'>Delete</button>");
  $("#navigationcontent").append("<span id='logout'>Logout</span>");

  $(".buttons").css({
    "font-family" : "Open Sans, sans-serif",
    "margin-right" : "20px",
    "font-size" : "1.5em",
    "margin-top" : "10px"
  });

  $("#logout").css({
    "font-family" : "Open Sans, sans-serif",
    "font-size" : "1.5em",
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

  var todaydate = new Date();

  function myMonth() {
    if (todaydate.getMonth() == 0) {
      return "January";
    } else if (todaydate.getMonth() == 1) {
      return "February";
    } else if (todaydate.getMonth() == 2) {
      return "March";
    } else if (todaydate.getMonth() == 3) {
      return "April";
    } else if (todaydate.getMonth() == 4) {
      return "May";
    } else if (todaydate.getMonth() == 5) {
      return "June";
    } else if (todaydate.getMonth() == 6) {
      return "July";
    } else if (todaydate.getMonth() == 7) {
      return "August";
    } else if (todaydate.getMonth() == 8) {
      return "September";
    } else if (todaydate.getMonth() == 9) {
      return "October";
    } else if (todaydate.getMonth() == 10) {
      return "November";
    } else {
      return "December";
    }
  }

  function myDay() {
    if (todaydate.getDay() == 0) {
      return "Sunday";
    } else if (todaydate.getDay() == 1) {
      return "Monday";
    } else if (todaydate.getDay() == 2) {
      return "Tuesday";
    } else if (todaydate.getDay() == 3) {
      return "Wednesday";
    } else if (todaydate.getDay() == 4) {
      return "Thursday";
    } else if (todaydate.getDay() == 5) {
      return "Friday";
    } else {
      return "Saturday";
    }
  }

  $("#date").append(myDay() + ", ");
  $("#date").append(myMonth() + " ");
  $("#date").append(todaydate.getDate() + ", ");
  $("#date").append(todaydate.getFullYear());

  $("#date").css({
    "font-family" : "Open Sans, sans-serif",
    "font-size" : "1.5em",
    "padding-top" : "15px",
    "text-align" : "center",
    "font-weight" : "bold"
  });

  $("#date").append("<img class='dateicon' id='lefticon' src='./images/left-arrow.svg'>");
  $("#date").append("<img class='dateicon' id='righticon' src='./images/right-arrow.svg'>");

  $(".dateicon").css({
    "height" : "50px",
    "width" : "50px",
    "margin-left" : "20px",
    "margin-right" : "20px"
  });

  $("#lefticon").css("float", "left");
  $("#righticon").css("float", "right");



  $("body").append("<div id='popupcover'></div>");
  $("body").append("<div id='popup'></div>");

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
    "width" : "950px",
    "height": "700px",
    "background-color" : "white",
    "display" : "none",
    "margin" : "0 auto",
    "z-index" : "11",
    "top" : "22%",
    "left" : "20%",
    "right" : "20%",
    "position" : "absolute"
  });

  $("#add").on("click", function(){
    $("#popupcover").fadeIn("slow");
    $("#popup").fadeIn("slow");
  });

  $("#popupcover").on("click", function(){
    $("#popupcover").fadeOut("slow");
    $("#popup").fadeOut("slow");
  });


});
