/*****************    Variables      *****************/

let id = 1;
var name = "nisha";
const age = 12;
bloodGroup = "B";
let state;

// console.log(id);
// let id = 2;  /// Error ==== "SyntaxError: Identifier 'id' has already been declared"
// id = 2;
// console.log(id)


// console.log(name);
// var name = "himesh"
// console.log(name);
// name = "himi"
// console.log(name);


/*
Prefer not to use Var because of the issue in block scope and functional scope  
*/


// console.log(age); 
// const age = "himesh"  // Cannot redeclare block-scoped variable 'age'
// console.log(age);
// age = 12 //TypeError: Assignment to constant variable.
// console.log(age);


// console.log(bloodGroup);
// bloodGroup = "A+"
// console.log(bloodGroup)


// console.log(state) //undefined
// state = "MP"
// console.log(state)

console.log(id,name,age,bloodGroup,state)
console.table([id,name,age,bloodGroup,state]) //this statement will Print all the variables in a table