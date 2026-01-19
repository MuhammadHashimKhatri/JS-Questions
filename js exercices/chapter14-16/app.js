// var studentNames = []

// var studentNames = array()

// var fruitNames =["Apple, Banana, Orange"]

// var num = [1, 2, 3, 4, 5, 6]

// var boolean = [true, false]

// var mixed = ["hashim", 18, true]

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PHD"]

// console.log("1. " + qualifications[0]);
// console.log("2. " + qualifications[1]);
// console.log("3. " + qualifications[2]);
// console.log("4. " + qualifications[3]);
// console.log("5. " + qualifications[4]);
// console.log("6. " + qualifications[5]);
// console.log("7. " + qualifications[6]);
// console.log("8. " + qualifications[7]);


// var names = ["hashim", "abdul", "hamza"];
// var score = [320, 230, 480];
// var total = 500;

// var num0 = (score[0] / total) * 100;
// console.log("Score of " + names[0] + " is " + score[0] + ". Percentage: " + num0 + "%");

// var num1 = (score[1] / total) * 100;
// console.log("Score of " + names[1] + " is " + score[1] + ". Percentage: " + num1 + "%");

// var num2 = (score[2] / total) * 100;
// console.log("Score of " + names[2] + " is " + score[2] + ". Percentage: " + num2 + "%");


// var colors = ["red", "green" ,"blue"]
// console.log(colors);

// var colorAtStart = prompt("What color do you want to add to the beginning?")
// colors.unshift(colorAtStart)
// console.log("After adding at start " + colors);


// var colorAtStart = prompt("What color do you want to add to the end?")
// colors.push(colorAtStart)
// console.log("After adding at end " + colors);

// colors.unshift("Yellow", "Green")
// console.log("After adding tow more at start " + colors);

// colors.shift()
// console.log("After removing first color " + colors);

// colors.pop()
// console.log("After removing last color " + colors);

// var indexToAdd = prompt("At which index do you want to add a color?")
// var colorName = prompt("Enter the color name:")

// colors.splice(indexToAdd, 0, colorName)
// console.log("After adding at index " + indexToAdd + colors );

// var indexToDel = prompt("At which index do you want to delete color(s)?")
// var numberOfDel = prompt("How many colors do you want to delete?")

// colors.splice(indexToDel, numberOfDel)
// console.log("After deleting " + numberOfDel + "color(s) form index " + indexToDel + colors);


var scores = [320, 230, 480, 120]
console.log("Scores of Students " + scores);

scores.sort()
console.log("Ordered Scores of students " + scores);


var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"]

var selectedCities = cities.slice(1, 4)
console.log("Cities list : " + cities);

console.log("Selected cities list : " + selectedCities);

var arr = ["This", "is", "my", "cat"]
console.log(arr.join(" "));

var devices = []

devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

console.log("Devices stored in array:", devices);

console.log("Out:" + devices.shift());
console.log("Out:" + devices.shift());
console.log("Out:" + devices.shift());
console.log("Out:" + devices.shift());


var devices = []

devices.push("monitor");
devices.push("printer");
devices.push("mouse");
devices.push("keyboard");

console.log("Devices stored in array:", devices);

console.log("Out:" + devices.shift());
console.log("Out:" + devices.shift());
console.log("Out:" + devices.shift());
console.log("Out:" + devices.shift());



var manufactures = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>")

document.write("<option> Select Manufacturer</option>")

document.write("<option>" + manufactures[0] + "</option>");
document.write("<option>" + manufactures[1] + "</option>");
document.write("<option>" + manufactures[2] + "</option>");
document.write("<option>" + manufactures[3] + "</option>");
document.write("<option>" + manufactures[4] + "</option>");
document.write("<option>" + manufactures[5] + "</option>");


