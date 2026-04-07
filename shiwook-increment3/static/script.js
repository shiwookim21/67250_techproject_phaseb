/*
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);


function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);


if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!"); 

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];


function findTheBanana(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

findTheBanana(L1);
findTheBanana(L2);
} 
*/

function displayGreeting() { 
    var greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        var now = new Date();
        var hour = now.getHours(); 
        if (hour < 5 || hour >= 20) {
            greetingElement.innerHTML = "Good night";
        } else if (hour < 12) {
            greetingElement.innerHTML = "Good morning";
        } else if (hour < 18) {
            greetingElement.innerHTML = "Good afternoon";
        } else {
            greetingElement.innerHTML = "Good evening";
        }
    }
}
displayGreeting();

function addYear() {
    var currentYear = new Date().getFullYear();
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        yearElement.innerHTML = currentYear;
    }
}