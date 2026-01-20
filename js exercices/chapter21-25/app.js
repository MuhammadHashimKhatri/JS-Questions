var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");

var fullName = firstName + " " +  lastName;
alert("Welcome " + fullName + " !")

var favPhone = prompt("Enter your favourite mobile phone model");

var inputLenght = favPhone.length

alert("Your favourite phone is " + favPhone);
alert("Length of string: " + inputLenght);

var country = "Pakistani";
var indexNum = country.indexOf("n");

console.log("String: " + country);
console.log("Index of 'n': " + indexNum);

var greeting = "Hello world";
var lastIndexNum = greeting.lastIndexOf("l");
console.log("String: " + greeting);
console.log("Index of 'l': " + lastIndexNum);

var country = "Pakistani";
var indexNum = country.charAt(3);
console.log("String: " + country);
console.log("Character at index 3: " + indexNum);

var city = "Hyderabad";
var replace = city.replace("Hyderabad", "Islamabad");

console.log("City: " + city);
console.log("After replacement: " + replace);

var message = "Ali and Sami are best friends, They play cricket and football together.";
var replacement = message.replaceAll("and", "&");

console.log("Message: " + message);
console.log("After replacement: " + replacement);

var str = "472";
var num = Number(str);
console.log(str);
console.log(num);

var userInput = prompt("Write something").toUpperCase();
alert(userInput);


var userInput = prompt("Enter any word");
var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
console.log("User input: "  + userInput);
console.log("Title case: " + titleCase);

var num = 35.56;
var numStr = num.toString();

var result = parseInt(numStr);

console.log("Number: " + num);
console.log("Result: " + result);



var userName = prompt("Enter your username");
var isValid = true;

for(var i = 0; i < userName.length; i++){
    var charCode = userName.charCodeAt(i);

    if(charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        isValid = false;
        break;
    }
}

if(isValid === false){
    alert("Please enter a valid username")
}else{
    alert("Username is accepted: " + userName)
}


var uni = "University of karachi";

var arr = uni.split("");

for(var i = 0; i < uni.length; i++){
    console.log(arr[i]);
}

var userInput = "Pakistan";
var lastChar = userInput[userInput.length -1];
console.log("User Inpur: " + userInput);
console.log("Last character:", lastChar);

var text = "The quick brown fox jumps over the lazy dog";
var lowerText = text.toLowerCase();

var count = lowerText.split("the").length - 1;

console.log("Text: " + text);
console.log("There are " + count + " occurrence(s) of word 'the'");
 