//  clear all the values
function clearScreen() {
document.getElementById("result").value = "";
}
// This function display values
function Show(value) {
document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {var i = document.getElementById("result").value;
var j = eval(i);
document.getElementById("result").value = j;
}