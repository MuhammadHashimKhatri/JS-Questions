var arr = [[]]

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
console.log(matrix);

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(var i = 0; i < 10; i++){
    console.log(num[i]);
}

var table = prompt("Enter a miltiplication number", "5");
var length = prompt("Enter multiplication number length");

for(var i = 1; i <= length; i++){
    console.log(table + " x " + i + " = " + (table * i));
}

var fruits = ["Apple", "Orange", "Banana", "kiwi", "Mango"];

console.log(fruits);

for(var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(var j = 0; j < fruits.length; j++){
    console.log("Element of Index " + j + " is " + fruits[j]);
}

var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14 ,15]

for(var i = 0; i < 15; i++){
    console.log(counting[i]); 
}

var reverseCounting = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

for(var i = 9; i >= 0; i--){
    console.log(counting[i]);
}

var even = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for(var i = 1; i <= 20; i += 2){
    console.log(even[i]);
}


var odd = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for(var i = 0; i <= 19; i += 2){
    console.log(odd[i]);
}

var series = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for(var i = 1; i <= 20; i += 2){
    console.log(series[i] + "k");
}

var cookies = ["cake", "apple pie", "chips", "patties"];

var userInput = prompt("Enter cookie name").toLowerCase();

if(userInput === cookies[0]){
    console.log("Cake is available at index 0 in our bakery");
}else if(userInput === cookies[1]){
    console.log("Apple pie is available at index 1 in our bakery");
}else if(userInput === cookies[2]){
    console.log("Chips is available at index 2 in our bakery");
}else if(userInput === cookies[3]){
    console.log("Patties is available at index 3 in our bakery");
}else{
    console.log("We are sorry we dont have this");
}


var a = [24, 53, 78, 91, 92];
var largest = a[0];

for(var i = 0; i < a.length; i++){
    if(a[i] > largest) {
        largest = a[i];
    }
}

console.log("Array items: " + a.join(", "));
console.log("The largest number is " + largest);


var a = [24, 53, 78, 91, 92];
var smallest = a[0];

for(var i = 0; i < a.length; i++){
    if(a[i] < smallest) {
        smallest = a[i];
    }
}

console.log("Array items: " + a.join(", "));
console.log("The smallest number is " + smallest);

for(var i = 5; i <= 100; i += 5) {
    console.log(i);
    
}