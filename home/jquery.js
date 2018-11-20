$(document).ready(function() {
  $("body, html").css({
    "margin" : "0px",
    "padding" : "0px",
    "background" : "url(./images/landscape.jpg)",
    "background-size" : "cover"
  });

  $("#overlay").css({
    "position" : "absolute",
    "width" : "100%",
    "height" : "100%",
    "background" : "rgba(0, 0, 0, 0.5)",
    "background-size" : "cover"
  });

  $("#mainbox").css({
    "width" : "1000px",
    "height" : "600px",
    "background-color" : "#FFFFFF",
    "margin-left" : "auto",
    "margin-right" : "auto",
    "margin-top" : "100px",
    "border-radius" : "3%"
  });

  $("#mainbox").append("<div id='leftside'></div>");
  $("#mainbox").append("<div id='rightside'></div>");

  $("#leftside, #rightside").css({
    "height" : "100%",
    "float" : "left",
    "border-radius" : "3%"
  });

  $("#leftside").css({
    "width" : "60%"
  });

  $("#rightside").css({
    "width" : "40%",
    "background-color" : "#F5F5F5"
  });

  $("#leftside").append("<div id='topleft'></div>");
  $("#leftside").append("<div id='bottomleft'></div>");

  $("#topleft, #bottomleft").css({
    "width" : "100%",
    "float" : "left"
  });

  $("#topleft").css({
    "height" : "20%",
    "text-align" : "center",
    "margin-top" : "0.5em",
  });

  $("#bottomleft").css({
    "height" : "80%"
  });

  $("#rightside").append("<button id='add'>Add Medication</button> <br><br>");
  $("#rightside").append("<button id='delete'>Delete</button>");

  $("#add, #delete").css({
    "font-size" : "2.5em",
    "padding" : "0.5em",
    "margin-left" : "auto",
    "margin-right" : "auto",
    "display" : "block"
  });

  $("#add").css("margin-top", "50%");

  $("#topleft").append("<h1>Today's Medication</h1>");

  $("h1").css({
    "margin-top" : "20px",
    "margin-bottom" : "10px"
  });

  $("#bottomleft").append("<div id='todaylist'></div>");

  $("#todaylist").css({
    "margin-left" : "auto",
    "margin-right" : "auto",
    "display" : "block",
    "background-color" : "#E0E0E0",
    "width" : "90%",
    "height" : "90%",
    "border-radius" : "10%",
    "border-color" : "grey",
    "border-style" : "solid",
    "border-width" : "5px"
  });

  $("*").css("font-family" , "Quicksand, sans-serif");

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

  $("#topleft").append("<div id='leftarrow'></div>");
  $("#topleft").append("<div id='dateselect'></div>");
  $("#topleft").append("<div id='rightarrow'></div>");

  $("#leftarrow").append("<img class='dateicon' id='lefticon' src='./images/left-arrow.svg'>");
  $("#dateselect").append(myMonth() + " ");
  $("#dateselect").append(todaydate.getDate() + ", ");
  $("#dateselect").append(todaydate.getFullYear());
  $("#rightarrow").append("<img class='dateicon' id='righticon' src='./images/right-arrow.svg'>");

  $("#leftarrow, #dateselect, #rightarrow").css({
    "float" : "left",
    "display" : "block"
  });

  $("#dateselect").css({
    "width" : "40%",
    "font-size" : "1.5em"
  });

  $("#leftarrow, #rightarrow").css({
    "width" : "30%",
    "float" : "left"
  });

  $(".dateicon").css({
    "height" : "40px",
    "width" : "40px"
  });

  $("#rightside").append("<button id='logout'>Log out </button>");
  $("#logout").css({
    "position" : "absolute",

  });

});
