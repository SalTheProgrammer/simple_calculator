
// Initiate some variables
var firstNumArray = [];
var secondNumArray = [];
var firstNum = 0;
var secondNum = 0;
var charDisp = [];
var oper = "+";
var isOpPressed = false;
var opPressCount = 0;
var oper1 = "";
var oper2 = "";

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
var dispBox = document.getElementById("text-display");

var display = function() {
    var attribute = this.getAttribute("value");
    dispBox.innerHTML = attribute;
    //alert(attribute);
    console.log(attribute);
};
//add event listeners to numbers and operation buttons
for (var i = 0; i < elNum.length; i++) {
    elNum[i].addEventListener('click', numPressed, false);
}
//call operPressed if operation is pressed
for (var i = 0; i < elOp.length; i++) {
    elOp[i].addEventListener('click', operPressed, false);
}

// what happens when numbers or operators are pressed
function numPressed () {
    // check if operator has been pushed
    if (opPressCount ==  0) { //if operation has not been pressed, it's firstNum
        if (firstNumArray.length < 10) { //check character display length
            firstNumArray.push(this.getAttribute("value"));
            firstNum = firstNumArray.join("");
            dispBox.innerHTML = firstNum;
        }
    } else { //if operation has been pressed once, it's secondNum
        //charDisp = [];
        if (secondNumArray.length < 10) { //check character display length
            secondNumArray.push(this.getAttribute("value"));
            secondNum = secondNumArray.join("");
            dispBox.innerHTML = secondNum;
        }
    } 
}

function operPressed () {
    oper = this.getAttribute("value");
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (oper == "AC"){
        dispBox.innerHTML = 0;
        firstNumArray = [];
        secondNumArray = [];
        firstNum = 0;
        secondNum = 0;
        opPressCount = 0;
    } else if (opPressCount == 0) { //first time oper is pressed
        oper1 = oper;
        if (secondNumArray.length != 0){
            dispBox.innerHTML = operate (firstNum, secondNum, oper1);
        }
    } else if (opPressCount > 0 ) { //|| oper == "="
        if (secondNumArray.length != 0) {
            oper2 = oper;
            firstNum = operate (firstNum, secondNum, oper1); 
            dispBox.innerHTML = firstNum;
            oper1 = oper2;
            secondNumArray = []; //initiate secondNumArray;
        }
    }
    opPressCount++;
}

function operate(a, b, op) {
    var result = 0;
    if (op == "-") {
        result = a - b;
        //dispBox.innerHTML = result;
    } else if (op == "+") {
        result = a + b;
        //dispBox.innerHTML = result;
    } else if (op == "*") {
        result = a * b;
        //dispBox.innerHTML = result;
    } else if (op == "/") {
        result = a / b;
        //dispBox.innerHTML = result;
    } 
    return result;
}