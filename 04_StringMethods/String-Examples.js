// Different ways to create strings
let firstName = "John"; // Using double quotes
let lastName = "Doe"; // Using single quotes
let fullName = `${firstName} ${lastName}`; // Using template literals

// Multi-line strings
let message = `
    Hello,
    This is a multi-line
    string using template literals
`;

// length property
let text = "JavaScript";
console.log(text.length); // 10

// toUpperCase and toLowerCase methods
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.toLowerCase()); // "javascript"

// indexOf and lastIndexOf method
let str = "Hello, world!";
console.log(str.indexOf("o")); // 4
console.log(str.lastIndexOf("o")); // 8

// Accessing characters
console.log(text[0]);      // "H"
console.log(text[1]);      // "e"

// Substring and slice methods
console.log(str.substring(7, 12)); // "world"
console.log(str.slice(0, 5)); // "Hello"

// Replace and replaceAll method
let sentence = "I love coding. Coding is fun!";
console.log(sentence.replace("Coding", "JavaScript")); // "I love coding. JavaScript is fun!"
console.log(sentence.replaceAll("Coding", "JavaScript")); // "I love JavaScript. JavaScript is fun!"

// trim method
let spaced = "   Hello, world!   ";
console.log(spaced.trim()); // "Hello, world!"

// split method
let fruits = "apple, banana, cherry";
let fruitArray = fruits.split(", ");
console.log(fruitArray); // ["apple", "banana", "cherry"]

// charAt and charCodeAt method
console.log(str.charAt(1)); // "e"
console.log(str.charCodeAt(1)); // 101

// includes and startsWith and endsWith methods
console.log(str.includes("world")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true

// Combining Methods
let phrase = "   JavaScript is amazing!   ";
let cleanPhrase = phrase.trim().toUpperCase();
console.log(cleanPhrase); // "JAVASCRIPT IS AMAZING!"