const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach((item) => {
    console.log(item);
    return item
})

// console.log(values);

//--------------------- filter --------------------------

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumes = myNums.filter((num) => num > 4)

// arrow function
// const newNums = myNums.filter((num) =>{
//         return num > 4
// })

// console.log(newNums)

//----------------------- map ------------------------

const newNums = myNums.map((num) => num + 10)
console.log(newNums)

// arrow function 
// const newNums = myNums.map((num) => {
//     return num + 10 
// })
// console.log (newNums)


//------------------------- chaining ------------------------

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNumbers);