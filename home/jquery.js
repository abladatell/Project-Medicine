$(document).ready(function() {

  $("body").append("<div id='navigation'></div>");
  $("body").append("<div id='contentbackground'></div>");

  $("#myheader").append("<div class='frame' id='headercontent' class='mobilecolor'></div>");
  $("#myheader").after("<div class='frame' id='welcomemobile'><span class='headerwelcome'>Welcome <span id='theusermobile'>!</span></span></div>");
  $("#navigation").append("<div class='frame' id='navigationcontent'></div>");
  $("#contentbackground").append("<div class='frame' id='schedule'></div>");

  $("#headercontent").append("<img id='logoimg' src='../images/logo.png' alt='logo'>");
  $("#headercontent").append("<span id='title'>myMedicationApp</span>");
  $("#headercontent").append("<span class='headerwelcome' id='theuserdesktop'>!</span><img id='logoutmobile' onclick='logOut()' src='./images/logout.svg'>");
  $("#headercontent").append("<span class='headerwelcome' id='welcomedefault'>Welcome </span>");

  $("#navigationcontent").append("<span class='buttonbox'><button class='buttons' id='add'>Add Medication</button></span>");
  $("#navigationcontent").append("<span class='buttonbox'><button class='buttons' id='delete'>Delete Medication</button></span>");
  $("#navigationcontent").append("<span id='logout' onclick='logOut()'>Sign out</span>");

  $("#schedule").append("<div id='date'></div>");
  $("#schedule").append("<div id='schedule_list'></div>");
  $(".schedule_list").append("<ul id='myreminders'></ul>");

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

  $("#date").append("<span id='myremindertitle'>My Reminders</span>");

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

  $("#container1").append("<img class='left' id='leftdesktop' class='dateicon' src='./images/left-arrow.svg'>");
  $("#container1").append("<img class='right' id='rightdesktop' class='dateicon' src='./images/right-arrow.svg'>");
  $("#container1").append("<div id='popupname'>Add Medication for <br><span id='meddate'>" + myDay()
    + ", " + myMonth() + " " + checkNumber(todaydate.getDate())
    + ", " + todaydate.getFullYear() + "</span></div><br>");

  var thedatetoday = myDay().toString() + ", " + myMonth().toString()
  + " " + checkNumber(todaydate.getDate()).toString()
  + ", " + todaydate.getFullYear().toString();


  $("#container1").append("<div id='name'>Name of Medicine: <input id='inputName' class='textfield' type='text' name='inputName'></div><br>");
  $("#container1").append("<div id='dateentry'>Date: <input id='thedateentry' class='textfield' type='text' name='inputdate' size='35' value='"
    + thedatetoday + "'/></div><br>");
  $("#container1").append("<div id='addnotes'>Additional Notes: <br><textarea id='fieldbox' rows='4' cols='70'></textarea></div> <br><br>");



  console.log(myDay().toString() + ", " + myMonth().toString() + " " + checkNumber(todaydate.getDate()).toString() + ", " + todaydate.getFullYear().toString());
  console.log(inputName.value);

  function checkNumber(num) {
    if (num < 10) {
      return "0" + num;
    }
  }

  // Left Button

  $(".left").on("click", function(){
    var milliseconds = todaydate.setDate(todaydate.getDate() - 1);
    var someDate = new Date(milliseconds);
    var dayOfWeek = someDate.toString().substring(0, 3);
    var monthExpanded = someDate.toString().substring(4, 7);
    var previousDay = someDate.toString().substring(8, 10);
    var previousYear = someDate.toString().substring(11, 15);

    $("#meddate").empty();
    $("#meddate").append(expandDay(dayOfWeek) + ", " + expandMonth(monthExpanded)
      + " " + previousDay + ", " + previousYear);

    document.getElementById("thedateentry").value = (expandDay(dayOfWeek)
      + ", " + expandMonth(monthExpanded)
      + " " + previousDay + ", " + previousYear);
  });

  //Right button

  $(".right").on("click", function(){
    var milliseconds = todaydate.setDate(todaydate.getDate() + 1);
    var someDate = new Date(milliseconds);
    var dayOfWeek = someDate.toString().substring(0, 3);
    var monthExpanded = someDate.toString().substring(4, 7);
    var nextDay = someDate.toString().substring(8, 10);
    var nextYear = someDate.toString().substring(11, 15);
    $("#meddate, .dateEntry").empty();
    $("#meddate, .dateEntry").append(expandDay(dayOfWeek) + ", " + expandMonth(monthExpanded)
      + " " + nextDay + ", " + nextYear);

    document.getElementById("thedateentry").value = (expandDay(dayOfWeek)
      + ", " + expandMonth(monthExpanded)
      + " " + nextDay + ", " + nextYear);
  });

  $("#container1").append("<div id='buttons'><input class='textfield' id='submitbutton' type='submit'> "
    + "<input class='textfield' type='button' id='cancelbutton' value='Cancel'></div>");

  $("#popupcover, #cancelicon, #cancelbutton").on("click", function(){
    $("#popupcover").fadeOut("slow");
    $("#popup").fadeOut("slow");
    $("#cancelicon").fadeOut("slow");
  });

  $("#submitbutton").on("click", function(){             //submit button click

    var id = sessionStorage.getItem("uid");

    var entry = firebase.database().ref().child('medications/' + id).push();
    var entry2 = firebase.database().ref('medications/' + id).push().child('additionalnotes');

    // Checks if medicine has a name, if not then wont allow input.
    var myMedName = $('#inputName').val();
    if (myMedName == "") {
      myMedName = null;
      window.alert("Input medicine name.");
    } else {
      //Checks if notes have any value in it
      //if not then makes it null and thus wont appear in database.
      var myNotes = $('#fieldbox').val();
      if (myNotes == "" ) {
        myNotes = null;
      }
      //Checks if medDate has any value in it
      //if not then makes it null and thus wont appear in database.
      var medDateTime = $("#thedateentry").val();
      if (medDateTime == "") {
        medDateTime = null;
      }

      var myTimeStamp = Date.now();

      entry.update({
        "medication" : myMedName,
        "additionalnotes" : myNotes,
        "timestamp" : myTimeStamp,
        "date" : medDateTime
      });

      //window.alert("You have submitted data to Firebase!");
    }
  });

  var id = sessionStorage.getItem("uid");
  var nameref = firebase.database().ref('user/' + id).child('name');

  nameref.on('value', function(e){
    var j = document.getElementById("theuserdesktop");
    var k = document.getElementById("theusermobile");
    j.innerHTML = e.val() + "!";
    k.innerHTML = e.val() + "!";
  });

  var medref = firebase.database().ref('medications/' + id);

  medref.on('value', gotData, errData);

  function gotData(data) {
    scheduleStore = [];
    var message = data.val();
    var keys = Object.keys(message);

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var medication = message[k].medication;
      scheduleDataStore(medication, keys[i]);
      var datetotakemeds = message[k].date;
      var additionalmessage = message[k].additionalnotes;

      //Will check if all fields are populated, and if not then it will
      //Delete the undefined sections.
      if (datetotakemeds == undefined){
        if (additionalmessage == undefined) {
          //If both fields are undefined print this
          $("#schedule_list").append("<li id='myreminder" + i + "' class='reminder'> <b>Medication:</b> "
            + medication + "<img class='deleteButton' id='delete" + i + "' src='./images/cancel.svg'></li>");
        } else {
          //If datetotakemeds is undefined but message isn't print this
          $("#schedule_list").append("<li id='myreminder" + i + "' class='reminder'> <b>Medication:</b> "
            + medication + "<br><b>Additional Notes:</b> <br>" + additionalmessage + "<img class='deleteButton' id='delete"
            + i + "' src='./images/cancel.svg'></li>");
        }
      } else {
        if (additionalmessage == undefined){
          //If datetotakemeds is defined but message isn't print this
          $("#schedule_list").append("<li id='myreminder" + i + "' class='reminder' value='" + i + "'> <b>Medication:</b> "
            + medication + "<br>" + "<b>Date:</b> " + datetotakemeds
            + "<img class='deleteButton' id='delete" + i + "' src='./images/cancel.svg'></li>");
        } else {
          //If both fields are defined print this
          $("#schedule_list").append("<li id='myreminder" + i + "' class='reminder'> <b>Medication:</b> "
            + medication + "<br>" + "<b>Date:</b> " + datetotakemeds
            + "<br><b>Additional Notes:</b> <br>" + additionalmessage + "<img class='deleteButton' id='delete"
            + i + "' src='./images/cancel.svg'></li>");
        }
      }
      if (i % 2 > 0) {
        $("#myreminder" + i).css("background-color", "#90ee90");
      } else {
        $("#myreminder" + i).css("background-color", "#71BC78");
      }
    }
  }

  $("#schedule_list").on("click", "li .deleteButton", function() {
    var deletee = $(this).parent().attr("value");
    deleter(deletee);
  });
    // this.parent().remove(this);
    // JQuery 'on' method



    //Schedule store stores name then key
    //schedule data store function pushes current schedule to schedule store.
  var scheduleStore = [];
  function scheduleDataStore(name, key){
    scheduleStore.push([name, key]);
  }

  //delette is the index number of the schedule.
  function deleter(deletee){
    var array = scheduleStore[deletee];
    var key = array[1];
    console.log(key);
    $("#schedule_list").empty();
    var id = sessionStorage.getItem("uid");
    firebase.database().ref().child('medications/' + id + "/" + key).remove();
  }

  function errData(data) {
    console.log("No data!");
    console.log(err.val());
  }

});
