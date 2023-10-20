
var errorStateEntered = 0; // if entered error state value is 1, else value is 0
var darklightValue = false; // false for light, true for dark


// Function to store user input in localStorage before the page is refreshed
window.addEventListener("beforeunload", function() {
  const entryDay = document.getElementById("dayEntry").getElementsByTagName("input")[0].value;
  const entryMonth = document.getElementById("monthEntry").getElementsByTagName("input")[0].value;
  const entryYear = document.getElementById("yearEntry").getElementsByTagName("input")[0].value;

  localStorage.setItem("userInput_day", entryDay);
  localStorage.setItem("userInput_month", entryMonth);
  localStorage.setItem("userInput_year", entryYear);
});

// Function to retrieve and set user input after the page is reloaded
window.addEventListener("load", function() {
  const entryDay = localStorage.getItem("userInput_day");
  const entryMonth = localStorage.getItem("userInput_month");
  const entryYear = localStorage.getItem("userInput_year");

  document.getElementById("dayEntry").getElementsByTagName("input")[0].value = entryDay;
  document.getElementById("monthEntry").getElementsByTagName("input")[0].value = entryMonth;
  document.getElementById("yearEntry").getElementsByTagName("input")[0].value = entryYear;
});



window.onload = function(){
  var calculateButton = document.getElementById("calculate-arrow");
  calculateButton.addEventListener("click", checkConditions);

  var settingsButton = document.getElementById("site-appearance-settings");
  settingsButton.addEventListener("click", showSettings);

  var dark_light_button = document.getElementById("dark-light-button");
  dark_light_button.addEventListener("click", switchDarkLight);

  var themeOne = document.getElementById("theme-1");
  themeOne.addEventListener("click", function(){
    changeTheme(1);
  });

  var themeTwo = document.getElementById("theme-2");
  themeTwo.addEventListener("click", function(){
    changeTheme(2);
  });

  var themeThree = document.getElementById("theme-3");
  themeThree.addEventListener("click", function(){
    changeTheme(3);
  });

  var themeFour = document.getElementById("theme-4");
  themeFour.addEventListener("click", function(){
    changeTheme(4);
  });

  var themeFive = document.getElementById("theme-5");
  themeFive.addEventListener("click", function(){
    changeTheme(5);
  });

  var themeSix = document.getElementById("theme-6");
  themeSix.addEventListener("click", function(){
    changeTheme(6);
  });

  var themeSeven = document.getElementById("theme-7");
  themeSeven.addEventListener("click", function(){
    changeTheme(7);
  });

  var themeEight = document.getElementById("theme-8");
  themeEight.addEventListener("click", function(){
    changeTheme(8);
  });

  var themeNine = document.getElementById("theme-9");
  themeNine.addEventListener("click", function(){
    changeTheme(9);
  });

  var themeTen = document.getElementById("theme-10");
  themeTen.addEventListener("click", function(){
    changeTheme(10);
  });

  var themeEleven = document.getElementById("theme-11");
  themeEleven.addEventListener("click", function(){
    changeTheme(11);
  });

  var themeTwelve = document.getElementById("theme-12");
  themeTwelve.addEventListener("click", function(){
    changeTheme(12);
  });



  var everythingPinkOption1 = document.getElementById("everything-pink-pink-pink");
  everythingPinkOption1.addEventListener("click", function(){
    changeTheme(21);
  });

  var everythingPinkOption2 = document.getElementById("pink-pink-mountain");
  everythingPinkOption2.addEventListener("click", function(){
    changeTheme(22);
  });

  var everythingPinkOption3 = document.getElementById("pink-anchors");
  everythingPinkOption3.addEventListener("click", function(){
    changeTheme(20);
  });

  var closeBirthdayButton = document.getElementById("close-birthday");
  closeBirthdayButton.addEventListener("click", closeConfetti);
}


function checkConditions(){
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysInMonthLeapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let entryDay = document.getElementById("dayEntry").getElementsByTagName("input")[0].value;
  let entryMonth = document.getElementById("monthEntry").getElementsByTagName("input")[0].value;
  let entryYear = document.getElementById("yearEntry").getElementsByTagName("input")[0].value;

  if(errorStateEntered == 1){
    location.reload();
    errorStateEntered = 0;
  }

  var dateObj = new Date();
  var currentYear = dateObj.getFullYear(); // year

  if (entryDay === "" || isNaN(entryDay)){
    activateWarnings(1);
  }

  if (entryMonth === "" || isNaN(entryMonth)){
    activateWarnings(2);
  }

  if (entryYear === "" || isNaN(entryYear)){
    activateWarnings(3);
  }

  var leapYearYes = checkLeapYear(entryYear);
  if (leapYearYes){
    if (entryDay > daysInMonthLeapYear[entryMonth - 1]){
      activateWarnings(4);
    }
  }
  else{
    if (entryDay > daysInMonth[entryMonth - 1]){
      activateWarnings(4);
    }
  }


  if (entryMonth < 1 || entryMonth > 12){
    activateWarnings(5);
  }

  if (entryYear < 0 || entryYear > currentYear){
    activateWarnings(6);
  }

  if(errorStateEntered == 0){
    displayCalculatedAge();
  }
}


function checkLeapYear(yearEntered){
  if (yearEntered % 4 == 0 && yearEntered % 100 != 0){
    return true;
  }
  else{
    return false
  }
}


function activateWarnings(val){
  var entryDay = document.getElementById("dayEntry");
  var entryMonth = document.getElementById("monthEntry");
  var entryYear = document.getElementById("yearEntry");

  var warningDay = document.getElementById("dayWarning");
  var warningMonth = document.getElementById("monthWarning");
  var warningYear = document.getElementById("yearWarning");

  if(val == 1){
    var heading = entryDay.getElementsByClassName("fieldTitle")[0];
    var inputBox = entryDay.getElementsByTagName("input")[0];

    heading.className = "fieldTitle fieldTitleErrorState";
    inputBox.style.border = "1px solid var(--theme-light-red)";

    warningDay.className = "";

    var invalidDay = warningDay.getElementsByClassName("missingField")[0];
    invalidDay.className = "missingField";
  }

  else if(val == 2){
    var heading = entryMonth.getElementsByClassName("fieldTitle")[0];
    var inputBox = entryMonth.getElementsByTagName("input")[0];

    heading.className = "fieldTitle fieldTitleErrorState";
    inputBox.style.border = "1px solid var(--theme-light-red)";

    warningMonth.className = "";

    var invalidMonth = warningMonth.getElementsByClassName("missingField")[0];
    invalidMonth.className = "missingField";
  }

  else if(val == 3){
    var heading = entryYear.getElementsByClassName("fieldTitle")[0];
    var inputBox = entryYear.getElementsByTagName("input")[0];

    heading.className = "fieldTitle fieldTitleErrorState";
    inputBox.style.border = "1px solid var(--theme-light-red)";

    warningYear.className = "";

    var invalidYear = warningYear.getElementsByClassName("missingField")[0];
    invalidYear.className = "missingField";
  }

  else if (val == 4){
    var heading = entryDay.getElementsByClassName("fieldTitle")[0];
    var inputBox = entryDay.getElementsByTagName("input")[0];

    heading.className = "fieldTitle fieldTitleErrorState";
    inputBox.style.border = "1px solid var(--theme-light-red)";

    warningDay.className = "";

    var invalidDay = warningDay.getElementsByClassName("invalidField")[0];
    invalidDay.className = "invalidField";
  }


  else if (val == 5){
    var heading = entryMonth.getElementsByClassName("fieldTitle")[0];
    var inputBox = entryMonth.getElementsByTagName("input")[0];

    heading.className = "fieldTitle fieldTitleErrorState";
    inputBox.style.border = "1px solid var(--theme-light-red)";

    warningMonth.className = "";

    var invalidMonth = warningMonth.getElementsByClassName("invalidField")[0];
    invalidMonth.className = "invalidField";
  }

  else if (val == 6){
    var heading = entryYear.getElementsByClassName("fieldTitle")[0];
    var inputBox = entryYear.getElementsByTagName("input")[0];

    heading.className = "fieldTitle fieldTitleErrorState";
    inputBox.style.border = "1px solid var(--theme-light-red)";

    warningYear.className = "";

    var invalidYear = warningYear.getElementsByClassName("invalidField")[0];
    invalidYear.className = "invalidField";
  }

  errorStateEntered = 1;
}

/*function displayCalculatedAge(){
  var dateObj = new Date();
  var currentDate = dateObj.getDate(); // day of the month
  var currentMonth = dateObj.getMonth(); // month
  var currentYear = dateObj.getFullYear(); // year

  const entryDay = document.getElementById("dayEntry").getElementsByTagName("input")[0].value;
  const entryMonth = document.getElementById("monthEntry").getElementsByTagName("input")[0].value;
  const entryYear = document.getElementById("yearEntry").getElementsByTagName("input")[0].value;

  var ageYears = currentYear - entryYear;
  var ageMonths = currentMonth - entryMonth;
  var ageDays = currentDate - entryDay;

  if(ageMonths < 0 || (ageMonths === 0 && ageDays < 0)){
    ageYears--;
    ageMonths += 12;
    if (ageDays < 0) {
      ageMonths--;
      const lastMonth = new Date(dateObj.getFullYear(), dateObj.getMonth(), 0);
      ageDays += lastMonth.getDate();
    }
  }

  var displayYear = document.getElementById("yearDisplay");
  var displayMonth = document.getElementById("monthDisplay");
  var displayDay = document.getElementById("dayDisplay");

  displayYear.innerHTML = ageYears;
  displayMonth.innerHTML = ageMonths + 1;
  displayDay.innerHTML = ageDays;
}*/

function displayCalculatedAge() {
  const dateObj = new Date();
  const currentDate = dateObj.getDate(); // day of the month
  const currentMonth = dateObj.getMonth() + 1; // month (add 1 because getMonth() returns 0-11)
  const currentYear = dateObj.getFullYear(); // year

  const entryDay = parseInt(document.getElementById("dayEntry").getElementsByTagName("input")[0].value);
  const entryMonth = parseInt(document.getElementById("monthEntry").getElementsByTagName("input")[0].value);
  const entryYear = parseInt(document.getElementById("yearEntry").getElementsByTagName("input")[0].value);

  var ageYears = currentYear - entryYear;
  var ageMonths = currentMonth - entryMonth;
  var ageDays = currentDate - entryDay;

  if (ageDays < 0) {
    ageMonths--; // Subtract a month
    const lastMonth = new Date(currentYear, currentMonth - 2, 0); // Go back two months
    ageDays += lastMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--; // Subtract a year
    ageMonths += 12;
  }

  var displayYear = document.getElementById("yearDisplay");
  var displayMonth = document.getElementById("monthDisplay");
  var displayDay = document.getElementById("dayDisplay");

  displayYear.innerHTML = ageYears;
  displayMonth.innerHTML = ageMonths;
  displayDay.innerHTML = ageDays;

  checkBirthdayToday();
}



function showSettings() {
  openMenu();
  var settingsIcon = document.getElementById("settings-icon");
  var currentRotation = getRotationAngle(settingsIcon);

  if (currentRotation === 0) {
    // Rotate the icon to -180 degrees
    settingsIcon.style.transform = "rotate(-180deg)";
  } else {
    // Reset the rotation to 0 degrees (original state)
    settingsIcon.style.transform = "rotate(0deg)";
  }

  settingsIcon.style.transition = "transform 0.5s ease";
}

// Helper function to get the current rotation angle of the element
function getRotationAngle(element) {
  var st = window.getComputedStyle(element, null);
  var tr = st.getPropertyValue("transform");

  if (tr) {
    var values = tr.split('(')[1];
    values = values.split(')')[0];
    values = values.split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    return (angle < 0) ? angle + 360 : angle;
  }
  return 0;
}

var menuOpen = 0;
function openMenu(){
  if (menuOpen == 0){
    var settings_box_popup = document.getElementById("site-settings-popup");
    settings_box_popup.style.display = "block";
    menuOpen = 1;
  }
  else{
    var settings_box_popup = document.getElementById("site-settings-popup");
    settings_box_popup.style.display = "none";
    menuOpen = 0;
  }
}

function switchDarkLight(){
  var settingsBox = $("site-settings-popup-box");
  var popupBox = $("settings-popup-box-contents");
  var toggleBox = $("dark-light-toggle-box");
  var newBackgroundColor, newTextColor;

  var light_icon = $("light-mode-icon");
  var dark_icon = $("dark-mode-icon");

  var dark_light_text = $("dark-light-toggle-box-text");
  console.log(darklightValue);


  if (darklightValue == false) {
    console.log("1");
    newBackgroundColor = "black";
    newTextColor = "white";
    light_icon.style.display = "none";
    dark_icon.style.display = "block";
    dark_light_text.innerHTML = "Menu Appearance (Dark):";
    darklightValue = true;
  } else if (darklightValue == true){
    console.log("2");

    newBackgroundColor = "white";
    newTextColor = "black";
    light_icon.style.display = "block";
    dark_icon.style.display = "none";
    dark_light_text.innerHTML = "Menu Appearance (Light):";
    darklightValue = false;
  }

  settingsBox.style.backgroundColor = newBackgroundColor;

  const h2Elements = popupBox.querySelectorAll('h2');
  h2Elements.forEach(h2 => h2.style.color = newTextColor);

  const h1Elements = popupBox.querySelectorAll('h1');
  h1Elements.forEach(h1 => h1.style.color = newTextColor);
}

function changeTheme(val){
  var bodyElement = document.getElementsByTagName("body")[0];

  if (val == 1){
    bodyElement.className = "default-theme";
  }

  if (val == 2){
    bodyElement.className = "mesh-187--7-25-2023";
  }

  else if (val == 3){
    bodyElement.className = "pink-orange-gradient";
  }

  else if (val == 4){
    bodyElement.className = "global-warming-theme";
  }

  else if (val == 5){
    bodyElement.className = "strong-glue-theme";
  }

  else if (val == 6){
    bodyElement.className = "instagram-story-theme";
  }

  else if (val == 7){
    bodyElement.className = "beaubus-white-cloud-pattern-theme";
  }

  else if (val == 8){
    bodyElement.className = "beaubus_fans_pattern-theme";
  }

  else if (val == 9){
    bodyElement.className = "beaubus-vertical-stripes-pattern-theme";
  }

  else if (val == 10){
    bodyElement.className = "peakpx-reindeer";
  }

  else if (val == 11){
    bodyElement.className = "peakpx-iceberg";
  }

  else if (val == 12){
    bodyElement.className = "peakpx-seaside";
  }

  else if (val == 20) {
    bodyElement.className = "pink-anchors-away-theme";
  }

  else if (val == 21){
    bodyElement.className = "everything-pink";
  }
  else if (val == 22){
    bodyElement.className = "polygon-mountain";
  }

}

function checkBirthdayToday(){
  const dateObj = new Date();
  const currentDate = dateObj.getDate(); // day of the month
  const currentMonth = dateObj.getMonth() + 1; // month (add 1 because getMonth() returns 0-11)

  const entryDay = parseInt(document.getElementById("dayEntry").getElementsByTagName("input")[0].value);
  const entryMonth = parseInt(document.getElementById("monthEntry").getElementsByTagName("input")[0].value);


  if((entryDay == currentDate) && (entryMonth == currentMonth)){
    var getCanvas = document.getElementById("canvas");
    getCanvas.style.display = "flex";
    var birthdayText = document.getElementById("birthday-text");
    birthdayText.style.display = "block";
    birthdayText.style.width = "auto";
    var confettiInstructions = document.getElementById("confetti-instructions");
    confettiInstructions.style.display = "block";
    var closeBirthdayButton = document.getElementById("close-birthday");
    closeBirthdayButton.style.display = "block"
  }

}

function closeConfetti(){
  var getCanvas = document.getElementById("canvas");
  getCanvas.style.display = "none";
  var birthdayText = document.getElementById("birthday-text");
  birthdayText.style.display = "none";
  var confettiInstructions = document.getElementById("confetti-instructions");
  confettiInstructions.style.display = "none";
  var closeBirthdayButton = document.getElementById("close-birthday");
  closeBirthdayButton.style.display = "none"
}