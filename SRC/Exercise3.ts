// Exercise 3: Functions
// 1. Write a function that takes two numbers as parameters and returns their sum

let num = (value:number,value2:number) =>{
    return value + value2

}
console.log(num(4,5));

// 2. Write a function that returns a fixed number
let fixedNumber = (numeracy:number):number =>{
    return numeracy
}

console.log(fixedNumber(7));

// 3. Write a function that takes a string and an optional boolean parameter. If the boolean is true, return the string in uppercase; otherwise, return it in lowercase.

let StringOptionalBoolean = (case1:string,case2:boolean,action: string) =>{
    if(action == "case2"){
        return "GOOD MORNING";
    }else{
        return 'good morning'
    }
}
console.log(StringOptionalBoolean("good morning", true, "case1"));
