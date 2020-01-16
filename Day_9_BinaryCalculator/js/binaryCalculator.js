let calcScreen = document.getElementById('res');
let zeroButton = document.getElementById('btn0');
let oneButton = document.getElementById('btn1');
let clrButton = document.getElementById('btnClr');
let eqlButton = document.getElementById('btnEql');
let sumButton = document.getElementById('btnSum');
let subButton = document.getElementById('btnSub');
let mulButton = document.getElementById('btnMul');
let divButton = document.getElementById('btnDiv');

let bin1 = '';
let bin2 = '';

let operator = null;
let dispNum = '';

function decToBin(dec) {
    return (dec >>> 0).toString(2);
}

function binToDec(bin) {
    return parseInt(bin, 2);
}

zeroButton.onclick = function zeroDigit() {
    if (operator == null) {
        bin1 = bin1.concat('0');
    } else {
        bin2 = bin2.concat('0');
    }
    dispNum = dispNum.concat('0');
    calcScreen.innerHTML = dispNum;
};

oneButton.onclick = function oneDigit() {
    if (operator == null) {
        bin1 = bin1.concat('1');
    } else {
        bin2 = bin2.concat('1');
    }
    dispNum = dispNum.concat('1');
    calcScreen.innerHTML = dispNum;
};

function dispOp(op) {
    dispNum = dispNum.concat(op);
    calcScreen.innerHTML = dispNum;
}

sumButton.onclick = function addition() {
    dispOp('+');
    operator = '+';
};

subButton.onclick = function substraction() {
    dispOp('-');
    operator = '-';
};

mulButton.onclick = function multiplication() {
    dispOp('*');
    operator = '*';
};

divButton.onclick = function division() {
    dispOp('/');
    operator = '/';
};

eqlButton.onclick = function equalTo() {
    let num1 = binToDec(bin1);
    let num2 = binToDec(bin2);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break
        case '/':
            result = num1 / num2;
            break;
    }

    let resBin = decToBin(result);
    dispNum = resBin;
    calcScreen.innerHTML = dispNum;
};

clrButton.onclick = function clrScreen() {
    bin1 = '';
    bin2 = '';

    operator = null;

    dispNum = '';
    calcScreen.innerHTML = dispNum;
};
