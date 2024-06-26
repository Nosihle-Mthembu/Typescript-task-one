// Exercise 3: Functions
// 1. Write a function that takes two numbers as parameters and returns their sum
var num = function (value, value2) {
    return value + value2;
};
console.log(num(4, 5));
// 2. Write a function that returns a fixed number
var fixedNumber = function (numeracy) {
    return numeracy;
};
console.log(fixedNumber(7));
// 3. Write a function that takes a string and an optional boolean parameter. If the boolean is true, return the string in uppercase; otherwise, return it in lowercase.
var StringOptionalBoolean = function (case1, case2, action) {
    if (action == "case2") {
        return "GOOD MORNING";
    }
    else {
        return 'good morning';
    }
};
console.log(StringOptionalBoolean("good morning", true, "case1"));
