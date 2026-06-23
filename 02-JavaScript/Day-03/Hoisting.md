1. What is Hoisting?

hoisting is where the javascript varibales goes to the top of the script

2. Does var get hoisted?

yes only declaration not assignment

Explain with an example.

a= 10

console.log(a)

var a

this will not give you error

3. Does let get hoisted?

let gets hoisted but remain in the Temporal Dead Zone (TDZ) until their declaration is executed.

Explain with an example.

a= 10

console.log(a)

let a

this will give you reference error

4. Does const get hoisted?

const gets hoisted but remain in the Temporal Dead Zone (TDZ) until their declaration is executed.

Explain with an example.

console.log(a)

const a= 10

this will give you reference error

5. What is the Temporal Dead Zone (TDZ)?

The Temporal Dead Zone is the period between entering a scope and executing the declaration of a let or const variable. Accessing the variable during this period throws a ReferenceError.

6. Difference between var, let and const during hoisting.

var has a function scope while let and const has block scope and var gets hoisted to the top of the code while let and const doesn't

7. Are Function Declarations hoisted?

yes, if i execute a function before it's declaration then it won't give you error so it's gets hoisted because of this it doesn't throw error

Explain.

tset()

function test(){
console.log('test')
}

8. Are Function Expressions hoisted?

no, because it uses the variable to store the function reference and as i told the assignment don't get hoisted only the decalration

Explain.

let dummy = function(){
console.log('test')
}

dummy()

9. What are the interview pitfalls related to hoisting?

nothing from my side 

10. Write one example each for:

already written below each question

var
let
const
Function Declaration
Function Expression
