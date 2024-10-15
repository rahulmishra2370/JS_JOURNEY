const arr1 = ["rahul", "shubham", "aman"];

const arr2 = ["anjali", "palak", "vanshika", "baby"];

console.log(arr1.push(arr2)); // it adds new elemnt to the array and returns the length of the array which is now formed
console.log(arr1); // those new elements are added to the existing array

const arr3 = ["car", "bike", "tank"];
const arr4 = ["aeroplane", "submarine", "helicopter"];

console.log(arr3.concat(arr4)); //Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// now we will study the best way to combine arrays

//spread operator

/* Concatenating arrays.
Copying arrays without reference issues.
Merging objects easily.
Passing multiple arguments to functions dynamically.*/

const phones1 = ["iphone", "samsung", "apple"];
const phones2 = ["redmi", "micromax", "vivo"];
const phones3 = ["lava", "red cherry001"];

console.log(...phones1, ...phones2, ...phones3);

const allphones = [...phones1, ...phones2, ...phones3];
console.log(typeof allphones);

// is array

//The Array.isArray() method in JavaScript is a built-in function used to determine whether a given value is an array.
const tellme = Array.isArray("rahul");
console.log(tellme);

// from array

const createarr = Array.from("hello ji namaste");
console.log(createarr);

// Array.of method

/* The Array.of() method is a convenient way to create arrays in JavaScript
 with various types and numbers of elements. 
 It provides clarity and avoids some pitfalls associated with the traditional Array constructor, 
 making it a useful addition to the language's array handling capabilities.
*/

const allarr = Array.of(arr1, arr2, arr3, arr4, phones1, phones2, phones3);
console.log(allarr);
