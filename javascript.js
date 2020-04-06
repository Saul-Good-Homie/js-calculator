
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, a, b){
    if(operator == '+'){
        console.log(add(a,b));
    }
    else if(operator == "-"){
        console.log(subtract(a,b));
    }
    else if(operator == "*"){
        console.log(multiply(a,b));
    }

    else if(operator == "/"){
        console.log(divide(a,b));
    }
}

let variableA = [];
let variableB = [];
let currentNumber;

function getValue(el){
    let buttonValue = el.value;
    currentNumber = document.getElementById("active").innerHTML += buttonValue;
    
    console.log(variableA);
}

function storeVariableA(el){
    variableA = document.getElementById("active").innerHTML
    document.getElementById("working").innerHTML = currentNumber;
    document.getElementById("active").innerHTML = "";
    console.log(variableA)
}

document.getElementById("AC").onclick = function() {clear()};

function clear() {
  document.getElementById("active").innerHTML = "";
  variableA.length = 0;
  console.log(variableA);
}

document.getElementById("del").onclick = function() {deleteLast()};

function deleteLast(){
  variableA.pop(); 
  console.log(variableA);
}