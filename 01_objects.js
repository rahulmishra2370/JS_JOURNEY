<<<<<<< HEAD
// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "rahul",
  "full name": "rahul mishra",
  [mySym]: "mykey1",
  age: 18,
  location: "chandiarh",
  email: "rahul@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rahulmishra@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "rahulmishra@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
=======
// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "rahul",
  "full name": "rahul mishra",
  [mySym]: "mykey1",
  age: 18,
  location: "chandiarh",
  email: "rahul@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rahulmishra@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "rahulmishra@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
>>>>>>> 302bb53166cc6b2bfbf0094a0b1f20413a3c30be
