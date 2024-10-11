const number = -100;
console.log(Math.abs(number)); // isne humare number ko positive kr dia hai
//round
console.log(Math.round(2.76)); // iske method ke andar kya hua ki normal jaise hum approx lete hai wahi lenge
// ceil
console.log(Math.ceil(4.3)); // iske andar ceiling matlab chatt matlab highest value lange for approx
//floor
console.log(Math.floor(4.9999)); // jaise ki floor dikha hai hume means niche toh woh neeche wali value lega for approx

// random
console.log(Math.random()); // ye humko random value dega bw 0 and 1

// use case of random to genereate big numbers
console.log(Math.round(Math.random() * 10)); // aese hum aur bhi number generate kr lenge agar humber 10 se bade chaiye toh multipy kro 100 se amd so on
