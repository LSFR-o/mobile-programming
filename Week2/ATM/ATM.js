let balance = 10000;
let pin = 1234;

function atm(action) {

    let enteredPin = Number(document.getElementById("pin").value);
    let amount = Number(document.getElementById("amount").value);
    let result = document.getElementById("result");

    if (enteredPin != pin) {
        result.innerHTML = "Wrong PIN";
        result.style.color = "red";
        return;
    }

    if (action == "balance") {
        result.innerHTML = "Balance: Rs. " + balance;
    }

    else if (action == "withdraw") {

        if (amount <= 0 || amount % 100 != 0) {
            result.innerHTML = "Amount must be a multiple of 100";
        }
        else if (amount > balance) {
            result.innerHTML = "Insufficient balance";
        }
        else {
            balance = balance - amount;
            result.innerHTML = "Withdraw successful. Balance: Rs. " + balance;
        }
    }

    else if (action == "deposit") {

        if (amount <= 0 || amount % 100 != 0) {
            result.innerHTML = "Amount must be a multiple of 100";
        }
        else {
            balance = balance + amount;
            result.innerHTML = "Deposit successful. Balance: Rs. " + balance;
        }
    }
}