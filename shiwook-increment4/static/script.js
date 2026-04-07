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
            greetingElement.innerHTML = "Good Night";
        } else if (hour < 12) {
            greetingElement.innerHTML = "Good Morning";
        } else if (hour < 18) {
            greetingElement.innerHTML = "Good Afternoon";
        } else {
            greetingElement.innerHTML = "Good Evening";
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

function activeNav() {
    
    const navLinks = document.querySelectorAll('.nav_bar a');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (currentUrl.includes(link.getAttribute('href'))) {
            link.classList.add("active");
        }
    });
}

activeNav();

$("#readLess").click(function(){ 
    $("#longIntro").hide(); 
    $("#readLess").hide();  
    $("#readMore").show();  
});

$("#readMore").click(function(){
    $("#longIntro").css("display", "inline"); 
    $("#readLess").show();   
    $("#readMore").hide();   
});

function initTicketing() {
    const revealBtn = document.getElementById("revealFormBtn");
    const ticketForm = document.getElementById("ticketForm");

    if (revealBtn && ticketForm) {
        revealBtn.addEventListener("click", function() {
            ticketForm.style.display = "block";
            revealBtn.style.display = "none";
        });
    }

    if (ticketForm) {
        ticketForm.addEventListener("submit", validateForm);
    }
}


function validateForm(event) {
    event.preventDefault(); 
    
    const name = document.getElementById("userName").value;
    const hiddenValue = document.getElementById("currentPage").value;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    alert("Thank you, " + name + "! Your request from '" + hiddenValue + "' is confirmed.");
}


document.addEventListener("DOMContentLoaded", initTicketing);