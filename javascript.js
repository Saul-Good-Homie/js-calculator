function add(a,b){
    sum = Math.floor((a+b)*100)/100;
    return sum;
}

function subtract(a,b){
    difference = Math.floor((a-b)*100)/100;
    return difference;
}

function multiply(a,b){
    product = Math.floor((a*b)*100)/100;
    return product;
}

function divide(a,b){
    quotient = Math.floor((a/b)*100)/100;
    return quotient;
}

function calculate(operator, a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    if(operator == ' + '){
        return add(a,b);
    }
    else if(operator == " - "){
        return subtract(a,b);
    }
    else if(operator == " * "){
        return multiply(a,b);
    }
    else if(operator == " / "){
            if(b=== 0){
                return "You can't do that!"
            }
                    return divide(a,b);
    }
}


function clearWords(){
    if (a == "undefined" || a === NaN){
        console.log('not a number');    
    }
}

const display = document.getElementById('display').innerHTML
const holding = document.getElementById('holding').innerHTML
const history = document.getElementById('history')
// const history = document.getElementById('history').innerHTML

let solution = '';
let a = '';
let b = '';
let op = '';

const integers = document.querySelectorAll('.integer');
    for (i = 0; i < integers.length; ++i) {
        integers[i].addEventListener('click', function(e) {
        if(a == "You can't do that!" || isNaN(a) && a!= '.' || a == undefined){    
            clearAll();
        }
        if(a == solution && op == ''){
            a = '';
        }
            if(op ==''){
            a += e.target.value;
           document.getElementById('display').innerHTML = a;
        }
                else{
                    b += e.target.value;
                    document.getElementById('display').innerHTML = a + op + b;
                 }
    });
}

const operands = document.querySelectorAll('.operator');
    for (i = 0; i < operands.length; ++i) {
         operands[i].addEventListener('click', function(e) {
             if(op != '' && b != ''){
                 solve();
             }
             if(a == ''){
                 return;
             }
             else{
            op = e.target.value;
            document.getElementById('display').innerHTML = a + op;
             }
  });
}

// const decimals = document.querySelectorAll('.decimal');
//     for (i = 0; i < decimals.length; ++i) {
//          decimals[i].addEventListener('click', function(e) {
//             if(a.includes('.') && op == '')
//             {
//                 console.log(a)
//             return;
//             }
//                 if(op ==''){
//                 a += e.target.value;
//                 document.getElementById('display').innerHTML = a;
//                 }
//                         if(b.includes('.')){
//                             return;
//                         }
//                         else{
//                     b += e.target.value;
//                     document.getElementById('display').innerHTML = a + op + b;
//                 }
//     });
// }

const decimals = document.querySelectorAll('.decimal');
    for (i = 0; i < decimals.length; ++i) {
         decimals[i].addEventListener('click', function(e){
            if(a == "You can't do that!" || isNaN(a) && a!= '.' || a == undefined){    
                clearAll();
            }
            if(a == solution && op == ''){
                a = '';
            }
                if(op ==''){
                a += e.target.value;
               document.getElementById('display').innerHTML = a;
            }
                    else{
                        b += e.target.value;
                        document.getElementById('display').innerHTML = a + op + b;
                     }
        });
    }


const equals = document.querySelectorAll('.equals');
    for (i = 0; i < equals.length; ++i) {
        equals[i].addEventListener('click', solve)};


//function for equals button to run all calculations
  function solve(e){
      if(a =='' || op == '' || b ==''){
          return;
      }
    solution = calculate(op, a, b);
    let wholeEquation = a + op + b + ' = ' + solution;
    document.getElementById('display').innerHTML = solution;
    document.getElementById('holding').innerHTML = wholeEquation;

    let storedExpression = document.createElement('div');
    storedExpression.textContent += wholeEquation; 
    history.append(storedExpression); 
    history.scrollTop = history.scrollHeight;
    a = solution;
    b = '';
    op = '';
}

  
  const clear = document.querySelectorAll('.AC');
  for (i = 0; i < clear.length; ++i) {
  clear[i].addEventListener('click', clearAll)}; 
  
  // function to clear all
  function clearAll(e){
      document.getElementById('display').innerHTML = '';
      document.getElementById('holding').innerHTML = '';
      a = '';
      b = '';
      op = '';
};


// function to backspace
const backspace = document.querySelectorAll('.del');
for (i = 0; i < backspace.length; ++i) {
backspace[i].addEventListener('click', function(e) {
    if(document.getElementById('display').innerHTML == a){
        a = a.substring(0, a.length -1);
        document.getElementById('display').innerHTML = a
    }
    else if(document.getElementById('display').innerHTML == a + op){
        op = '';
        document.getElementById('display').innerHTML = a + op;
    }
    else if(document.getElementById('display').innerHTML == a + op + b){
        b = b.substring(0, b.length -1);
        document.getElementById('display').innerHTML = a + op + b;
    }
})
};
    

