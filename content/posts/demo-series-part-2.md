---
title: 'Understanding JavaScript Basics - Part 2'
date: '2023-11-08'
slug: 'understanding-javascript-basics-part-2'
series: 'JavaScript Essentials'
part: 2
tags: ['JavaScript', 'Programming', 'Beginner']
featuredImage:
  publicURL: '/images/javascript-functions.jpg'
---

# Understanding JavaScript Basics - Part 2

Welcome back to our series on JavaScript Essentials. In this second part, we'll explore functions and control flow in JavaScript.

## Functions

Functions are reusable blocks of code that perform a specific task. You can define a function using the `function` keyword:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Outputs: Hello, Alice!
```

## Control Flow

Control flow statements like `if`, `else`, and loops help manage the execution of your code:

```javascript
let number = 10;
if (number > 0) {
  console.log('Positive');
} else {
  console.log('Negative or Zero');
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Join us in Part 3 to learn about arrays and objects in JavaScript!
