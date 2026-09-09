function calculateMarks() {

    let m1 = Number(document.getElementById("Math").value);
    let m2 = Number(document.getElementById("Science").value);
    let m3 = Number(document.getElementById("Social").value);
    let m4 = Number(document.getElementById("Music").value);
    let m5 = Number(document.getElementById("Computer").value);
    let m6 = Number(document.getElementById("Physics").value);
    let m7 = Number(document.getElementById("Chemistry").value);
    let m8 = Number(document.getElementById("Biology").value);

    let total = m1 + m2 + m3 + m4 + m5 + m6 + m7 + m8;

    let percentage = total / 8;

    let grade;
    let result;

    if (percentage >= 90) {
        grade = "A+";
        result = "Distinction";
    }
    else if (percentage >= 80) {
        grade = "A";
        result = "Distinction";
    }
    else if (percentage >= 70) {
        grade = "B+";
        result = "Pass";
    }
    else if (percentage >= 60) {
        grade = "B";
        result = "Pass";
    }
    else if (percentage >= 50) {
        grade = "C+";
        result = "Pass";
    }
    else if (percentage >= 40) {
        grade = "C";
        result = "Pass";
    }
    else {
        grade = "F";
        result = "Fail";
    }

    document.getElementById("total").innerHTML = "Total Marks: " + total + " / 800";
    document.getElementById("percentage").innerHTML = "Percentage: " + percentage.toFixed(2) + "%";
    document.getElementById("grade").innerHTML = "Grade: " + grade;
    document.getElementById("result").innerHTML = result;

    if (result == "Pass" || result == "Distinction") {
        document.getElementById("result").style.color = "green";
    }
    else {
        document.getElementById("result").style.color = "red";
    }
}