function add(x,y){
    return(x + y);
}

function subtract(x,y){
    return(x - y);
}

function multiply(x,y){
    return(x * y);
}

function divide(x,y){
    return(x / y);
}

function operate(){
    return func(x,y);
}

function calculate(firstNumber, operator, secondNumber) {

	firstNumber = Number(firstNumber);
	secondNumber = Number(secondNumber);

    if (operator === 'plus' || operator === '+') return firstNumber + secondNumber;
    if (operator === 'minus' || operator === '-') return firstNumber - secondNumber;
    if (operator === 'multiply' || operator === 'x') return firstNumber * secondNumber;
    if (operator === 'divide' || operator === '/') return firstNumber / secondNumber;
    if (operator === 'remainder' || operator === '%') return firstNumber % secondNumber;
}