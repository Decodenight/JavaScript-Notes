let x = 5 // Global scope

function function1() {
    let x = 10 // local (if this line is comment it takes Global scope value)
    console.log(x);
}

function1(); // 10
console.log(x); // 5 (it can't take local scope value)