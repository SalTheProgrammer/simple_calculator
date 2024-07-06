
// Initiate some variables
var firstNum = 0;
var secondNum = 0;
var oper = "+";

//math operations
function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a/b;
}

// event listeners to buttons and display function
var elNum = document.getElementsByClassName("num");
var elOp = document.getElementsByClassName("operation");
var disp = document.getElementById("text-display");

var display = function() {
    var attribute = this.getAttribute("value");
    disp.innerHTML = attribute;
    //alert(attribute);
    console.log(attribute);
};

for (var i = 0; i < elNum.length; i++) {
    elNum[i].addEventListener('click', display, false);
}

for (var i = 0; i < elOp.length; i++) {
    elOp[i].addEventListener('click', display, false);
}