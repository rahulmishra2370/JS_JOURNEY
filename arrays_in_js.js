// this is how we declare the arrays in js
const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// this is how we can also create a array
const arr = new Array(1, 2, 3, 4, 5, 6);
// console.log(arr);

//++++++++++++++++++++++++++++++++++++++++++
// now we learn some of the methods of arry

const arr1 = [0, 1, 2, 3, 4, 5];
arr1.shift(); // starting se array mei element ko remove krna shuru kr dega
console.log(arr1);
arr1.unshift(222); // starting mei array ke element mei add kr dega
console.log(arr1);

arr1.push(99);
console.log(arr1); // last mei add kr dega ek element

arr1.pop(); // last mei se ek element ko remove krwa dia
console.log(arr1);

// slice method

const newarr = [11, 22, 33, 44, 55, 66];
console.log("A:", newarr);
newarr.slice(1, 3);
console.log("after slice", newarr);

/*  Slice methdd mei 1 se 2 tak cut hoga 3 include nhi hoga aaur origianl array mei change nahi hoga*/

// splice

const newarr2 = [111, 222, 333, 444, 555, 666];

console.log(newarr2);

newarr2.splice(1, 3);
console.log("after splice:", newarr2);
/*  so mei splice mei kya hoga ki jo bhi number hn denge usko woh cut karega jaise 1,3 1 se 3 tak ke index ko cut karega 3 included
    and JO ORIGINAL ARRAY HOGA USKO BHI CHANGE KR DEGA*/
