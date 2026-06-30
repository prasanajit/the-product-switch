1. What is the this keyword?

this refers to the object that is executing the current function. Its value depends on how the function is called, not where it is defined (except arrow functions).

2. How is this determined in JavaScript?

It is determined by the call site.

3. What does this refer to in the global scope?

in global scope it refers to window object

4. What does this refer to inside a regular function?

In a regular function, the value of this depends on how the function is called.

In a browser, in non-strict mode, this refers to the global object (window).
In strict mode, this is undefined.
If the function is called as an object method, this refers to that object.

5. What does this refer to inside an object method?

in object function it refers to the current object

6. What does this refer to inside an arrow function?

Arrow functions do not create their own this. Instead, they inherit this from the surrounding lexical scope.

7. How do call(), apply(), and bind() affect this?

all three of them takes the first argument as this which we want to point

8. Common interview mistakes related to this.

Thinking this always refers to the current object.
Thinking arrow functions have their own this.
Forgetting that this depends on how a function is called.
Forgetting that regular functions return undefined as this in strict mode.
Confusing call(), apply(), and bind().

9. Write one example of each case.

# Global Scope

### Code

```javascript
console.log(this);
```

### Output (Browser)

```text
Window
```

### Explanation

In the global scope of a browser, `this` refers to the `window` object.

---

# Regular Function

### Code

```javascript
function test() {
  console.log(this);
}

test();
```

### Output (Non-Strict Mode)

```text
Window
```

### Output (Strict Mode)

```javascript
"use strict";

function test() {
  console.log(this);
}

test();
```

```text
undefined
```

### Explanation

A regular function determines `this` based on **how it is called**.

- In non-strict mode, `this` refers to the global object (`window`).
- In strict mode, `this` is `undefined`.

---

# Object Method

### Code

```javascript
const user = {
  name: "Prasanjit",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

### Output

```text
Prasanjit
```

### Explanation

When a function is called as an object method, `this` refers to the object before the dot (`.`).

---

# Arrow Function

### Code

```javascript
const user = {
  name: "Prasanjit",

  greet: () => {
    console.log(this);
  },
};

user.greet();
```

### Output (Browser)

```text
Window
```

### Explanation

Arrow functions do **not** create their own `this`.

They inherit `this` from the surrounding lexical scope.

Since this arrow function is created in the global scope, it inherits the global `this` (`window`).

---

# call()

### Code

```javascript
function greet() {
  console.log(this.name);
}

const user = {
  name: "Prasanjit",
};

greet.call(user);
```

### Output

```text
Prasanjit
```

### Explanation

`call()` immediately invokes the function and explicitly sets the value of `this`.

---

# apply()

### Code

```javascript
function greet(city, country) {
  console.log(this.name, city, country);
}

const user = {
  name: "Prasanjit",
};

greet.apply(user, ["Bengaluru", "India"]);
```

### Output

```text
Prasanjit Bengaluru India
```

### Explanation

`apply()` works like `call()`, but it accepts the arguments as an array.

---

# bind()

### Code

```javascript
function greet() {
  console.log(this.name);
}

const user = {
  name: "Prasanjit",
};

const fn = greet.bind(user);

fn();
```

### Output

```text
Prasanjit
```

### Explanation

`bind()` does not execute the function immediately.

It returns a **new function** with `this` permanently bound to the specified object.

10. One interview question related to this.

What does this refer to inside an arrow function?
