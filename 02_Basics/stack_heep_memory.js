// Stuck (Primitive) => It's give you copy.  
// Heep (Non-Primitive) => It's give you reference.

//Example of Stack Memory:

let a = 'abc'
let b = a
b = 'bcd'

console.log(b); // bcd
console.log(a); // abc

//Example of Heep Memory:

let one = {
    email : 'user@google.com',
    name : 'Kallol'
}

let two = one
two.name = "Kumar"

console.log(one.name); // Kumar
console.log(one.email); // user@google.com
console.log(two.name); // Kumar
console.log(two.email); // user@google.com

