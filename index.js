//declaring variables globally
var firstNumero = "";
var secondNumero = "";
var operand = undefined;
var solution = undefined;

//clickNumero
$(".numero").on("click", function () {
    startCalc(this.innerHTML);
});

function startCalc(numero) {
    if (operand === undefined && firstNumero.length <= 15 ) {
        firstNumero = firstNumero + numero;
        return $("#displayNumero").html(firstNumero);    
    }; 
    
    if (operand !== undefined && secondNumero.length <= 15 ) {
        secondNumero = secondNumero + numero;
        return $("#displayNumero").html(secondNumero);
    };
};


//clickOperand
$(".operand").on("click", function () {
    selectOperand(this.classList[0])
});

function selectOperand(operator) {
    if (operand !== undefined && secondNumero !== "") {
        calculate();
        firstNumero = solution;
        $("#displayNumero").html = firstNumero;
        secondNumero = "";

        return operand = operator;
    } else {
        return operand = operator;
    }

};


//clickSolution
$(".calculate").on("click", calculate);

function calculate() {
    firstNumero = Number(firstNumero);
    secondNumero = Number(secondNumero);

    switch (operand) {
        case "+":
            solution = firstNumero + secondNumero;
            break;
        case "-":
            solution = firstNumero - secondNumero;
            break;
        case "*":
            solution = firstNumero * secondNumero;
            break;
        case "/":
            solution = firstNumero / secondNumero;
            break;
        default:
            console.log(operand);
            break;
    };

    return $("#displayNumero").html(solution);
};



//clickRefresh
$(".cancel").on("click", clickReload);

function clickReload() {
    firstNumero = "";
    secondNumero = "";
    operand = undefined;
    solution = undefined;

    $("#displayNumero").html(0);
};


//clickClear
$(".clear").on("click", clickClear);

function clickClear() {
    if (operand === undefined) {
        firstNumero = firstNumero.slice(0, firstNumero.length-1);
        $("#displayNumero").html(firstNumero);  
        
        if (firstNumero === "") {
            $("#displayNumero").html(0);  
        }
    } else {
        secondNumero = secondNumero.slice(0, secondNumero.length-1);
        $("#displayNumero").html(secondNumero);

        if (secondNumero === "") {
            $("#displayNumero").html(0);  
        }
    };   
};


//clickSign
$(".sign").on("click", clickSign);

function clickSign() {
    if (operand === undefined) {
        firstNumero = firstNumero * (-1);
        $("#displayNumero").html(firstNumero);  

    } else {
        secondNumero = secondNumero * (-1);
        $("#displayNumero").html(secondNumero);  

    };
};


//clickSqrt
$(".sqrt").on("click", clickSqrt);

function clickSqrt() {
    if (operand === undefined) {
        firstNumero = Math.sqrt(firstNumero);
        $("#displayNumero").html(firstNumero);  

    } else {
        secondNumero = Math.sqrt(secondNumero);
        $("#displayNumero").html(secondNumero);  

    };
};


//Detecting KeyPress Events
$(document).on("keydown", function (event) {

    switch (event.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
            startCalc(event.key);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            selectOperand(event.key);
            break;
        case "=":
        case"Enter":
            calculate();
            break;
        case "Backspace":
            clickClear();
            break;
        default:
            console.log(event.key)
            break;
    };
});


