// Excise 5 : Basic calculator
// Objective:
// Create a basic calculator class in TypeScript that can perform addition, subtraction, multiplication, and division. The class should include validation to ensure that the inputs are valid numbers and that division by zero is handled correctly

class Calculator {
    private validNumber(input: any): boolean {
        return typeof input === 'number' && !isNaN(input);
    }

    private validInputs(a: any, b: any): void {
        if (!this.validNumber(a) || !this.validNumber(b)) {
            console.log(("valid numbers only."));
        }
    }

    add(a: number, b: number): number {
        this.validInputs(a, b);
        return a + b;
    }

    subtract(a: number, b: number): number {
        this.validInputs(a, b);
        return a - b;
    }

    multiply(a: number, b: number): number {
        this.validInputs(a, b);
        return a * b;
    }

    divide(a: number, b: number): number {
        this.validInputs(a, b);
        if (b === 0) {
            console.log("Invalid");
        }
        return a / b;
    }
}

const calculator = new Calculator();
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));
console.log(calculator.divide(10, 0));

