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
   let result = 0;
   
    if (operator === "+"){
        result = add(num1, num2);
    } 

    else if (operator === "-"){
        result = subtract(num1, num2);
    } 

    else if (operator === "/"){
        result = divide(num1, num2);
    }

    else if (operator === "*"){
        result = multiply(num1, num2);
    }

    return result;
}

const display = document.querySelector(".display");
const digitBtns = document.querySelectorAll(".digit-btn");
const operationBtns = document.querySelectorAll(".operation");
const equalsBtn = document.querySelector("#equals-btn");
const clearBtn = document.querySelector("#clear-btn");


// digit btns events
digitBtns.forEach((btnItem) => {

    btnItem.addEventListener("click", () =>{

        console.log(btnItem.textContent, "was clicked")
        display.textContent += btnItem.textContent;
    });
});

// operation btns events
operationBtns.forEach((btnItem) => {

    btnItem.addEventListener("click", () => {
        console.log(btnItem.textContent, "was clicked")

        if(Number1 === 0){
            Number1 = parseInt(display.textContent);
            console.log("number 1 is:", Number1);
            Operation = btnItem.textContent;
            console.log("operation is:", Operation)
        } 

        display.textContent += btnItem.textContent;
    });
});

// equals btn event
equalsBtn.addEventListener("click", () =>{
    if(Number2 === 0){
        let resultString = display.textContent.split(Operation);
        Number2 = parseInt(resultString[1]);

        console.log("number 2 is:", Number2);
    } 

    if(Number1 != 0 && Number2 != 0){
        result = operate(Operation, Number1, Number2);
        display.textContent = result;
        Number1=0;
        Number2=0;
    }
});

clearBtn.addEventListener("click", () => {
    display.textContent = "";
    Number1=0;
    Number2=0;
    Operation = "";
});
