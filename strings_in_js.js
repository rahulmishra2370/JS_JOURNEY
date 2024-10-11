/*  this is a out dated method in modern synatx w don not write it like that we use string interpolaration techinque 
which is nothing but using of backticks in while writing our strings*/
const name = "rahul";
const surname = "mishra";
const fullname = name + surname;
console.log(fullname);
// this is how we do use in modern syntax of js
const newfullname = `my name is ${name} ${surname}`;
console.log(newfullname);
// now we will study about the various methods of strings that are provided to us by ECMA scripts
// remeber as we do changes in our string it will not modify our original string changes are done on a copy of string stack (primitive)
const superhero = "manoj kumar pandey";
console.log(superhero.toUpperCase());
console.log(superhero.at(6));
console.log(superhero.charAt(0)); // upper case mei convert hone ke baaad bhi small m diya return hence proved
console.log(superhero.indexOf("pandey"));
console.log(superhero.replace("pandey", "mishra"));
// slice method
console.log(superhero.slice(0, 6)); // last index hai usko ignore krke 5 tak cut karega aur return kargea
// split
console.log(superhero.split(" "));
console.log(superhero.startsWith("mishra"));
console.log(superhero.endsWith("pandey"));
//substring
console.log(superhero.substring(0, 6)); // 6 index ko ignore kiya 5 tak kata aur kate hue ko return kiaa
console.log(superhero.substring(6)); // isme kya hua ki 6 ke baad last index tak jo bacha sab kaat ke return kia
// trim
const superhero1 = "    manoj kumar pandey___     ";
console.log(superhero1);
console.log(superhero1.trim()); // trim start aur end ke faltu white spaces ko trim krke return krta hai new string org ko moidify nhi krta
