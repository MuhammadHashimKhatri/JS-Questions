var year = prompt("Enter birth year");
var month = prompt("Enter birth month");
var day = prompt("Enter birth day");

var dob = new Date();
dob.setFullYear(year);
dob.setMonth(month - 1);
dob.setDate(day);
dob.setHours(0);
dob.setMinutes(0);
dob.setSeconds(0);

var now = new Date();

var diff = now.getTime() - dob.getTime();

var seconds = Math.floor(diff / 1000);
var minutes = Math.floor(seconds / 60);
var hours = Math.floor(minutes / 60);
var days = Math.floor(hours / 24);
var years = Math.floor(days / 365);
var months = Math.floor((days % 365) / 30);
var finalDays = (days % 365) % 30;

// 6️⃣ Output
alert(
  "Your Age is:\n" + years + " Years\n" + months + " Months\n" + finalDays + " Days\n" + hours + " Hours\n" + seconds + " Seconds" );
