var a = prompt("Enter first number")
var b = prompt("Enter second number")

if(a > b) {
    alert("First number is greater")
}else if(a < b) {
    alert("Second number is greater")
}else{
    alert("Both numbers are equal")
}

var num = prompt("Enter a number")

if(num > 0) {
    alert("Number is positive")
}else if(num < 0){
    alert("Number is negative")
}else{
    alert("Zero")
}

var char = prompt("Enter vowel letter").toLowerCase();

if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    alert("True")
}else{
    alert("false")
}

var pass = "hashim";
var userPass = prompt("Enter a password");

if(userPass === pass){
    alert("Correct! The password you matches the orignal password")
}else{
    alert("Please enter correct password")
}

var greeting;
var hour = 13;

if(hour < 18) {
    greeting = "Good Day";
}else{
    greeting = "Good Evening";
}


var time = +prompt("Enter time")

if(time >= 0000 && time < 1200){
    alert("Good Morning")
}else if(time >= 1200 && time < 1700){
    alert("Good Afternoon")
}else if(time >=1700 && time < 2100){
    alert("Good Evening")
}else if(time >= 2100 && time < 2359){
    alert("Good Night")
}else{
    alert("please enter valid time")
}