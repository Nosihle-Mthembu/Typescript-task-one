// Exercise 4: Classes
// 1. Create a Person class with name and age properties. Implement a method to return the person's name.

class Person {
    private socialSecurityNumber: string;

    constructor(public name: string, public age: number, socialSecurityNumber: string) {
        this.socialSecurityNumber = socialSecurityNumber;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getSocialSecurityNumber(): string {
        return this.socialSecurityNumber;
    }
}

const person = new Person("Nosihle", 23, "123 45 6789");
console.log(`${person.getAge()} Years old`);
