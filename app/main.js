let Number1 = 0;
let Number2 = 0;
let Operation = "";

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    if (operator === "+"){
        let result = add(num1, num2);
    } 

    else if (operator === "-"){
        let result = subtract(num1, num2);
    } 

    else if (operator === "/"){
        let result = divide(num1, num2);
    }

    else if (operator === "*"){
        let result = multiply(num1, num2);
    }
}