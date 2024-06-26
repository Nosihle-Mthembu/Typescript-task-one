// Excise 5 : Basic calculator
// Objective:
// Create a basic calculator class in TypeScript that can perform addition, subtraction, multiplication, and division. The class should include validation to ensure that the inputs are valid numbers and that division by zero is handled correctly
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.validNumber = function (input) {
        return typeof input === 'number' && !isNaN(input);
    };
    Calculator.prototype.validInputs = function (a, b) {
        if (!this.validNumber(a) || !this.validNumber(b)) {
            console.log(("valid numbers only."));
        }
    };
    Calculator.prototype.add = function (a, b) {
        this.validInputs(a, b);
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        this.validInputs(a, b);
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        this.validInputs(a, b);
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        this.validInputs(a, b);
        if (b === 0) {
            console.log("Invalid");
        }
        return a / b;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
console.log(calculator.divide(10, 0));
