// console.log("1" > 0);
// console.log(1 > "0");
// here what compariso operator did is that it automatically convert the value of string into number and then start the compariosn

// console.log(null=0)  bhai ye cheeezz not allowed in js
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);
console.log(null <= 0);
console.log(null <= 0);
// here what happend is that the value of null is empty means there is nothing but a memory created in the computer for this ek dabba ban gya hai
// jo ki khai hia toh uss khali cheez ka zero se bada hona aur chota hona makes no sense means false
// but uss khali cheez ka zero se equal ya bada hona kuch sense create krta hai isilye true
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//STACK(primitive) and HEAP(non primitive)
/* so in stack we will have the copy of our data types all primitve data types gives us copy 
while in the case of heaps we have the original data values we directly change them no their copies*/

let names1 = "rahul name in 1";
let names2 = names1;
names2 = "rahul in a new state";
console.log(names1);
console.log(names2);
// here we can see that there is no change in the original value only a  copy created that changes and org remains the same

let obj = {
  name: "rahul",
  age: 23,
  username: 123,
};
console.log(obj.username); // before change user nmae :123

obj.username = 321; // here edit is done

console.log(obj.username); // here value also change and updated in the heap
