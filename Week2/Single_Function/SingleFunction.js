function calculate(operation) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let Result;

    if (operation == "add") {
    
        Result = num1 + num2;
    } else if (operation == "subtract") {
        Result = num1 - num2;
    } else if (operation == "multiply") {
        Result = num1 * num2;
    }
    else if (operation == "divide") {
        Result = num1 / num2;
    }

    document.getElementById("result").innerHTML = "Result:" + Result;
}

