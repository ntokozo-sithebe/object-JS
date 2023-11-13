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

//let numbers = [ 9, 8, 3]       
//console                                 // 'split' allows you to converts it into an array 
                                        


// CREATING AN OBJECT - 

// YOU NEED A CURLY BRACKET - A KEY VALUE 
// KEY - THE NAME OF AN OBJECT
// VALUE - CAN BE ANY DATA --------- WHAT SEPARTES THE KEY AND VALUE IS A COLON 


/*let person = {
    name : 'Peter',
    surname : ' Shawn',
    age : 30,
    subjects: ['HTML', 'CSS3', 'JavaScript']
}
console.log(person);       
// dot notation allows us to seee the properties/keys/features of the object

console.log(person.age);
console.log(Object.keys(person));
console.log(Object.values(person)); // use a comma after your value
square notation
console.log(person['surname']) -- another way to display your properties using square notation */

//specifically want to display the last element
//console.log(person.subject.at(-1))


//EXAMPLE

/*let students = [                          // we created an array within an oject 
                                        // object has curly brackets and array has square brackets
    {
        name: 'Peter',
        surname: 'John'
    },
    {
        name: 'Ntokozo',                  // {the devil is in the details - look}
        surname: 'Sithebe' 
    }
] 
console.table(students);   // displays the index in a table content */

//Just to display the keys
// displays just the keys of the object
// console.log(Object.key(person)) --  CAPITAL O -- person is the argument and gives you the index of your arrays

// if you want to display on your values
//console.log(Object.values(person))-- Displays the values of the object 


/*WHEN CAN WE USE AN ARRAY AND WHEN CAN WE USE AN OBJECT ?
Array - is the collection of data 
Object - represents and describes a thing, place or person -- such as a phone, car, etc-
------------------------------------------------------------------

OPERATORS
*Arithmetic * , + , - , /,  // eaxmple ; let a = 3 , let b = 2 ----- let c = a + b
 
*Assignment =, +=, /=,   // example from above continued : a += b
console.log(a)


multiplication and division take precedence !!!!! take priority over additioal and subtraction

*Comparison == , ===, >= , <, // compares 2 values

*Logical && ,           // when you want to combine conditions */

//EXAMPLE 
//let salary = R7000
//let bonus = R2000
//let perfomance = false

/*If (salery > 5000){
    console.log(salary + bonus);
}else{
    console.log(salary); // outcome salary = R5 000 */
//}

/*if (salary < 5000){
    console.log("your salary is below R5000")
}else if( salary > 5000){
    console.log(salary + bonus);
}else{
    console.log(`Your salary is R${salary}`)
}*/


//NESTED IF STATEMENT 
                    //outer if statement 
/* if (salary > 5000)                           // outer statement needs to be true in order to access the inner statement
                   // inner if statement
if (perfomance){
    console.log(salary + bonus)

}else{
    console.log( `You didn't perform well / n your salary is R${salary}`)
} else {
    console.log("Your salary is less than R5000")
}*/

//*Conditional 
//*Type Operator
//---------------------------------------------------------------


/*let marks = 90;
switch (marks) {         // variable () want to evaluate the veriable
    case 100:
        console.log("A+")
        break;
        case 90:                                                 
            console.log('A')           // if your variable is a string then your case also needs to be a string
         break;
        default:
            console.log("Other")                                     //  else is the same as default
        break

}    */



