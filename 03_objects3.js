<<<<<<< HEAD
const coursepackage = {
  corsename: "ftiness guide",
  price: 999,
  courseinstructor: "Rahul Mishra",
};

// how we access the values of objects previously
coursepackage.corsename;
coursepackage.price;
coursepackage.courseinstructor;

// now we see how actually we access the value of ojects the dev way
const { courseinstructor } = coursepackage;
console.log(courseinstructor);

const { price } = coursepackage;
console.log(price);
const { price: paise } = coursepackage;
console.log(paise);
=======
const coursepackage = {
  corsename: "ftiness guide",
  price: 999,
  courseinstructor: "Rahul Mishra",
};

// how we access the values of objects previously
coursepackage.corsename;
coursepackage.price;
coursepackage.courseinstructor;

// now we see how actually we access the value of ojects the dev way
const { courseinstructor } = coursepackage;
console.log(courseinstructor);

const { price } = coursepackage;
console.log(price);
const { price: paise } = coursepackage;
console.log(paise);
>>>>>>> 302bb53166cc6b2bfbf0094a0b1f20413a3c30be
