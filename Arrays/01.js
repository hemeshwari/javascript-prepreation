const array = [1,2,3,4,5,6,7,8,9,10]
// console.log(array)

const array2 = ["nisha", "heme", "himi", "anushree"]
// console.log(array2)

const array3 = new Array(0,1,2,3,4,5,6,7,8,9,10);
// console.log(array3)

console.log(array3.length);
console.log(array3.indexOf(6))

console.log(array3.includes(9))
console.log(array3.includes(19))

console.log(array3.push(11))
console.log(array3) // [0,1,2,3,4,5,6,7,8,9,10,11]  // push() method adds the element at the end of the array
console.log(array3.pop()) // 11 // pop() method removes the last element from the array                                                                     

console.log(array3.unshift(-1)) // 11 // unshift() method adds the element at the beginning of the array
console.log(array3) // [-1,0,1,2,3,4,5,6,7,8,9,10]  
console.log(array3.shift()) // -1 // shift() method removes the first element from the array

console.log(array3.reverse()) // [10,9,8,7,6,5,4,3,2,1,0] // reverse() method reverses the array
console.log(array3.sort()) // [0,1,10,2,3,4,5,6,7,8,9] // sort() method sorts the array in ascending order
console.log(array3.sort((a,b) => b - a)) // [10,9,8,7,6,5,4,3,2,1,0] // sort() method sorts the array in descending order

console.log(array3.slice(2,5)) // [10,9,8] // slice() method returns the selected elements in an array, as a new array object
console.log(array3.splice(2,5)) // [10,9,8,7,6] // splice() method adds/removes items to/from an array, and returns the removed item(s)
console.log(array3) // [0,1,2,3,4,5,6,7,8,9]

console.log(array3.splice(2,5,10,11,12,13,14)) // [2,3,4,5,6] // splice() method adds/removes items to/from an array, and returns the removed item(s)
console.log(array3) // [0,1,10,11,12,13,14,7,8,9]

console.log(array3.concat(array2)) // [0,1,10,11,12,13,14,7,8,9,"nisha","heme","himi","anushree"] // concat() method is used to join two or more arrays
console.log(array3.join(" ")) // 0 1 10 11 12 13 14 7 8 9 // join() method joins the elements of an array into a string, and returns the string
console.log(array3.toString()) // 0,1,10,11,12,13,14,7,8,9 // toString() method converts an array to a string, and returns the result
console.log(array3.join(" ")) // 0 1 10 11 12 13 14 7 8 9 // join() method joins the elements of an array into a string, and returns the string

console.log(array3.fill(0)) // [0,0,0,0,0,0,0,0,0,0] // fill() method fills the specified elements in an array with a static value
console.log(array3.fill(1,2,5)) // [0,0,1,1,1,0,0,0,0,0] // fill() method fills the specified elements in an array with a static value

console.log(array3.map((x) => x * 2)) // [0,0,2,2,2,0,0,0,0,0] // map() method creates a new array with the results of calling a function for every array element
console.log(array3.filter((x) => x > 2)) // [2,2,2] // filter() method creates a new array with all elements that pass the test implemented by the provided function
console.log(array3.reduce((acc, curr) => acc + curr)) // 6 // reduce() method reduces the array to a single value
console.log(array3.every((x) => x > 2)) // false // every() method checks if all elements in an array pass a test
console.log(array3.some((x) => x > 2)) // true // some() method checks if any of the elements in an array pass a test
console.log(array3.find((x) => x > 2)) // 2 // find() method returns the value of the first element in an array that pass a test
console.log(array3.findIndex((x) => x > 2)) // 2 // findIndex() method returns the index of the first element in an array that pass a test
console.log(array3.includes(2)) // true // includes() method checks if an array contains the specified element
console.log(array3.indexOf(2)) // 2 // indexOf() method searches the array for the specified item, and returns its position
console.log(array3.lastIndexOf(2)) // 2 // lastIndexOf() method searches the array for the specified item, and returns its position
console.log(array3.toString()) // 0,0,2,2,2,0,0,0,0,0 // toString() method converts an array to a string, and returns the result
console.log(array3.join(" ")) // 0 0 2 2 2 0 0 0 0 0 // join() method joins the elements of an array into a string, and returns the string
console.log(array3.reverse()) // [0,0,0,0,0,2,2,2,0,0] // reverse() method reverses the array
console.log(array3.sort()) // [0,0,0,0,0,0,2,2,2,2] // sort() method sorts the array in ascending order
console.log(array3.sort((a,b) => b - a)) // [2,2,2,2,0,0,0,0,0,0] // sort() method sorts the array in descending order
console.log(array3.slice(2,5)) // [0,0,0] // slice() method returns the selected elements in an array, as a new array object
console.log(array3.splice(2,5)) // [2,2,2,2,0] // splice() method adds/removes items to/from an array, and returns the removed item(s)
console.log(array3) // [0,0,0,0,0]

console.log(array3.splice(2,5,2,3,4,5,6)) // [0,0,0,0,0] // splice() method adds/removes items to/from an array, and returns the removed item(s)
console.log(array3) // [0,0,2,3,4,5,6,0,0,0]


let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = arr1.concat(arr2)
console.log(arr3) // [1,2,3,4,5,6]

let arr4 = [...arr1, ...arr2]
console.log(arr4)

