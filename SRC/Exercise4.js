// Exercise 4: Classes
// 1. Create a Person class with name and age properties. Implement a method to return the person's name.
var Person = /** @class */ (function () {
    function Person(name, age, socialSecurityNumber) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getSocialSecurityNumber = function () {
        return this.socialSecurityNumber;
    };
    return Person;
}());
var person = new Person("Nosihle", 23, "123 45 6789");
console.log("".concat(person.getAge(), " Years old"));
