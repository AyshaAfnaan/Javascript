/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/
console.log("\n Numbers: Can be numbers\nstrings: Sequence of characters should be mentioned within "", '', ``\n Boolean : Boolean reply can be expected in two type, true and false \n Undefined: If Text doesn't appear in variable then it gives the result as undefined \n null: we use null to empty the value from variable (i.e., let a = null) \n bigint: - \n Symbol: -");

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/
console.log("Variables are containers which is used to store the value using datatypes number, string, Boolean, null and undefined, variables can be described using ketword "let". For example: let a, variables should be in camelCase.");

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
console.log("\n-------------Exercise 3-------------\n");
let firstNumber = 12;
let secondNumber = 20;
let total = firstNumber + secondNumber;

console.log("addiion of two number:", total);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

console.log("\n-------------Exercise 4-------------\n");

let x = 12;
console.log("let x is:", x);

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/
console.log("\n-------------Exercise 5-------------\n");
let myName = "John Doe";
console.log("my name is", myName);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/
console.log("\n-------------Exercise 6-------------\n");

let y = 12;
let subtraction = x-y;
console.log ("subtraction of two number", subtraction);


/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

console.log("\n-------------Exercise 7-------------\n");

let name1= "john";
let name2= "John";
let verify = name1 === name2;

console.log("verify if name1 is equal to name2", verify);

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

console.log("\n-------------Exercise 8-------------\n");

let i =5;

if (i === 1){
    console.log("it is one");
}

if (i === 2){
    console.log("It is two");
}

if (i=== 3){
    console.log("It is three");
}

if (i===4){
    console.log("it is four");
}

if (i===5){
    console.log("it is five");
}


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

console.log("\n-------------Exercise 9-------------\n");

let examResult;
let passMark (examResult > 30)
 "pass" : "fail";
 console.log ("result:", passMark);
