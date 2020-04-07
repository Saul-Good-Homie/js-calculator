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

const display = document.getElementById('display').innerHTML
let a = '';
let b = '';
let op = '';


const integers = document.querySelectorAll('.integer');
    for (i = 0; i < integers.length; ++i) {
        integers[i].addEventListener('click', function(e) {
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
            op = e.target.value;
            document.getElementById('display').innerHTML = a + op;
  });
}

const equals = document.querySelectorAll('.equals');
    for (i = 0; i < equals.length; ++i) {
    equals[i].addEventListener('click', function(e) {
        let solution = calculate(op, a, b);
        document.getElementById('display').innerHTML = solution;
        a = solution;
        b = '';
        op = '';
    })
  };

  const clear = document.querySelectorAll('.AC');
  for (i = 0; i < clear.length; ++i) {
  clear[i].addEventListener('click', function(e) {
      document.getElementById('display').innerHTML = '';
      a = '';
      b = '';
      op = '';
  })
};
    

