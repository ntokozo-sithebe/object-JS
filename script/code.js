/*let sentence = "l am going to work"
console.log(sentence);
console.log(sentence[0]);
console.log(sentence.at(-1)) // at(-1) shows the last character */

/*let size = sentence.length
console.log(size);
console.log(sentence[size-1]); // comperrs start counting from 0

console.log(sentence.slice(0,-1))
console.log(sentence.toUpperCase()) //to convert all characters to UpperCase
console.log(sentence.toLowerCase());
console.log(sentence.includes('work')) // if you want to indentify if the sentence has work is it -- which is true*/

// Object
// Everything in Java is an object

let numbers = [ 9, 8, 3]       
console                                 // 'split' allows you to converts it into an array 
                                        


// CREATING AN OBJECT - 

// YOU NEED A CURLY BRACKET - A KEY VALUE 
// KEY - THE NAME OF AN OBJECT
// VALUE - CAN BE ANY DATA --------- WHAT SEPARTES THE KEY AND VALUE IS A COLON 


let person = {
    name : 'Peter',
    surname : ' Shawn',
    age : 30,
    subjects: ['HTML', 'CSS3', 'JavaScript']
}
console.log(person);       
// dot notation allows us to seee the properties/keys/features of the object
console.log(person.age);
console.log(Object.keys(person));
console.log(Object.values(person));


let students = [                          // we created an array within an oject 
                                        // object has curly brackets and array has square brackets
    {
        name: 'Peter',
        surname: 'John'
    },
    {
        name: 'Ntokozo',
        surname: 'Sithebe' 
    }
] 
console.table(students);   // displays the index in a table content 

