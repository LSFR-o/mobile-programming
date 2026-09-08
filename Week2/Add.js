function addNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let sum = num1 + num2;

    document.getElementById("result").innerHTML = "Result:" + sum;
}

function subtractNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let difference = num1 - num2;

    document.getElementById("result").innerHTML = "Result:" + difference;
}

function multiplyNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let product = num1 * num2;

    document.getElementById("result").innerHTML = "Result:" + product;
}

function divideNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let quotient = num1 / num2;

    document.getElementById("result").innerHTML = "Result:" + quotient;
}