// Função que imita uma calculadora simples.

function calcula () {
let operating1 = document.querySelector('#operando1');
let operating2 = document.querySelector('#operando2');
let operador = document.querySelector('#operador').value;
let result = document.querySelector('#result');

let op1 = Number(operating1.value)
let op2 = Number(operating2.value)


if (operador === 'sum'){
    console.log(op1 + op2) 
    result.innerHTML = op1+op2
  } 
  else if (operador === 'subtraction'){
    console.log(op1 - op2) 
    result.innerHTML = op1-op2
  } 
  else if (operador === 'multiplication'){
    console.log(op1 * op2) 
    result.innerHTML = op1*op2
  }
  else if(operador === 'division'){
    console.log(op1 / op2) 
    result.innerHTML = op1/op2
  }
}