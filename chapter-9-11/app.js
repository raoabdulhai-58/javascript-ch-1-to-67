// task 1


// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city = prompt("Enter Your City Name : ");

//  if (city === "karachi") {
//   document.write("Welcome to city of light");
//  }


// task 2

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender :");

// if (gender === "male") {
//   document.write("Good Morning Sir");
// } else {
//   document.write("Good Morning Ma'am");
// }




// task 3


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var color = prompt("Enter a color :");

// if (color === "red") {
//   document.write("Must Stop");
// } 
// else if(color === "yellow")
// {
//   document.write("Ready to Move");
// } 
// else if(color === "green")
// {
//   document.write("Move Now");
// }
// else{
//   document.write("You Entered Wrong Color")
// }






// task 4


// 4. Write a program to take input remaining fuel in car (in
//   litres) from user. If the current fuel is less than 0.25litres,
//   show the message “Please refill the fuel in your car”

// var fuel = prompt("Enter Remaining fuel in your car :");

// if (fuel < 0.25) {
//   document.write("Please refill the fuel in your car");
// }



// task 5

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b.

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// c.

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// d.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//e.

//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// f.

//  if("car" < "cat"){
//   alert("car is smaller than cat");
//   }





// task 6

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:



// var eng = +prompt("Enter a marks of English");
// var urdu = +prompt("Enter a marks of Urdu");
// var math = +prompt("Enter a marks of Maths");

// var totalmarks = 100 * 3;
// var totalObtmarks = eng + urdu + math;

// var percentage = (totalObtmarks * 100) / totalmarks;

  // document.write("<h1> Mark Sheet </h1> ");
// if (percentage >= 80) {
//   document.write("Total marks : " + totalmarks + "<br>");
//   document.write("Obtained marks : " + totalObtmarks + "<br>");
//   document.write("Percentage  : " + percentage + "%" + "<br>");
//   document.write("Grade : A-one " +  "<br>");
//   document.write("Remarks : Excellent " +  "<br>");
// }
// else if (percentage >= 70) {
//   document.write("Total marks : " + totalmarks + "<br>");
//   document.write("Obtained marks : " + totalObtmarks + "<br>");
//   document.write("Percentage  : " + percentage + "%" + "<br>");
//   document.write("Grade : A " +  "<br>");
//   document.write("Remarks : Good " +  "<br>");
// }
// else if (percentage >= 60) {
//   document.write("Total marks : " + totalmarks + "<br>");
//   document.write("Obtained marks : " + totalObtmarks + "<br>");
//   document.write("Percentage  : " + percentage + "%" + "<br>");
//   document.write("Grade : B " +  "<br>");
//   document.write("Remarks : You need to improve " +  "<br>");
// }
// else if (percentage >= 50) {
//   document.write("Total marks : " + totalmarks + "<br>");
//   document.write("Obtained marks : " + totalObtmarks + "<br>");
//   document.write("Percentage  : " + percentage + "%" + "<br>");
//   document.write("Grade : Fail " +  "<br>");
//   document.write("Remarks : sorry " +  "<br>");
// }





// task 7


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var secretNo = 7;

// var no = +prompt("Guess the secret Number");

// if (no === 7) {
//   document.write("Bingo! correct");
// }
// else if (no === secretNo + 1) {
//   document.write("Close enough to the correct answer");
// }






// task 8


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var no = +prompt("Enter a Number");

// if (no / 3 === 0 ) {
//   document.write("the Number is divisible by 3");
// }
// else{
//   document.write("the Number is not divisible by 3");
// }







// task 9

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var no = +prompt("Enter a Number");

// if (no % 2 === 0) {
//   document.write("The Number is Even");
// }
// else{
//   document.write("The Number is Odd");
// }








// task 10

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool

// var temp = +prompt("Enter Temperature ");

// if (temp > 40) {
//   document.write("It is too hot outside.")
// }
// else if (temp > 30) {
//   document.write("The Weather today is Normal.")
// }
// else if (temp > 20) {
//   document.write("Today’s Weather is cool.")
// }
// else if (temp > 10) {
//   document.write("OMG! Today’s weather is so Cool")
// }





// task 11

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var a = +prompt("enter first no");
// var b = +prompt("enter Second no");
// var c =  prompt("enter operator (+, -, *, /, %)");

// if (c === "+") {
//   document.write("The Sum of " + a + " and  " + b + " is : " + (a  + b));
// }
// else if (c === "-") {
//   document.write("The subtration of " + a + " and  " + b + " is : " + (a - b));
// }
// else if (c === "*") {
//   document.write("The Multiplication of " + a + " and  " + b + " is : " + (a * b));
// }
// else if (c === "/") {
//   document.write("The Division of " + a + " and  " + b + " is : " + (a / b));
// }
// else if (c === "%") {
//   document.write("The Modulus of " + a + " and  " + b + " is : " + (a % b));
// }




