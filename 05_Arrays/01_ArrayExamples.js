let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: cherry


let animals = ["cat", "dog", "rabbit"];

// Add element to the end
animals.push("elephant");
console.log(animals);  // Output: ["cat", "dog", "rabbit", "elephant"]

// Remove the last element
animals.pop();
console.log(animals);  // Output: ["cat", "dog", "rabbit"]

// Add element to the beginning
animals.unshift("horse");
console.log(animals);  // Output: ["horse", "cat", "dog", "rabbit"]

// Remove the first element
animals.shift();
console.log(animals);  // Output: ["cat", "dog", "rabbit"]


let colors = ["red", "green", "blue", "yellow"];

// Remove 1 element from index 1 and add 2 new elements
colors.splice(1, 1, "orange", "purple");
console.log(colors);  // Output: ["red", "orange", "purple", "blue", "yellow"]

// Get a portion of the array (from index 1 to 3, but not including index 3)
let newColors = colors.slice(1, 3);
console.log(newColors);  // Output: ["orange", "purple"]


// ForEach method
let numbers = [10, 20, 30, 40];

numbers.forEach(function (num) {
  console.log(num * 2); // Output: 20, 40, 60, 80
});