/// here we learn more about the objects in the javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Accessing the method
console.log(person.fullName()); // Output: John Doe
