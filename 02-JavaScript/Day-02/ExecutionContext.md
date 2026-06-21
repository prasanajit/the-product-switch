Global Execution Context

A Global Execution Context is the first execution context created when a JavaScript program starts running. During its Memory Creation Phase, JavaScript allocates memory for variables and function declarations before executing the code. In a browser, the global object is `window`, and in Node.js, it is `global`.



Function Execution Context

A Function Execution Context is created every time a function is invoked. It has its own scope where memory is allocated for the function's variables, parameters, and inner function declarations before the function's code starts executing.



Memory Creation Phase

During the Memory Creation Phase, JavaScript allocates memory for all variables and function declarations. Variables declared with `var` are initialized with `undefined`, while function declarations are stored with their complete function definitions.


Code Execution Phase

After the Memory Creation Phase is complete, JavaScript enters the Code Execution Phase. During this phase, statements are executed line by line, variables receive their assigned values, and functions are called when encountered.


Call Stack

The Call Stack is a data structure that keeps track of function execution. Whenever a function is called, a new Function Execution Context is pushed onto the stack. Once the function finishes execution, its execution context is removed from the stack. Since the Call Stack follows the LIFO (Last In, First Out) principle, the most recently called function is completed first.