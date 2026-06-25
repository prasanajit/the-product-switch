1. What is a Closure?

closure is a Javascript concept where we can encapsulate the local varibale and only local functions can have access to this

2. Why do Closures work?

closures work because the inner function can have access to parent functions variables

3. When are Closures created?

A Closure is created whenever an inner function references variables from its outer scope. Even after the outer function finishes executing, JavaScript keeps the required lexical environment alive as long as the inner function still has a reference to it.

4. Can an inner function access variables from its outer function after the outer function has finished executing?

Explain why.

The inner function keeps a reference to the outer function's lexical environment, so it can still access those variables even after the outer function has finished executing.

5. What are practical uses of Closures?

manage a local state of a varibale, currying, memoize

6. Advantages of Closures.

Data privacy
State preservation
Function factories
Currying
Memoization

7. Disadvantages of Closures.

Higher memory usage
Possible memory leaks if closures retain unnecessary references

8. Write one example of a Closure.

function multiply() {
    let a = 10
    return function(){
        return a*10
    }
}

9. Write one real-world use case.

Private counters
Shopping cart state
Event handlers
Memoization cache

10. One interview question related to Closures.

Explain Closures with a practical example.