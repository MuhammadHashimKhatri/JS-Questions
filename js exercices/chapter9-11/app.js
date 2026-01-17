var city = prompt("Enter City Name:")

if(city === "karachi"){
    alert("Welcome The City Of Lights")
}


var gender = prompt("Enter Your Gender");

if(gender === "male"){
    alert("Good Morning Sir!")
}else if(gender === "female"){
    alert("Good Morning Ma'am!")
}

var signalColor = prompt("Enter Traffic Signal Color (red, yellow, green):").toLowerCase();

if(signalColor === "red"){
    alert("Must Stop")
}else if(signalColor === "yellow"){
    alert("Ready to move")
}else if(signalColor === "green"){
    alert("Move Now")
}else{
    alert("Invalid color please enter Red, Yellow, Green")
}

var fuel = prompt("Enter your car fuel");

if(fuel < 0.25){
    alert("Please refill the fuel in your car")
}else{
    alert("You have to enough fuel to keep driving")
}

var a = 4;
if(++a === 5){
    alert("given condition for variable is a true");
}

var b = 82;
if(b++ === 82){
    alert("given condition for variable b is true")
}

var c = 12;
if(c++ === 13){
    alert("condition 1 is true")
}

if(c === 13){
    alert("condition 2 is true")
}

if(++c > 14){
    alert("condition 3 is true")
}

if(c === 14){
    alert("condition 4 is true")
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if(totalCost === materialCost + laborCost){
    alert("The cost equals")
}

if(true){
    alert("true")
}

if(false){
    alert("false")
}

if("car" < "cat"){
    alert("car is smaller than cat")
}

var sub1 = Number(prompt("Enter Marks for subject 1:"));
var sub2 = Number(prompt("Enter Marks for subject 2:"));
var sub3 = Number(prompt("Enter Marks for subject 3:"));
var totalMarks = Number(prompt("Enter total marks:"))

var marksObtained = sub1 + sub2 + sub3;
var percentage = (totalMarks / marksObtained) * 100;

var grade, remark;

if(percentage >= 80){
    grade = "A-one";
    remark = "Excelent";
}else if(percentage >= 70){
    grade = "A";
    remark = "Good";
}else if(percentage >= 60){
    grade = "B";
    remark = "You need to improve"
}else{
    grade = "Fail";
    remark = "Sorry";
}


document.write("--- MARKS SHEET --- <br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "% <br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remark + "<br>");


var secretNumber = 5;
var guessNumber = +prompt("Enter a guessnumber between 1-10");

if(guessNumber === secretNumber){
    alert("Bingo! Correct answer");
}else if(guessNumber < secretNumber){
    alert("Close enough to the correct answer");
}
else{
    alert("Wrong guess! Try Again")
}


var number = +prompt("Enter Random Number:");


if (number % 3 === 0) {
    console.log("divided by 3");
    alert("divided by 3");
}

var num = +prompt("Enter even or odd number:");

if (num % 2 === 0) {
    console.log("Yeh ek Even number hai.");
} else {
    console.log("Yeh ek Odd number hai.");
}

var temperature = +prompt("Enter Temperature");

if(temperature >= 40){
    alert("IT is too hot outside")
}else if(temperature >= 30){
    alert("The Wheater today is normal")
}else if(temperature >= 20){
    alert("Today's wheater is cool")
}else if(temperature >= 10){
    alert("OMG! Today's weather is so cool")
}

var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));
var operator = prompt("Enter Operator(+, -, /, *, %");

if(operator === "+"){
    result = num1 + num2
}else if(operator === "-"){
    result = num1 - num2
}else if(operator === "/"){
    result = num1 / num2
}else if(operator === "*"){
    result = num1 * num2
}else if(operator === "%"){
    result = num1 % num2
}
else{
    alert("Enter write operator")
}

alert("Your ans " + result)