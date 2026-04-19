//Create an object called myProfile with at least 4 properties: name, age, country, and hobby.
//  Then write a function displayProfile(person) that logs a sentence describing the person using their properties.

let myProfile = {
    name :  "Chichi",
    age : 30, 
    country : "Nigeria",
    hobby : "Coding"
}
function displayProfile (person){
    console.log(`These are my details: my name is  ${person.name}, i am ${person.age} years old, i am from ${person.country}, and my best hobby is ${person.hobby}.`);
}
displayProfile(myProfile)