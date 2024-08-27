/* ....Objects.... */


const car = { type: "flat", color: "white", weight: 500 };

console.log("This is feature in " + car.type + ", " + car.color + ", " + car.weight);

const car = { type: "flat", color: "white", weight: 500 };

console.log("this feature in " + car.color + ", " + car.type + ", " + car.weight);

/* ...... */
const person = {
    firstname: "sunil",
    lastname: "Rajput",
    age: 24,
    height: 5.11,
}

console.log("About myself" + person.firstname + ", " + person.lastname + ", " + person.age + ", " + person.height);

/* ....... New object properties */

const person2 = Object();


person.firstname = "Sunil";
person.lastname = "Rajput";
person.age = 24;
person.height = 5.11;


console.log(person.lastname +  "is" + person.age  + "year old");

