1. **Choosing the Right Loop**
- Use `for` when you know the number of iterations
- Use `while` when the number of iterations is unknown
- Use `for...of` for arrays and other iterables
- Use `for...in` for object properties
- Use array methods (`map`, `filter`, etc.) when transforming data.

#### for Loop
```js
// Basic syntax
for (initialization; condition; increment/decrement) {
    // code block
}

// Example
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs: 0,1,2,3,4
}
```

#### while Loop
```js
// Basic syntax
while (condition) {
    // code block
}

// Example
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

#### do...while Loop
```js
// Basic syntax
do {
    // code block
} while (condition);

// Example
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```
#### for...in Loop
```js
const person = {
    name: 'John',
    age: 30,
    job: 'developer'
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Outputs:
// name: John
// age: 30
// job: developer
```

#### for...of Loop
```js
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}
// Outputs:
// red
// green
// blue
```

#### Array Methods as Loops
```js
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => console.log(num));

// map - creates new array
const doubled = numbers.map(num => num * 2);

// filter - creates new array based on condition
const evenNumbers = numbers.filter(num => num % 2 === 0);

// reduce - reduces array to single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
```

#### Breaking and Continuing
```js
// break - exits the loop
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i); // Outputs: 0,1,2
}

// continue - skips current iteration
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(i); // Outputs: 0,1,2,4
}
```