# JavaScript Fundamentals

## Q1. Why does typeof null return "object"?

because it is an javascript error and has not been fixed because it will break the existing functionality

## Q2. Difference between == and ===

== only checks the both side values matches or not while === additionally checks for the trype also matches oth sides or not

## Q3. Difference between var, let and const

var is function scoped and can be acessible outside the block because of hoisting but let and const is block scoped and cannot be acessed out side the block.

## Q4. Explain Hoisting

Hoisting is a JS default behaviour where the declarations moves to the top of the current scope.

## Q5. Explain Closures with a practical example

function closure (b) {
  var a = 10;
  return function add(){
   return a + b;
  }
}

so here as you see the inner function can acess the parent function's varibales and can do operations using it so it's secured here and outer codes can not acess it 

basically it encapsulates it and protects it.

## Q6. What is Temporal Dead Zone?

When you use let and const as a variable declarion and acess it before it's declaration then you get reference error so that is called temporal dead zone where the system is not able to find it's source.

## Q7. Difference between null and undefined

Null type is a object while undefined is a type

As i told previousluy null has a memory space allocated and it stored in that memory location and we can point that memory location but undefined doesn't have this memory location allocated.'
