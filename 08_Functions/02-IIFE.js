// IIFE - Immediately Invoked Function Expressions
// (function defination)(exicution)

(function abca(){
    console.log(`DB connected`);
})(); // ; must needed

// arrow function
((name) => {
    console.log(`DB connected ${name}`);
})("Kallol");