var a = 10;

document.write("<b>Result</b><br>");

document.write("The value of a is: " + a + "<br><br>");
document.write("..................................<br><br>");

++a;
console.log(a);


document.write("The value of ++a is: 11 </br>")
document.write("Now the value of a is: 11 </br></br>")

a++;
console.log(a);


document.write("The value of a++ is: 11 </br>")
document.write("Now the value of a is: 12 </br></br>")

--a;
console.log(a);


document.write("The value of --a is: 11 </br>")
document.write("Now the value of a is: 11 </br></br>")

a--;
console.log(a);


document.write("The value of a-- is: 11 </br>")
document.write("Now the value of a is: 10 </br></br>")


document.write("===================================<br>")

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log(result);


document.write("a = 2<br>")
document.write("b = 1<br><br>")

result = --a
console.log(a);
document.write("a = 1<br>")

result= --a - --b
console.log(b);
document.write("b = -1<br>")

result= --a - --b + ++b
console.log(b);
document.write("b = -1<br>")

result= --a - --b + ++b + b--
console.log(b);
document.write("b = -2<br>")

document.write("Result is = 3")

var userName = prompt("Enter your name");
alert("Welcome " + userName)




var num = prompt("Enter a number:", 5);

document.write("<h2>Multiplication Table of " + num + "</h2>");

document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10) + "<br>");


var sub1 = prompt("Enter first subject name:")
var sub2 = prompt("Enter second subject name:")
var sub3 = prompt("Enter third subject name:")

var totalMarksEach = 100;

var marks1 = Number(prompt("Enter marks for " + sub1));
var marks2 = Number(prompt("Enter marks for " + sub2));
var marks3 = Number(prompt("Enter marks for " + sub3));

var totalObtainedMarks = marks1 + marks2 + marks3;

var grandTotal = totalMarksEach * 3;
var percentage = (totalObtainedMarks / grandTotal) * 100;

document.write("<table border='1'>");

