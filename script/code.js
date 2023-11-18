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
    surname : 'Shawn',
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
*Arithmetic * , + , - , /,  // example ; let a = 3 , let b = 2 ----- let c = a + b
 
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


// LOOP : for, while, do while, foreach, for in,  for off

/* a loop is a function */
// initialiasing a variable --- semi-colon (;) then your conditioning -- increments( the 'steps' that you are taking , basically how many numbers you want to loop at a time)

//for (let i=10; i >= 0; i--) {
   // console.log(i);  // displays the numbers in your loop
    // other way is to chang your conditioning - (let i=0; i <= 10; +=2) --- how to display your even numbers

   //if ( i % 2 == 0){    // how to display the even number -- we dont want a remainder so we use 0
   //     console.log(i);    // if you have multiple if statements you need to use curly bracket
    //} 
                            // [Ternary Operator]

                  //          for (let i=10; i >= 0; i--) -- if you want to reverse the numbers start from 10 to 0
//}  //      

//debugger                     // test the code if its working --- use key word debugger
//for (let i=0; i <= 10; i++ ) {                  // loop displays from 0-10 --- we want to start at 5 --
   // console.log(i);
    //if(i == 5) {             // break can only use loop in a for loop
     //  break
   // }                    // skip is the same as continue --- allows you to skip the file
                     
   
  //  console.log(i)
//}                               
//function numbers(){

   // let numbers = [12, 18, 11, 5, 8, 2];
    
   // function numbers()

   
   /* WHAT WE WANT TO DO                      
   we want to capture the middle values 


   WHAT WE KNOW 
   - its an array 
   - we need to create an if statement 
   -




   // let numb = [12, 18, 11, 5, 8, 2]      // middle start + end /2 -- in order to find the middle value
   // console.log(length);



16Nov

pre increments - access the value immediately and increases the value 
pro increments - accesses the value v


*/  //

/*for (let i = 0; i<=10; i++){
    if(1==5)
    continue           // skips the value of 5 -- continue skips the value
}

let cnt = 0
while(cnt <= 10){
    console.log(cnt);
    cnt++ 
}

/* different approaches of solving a problem
 for loop - you know the data that you have
 while loop - you don't know the data that has a codition
do while - the condition is after the text

do{
    console.log(cnt);
    cnt++
}while(cnt <= 0)*/

//let numbers = [ 12, 18, 11, 5, 2, 8];
/*for (let i =0; i<numbers.length; i++){
    console.log
    (`${i} => ${numbers[i]}`);
}*/

//for each is an array method ---- 

//numbers.forEach((number, i)=>{     // forEach loop accesses each and every element
 //   console.log(number, i);
//})

//numbers.forEach((number,i)=>{
 //   console.log()
//})


// another way of doing it 

/* numbers.forEach(display)
functiondisplay(number) {
    cosole.log(number);
}*/

//the first argument is going to be a value then 2nd the index  3rd array


// while(true){}

/* A for loop recognises each and every value/ element within it 
and then while loop searches for the elements until theres an end what 

for(let i in numbers){
    console.log(i, numbers);        // in - index

}      // you need to select which is the best loop to select 

//for of

for( let number of numbers){
    console.log(numbers);

}*/

// let numbers = [12, 18, 12, 11, 5, 18, 2, 8, 2];
/*let unique = [] 
numbers.forEach((number)=>{                         
    if (!unique.includes(number)){               // checks through each element to start a new array of unique elements 
        unique.push(number)                  // it will skip through dublicate elements
    }
})*/
//a shorter method of returning only unique numbers
//console.log(Array.from(new Set(numbers)));       // set allows you to remove a duplication from an array -- and any data type 

// if there's no value for your variable it will be undefined


// declaration function 

/*function constName(firstname){                            // -- if theres no initial value it will take a default value (firstname= 'Ntokozo'
    console.log(`Name is ${firstName}`)   // ---- console.log(`First name is ${firstName || 'Ntokozo'}`);
}
constName()            // undefined because theres no initial value 
constName("Veve")   


// ANONYMOUS FUNCTION OR FUNCTION EXPRESSION

let test = function(numb1 + numb2){
    return numb1 + numb2
}

console.log(test(2,8))*/

// ANOTHER METHOD

/*(function(numb1, numb2){ 
    console.log(numb1 + numb2)

}) (3, 4)    // added them together*/


/*function repeat(limit) {
    let cnt = 0
    if(cnt < limit) {
    console.log(cnt);
    cnt++
   // repeat(limit--)
    }
    }
    repeat(10)*/

    function repeat(limit) {
        let cnt = 0
        if(cnt < limit) {
        console.log(cnt);
        cnt++
       // repeat(limit--)
        }
        }
        repeat(10)
       
   


