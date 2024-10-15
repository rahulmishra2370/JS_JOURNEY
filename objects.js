// this is how we create the objects in js
const obj1 = {
  name: "rahul",
  surname: "mishra",
  age: 23,
  branch: "cse",
};

// this is how we can acess the objects in js

console.log(obj1.name);
console.log(obj1.surname);

// edit the objects

obj1.name = "shubham";
console.log(obj1.name);
// Object.freeze(obj1);
console.log(obj1); // here the last edition in the name was shubham and if i want to edit the name it wont happen as now my objet is freeze now

obj1.name = "amam"; // here i edit my name again but output wont change
console.log(obj1.name);

// important we can also access the data in the object by [] also
// the keys in the obj are strings js treat it as the strings so while using dot we dont need " " to acees but in case of [] we need that

// console.log(obj1[name]); this will thow error as we have dicussed earlier

console.log(obj1["name"]); // herre we have the expected output that we need

// symbols

const mysmb = Symbol("yo boi"); // created a symbol

obj1[mysmb] = "this is the value of the key that's name is mysmb"; // added the symbol as a key in obj 1
console.log(obj1[mysmb]);

// functions in the objects

obj1.greetings = function () {
  // here i created the object and pushed that in the obj where greeting is my key and function is my value
  console.log("namaste ji");
};

console.log(obj1.greetings());
