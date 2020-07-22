//chapter 12 - 13

//task 1

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var num1 = prompt("enter a number or string");

// if(isNaN(num1)){
//    var a  = num1.charCodeAt();
//   if(a >= 65 && a <=90){
//     document.write(num1 + " is a uppercase <br/>");
//   }
//   else if (a >= 97 && a <= 122){
//     document.write(num1 + " is a lowercase <br/>");
//   }
// }
// else{
  
//  document.write(num1 + " is a number <br/>");
// }


// task 2

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

  // var num1 = +prompt("Enter First Number");
  // var num2 = +prompt("Enter Second Number");
  
  // if (num1 > num2) {
  //    document.write( num1 + " is greater than " + num2);
  // } else if (num1 < num2) {
  //   document.write(num2 + " is less than  " + num1);
  // }
  //   else if (num1 === num2){
  //     document.write(num1 + " and " + num2   + " is equal");
    
  // }

//  task 3

//   3. Write a program that takes input a number from user &
//  state whether the number is positive, negative or zero.

// var  x = +prompt("Enter a Number");

// if (x > 0) {
//   document.write( x  + " its a positive Number"); 
// }
// else if (x < 0) {
//   document.write(x  + " its a Negarive Number");
// }
// else if (x === 0) {
//   document.write(x  + " its a Zero");
// } 

// task 4

// 4. Write a program that takes a character (i.e. string of
//   length 1) and returns true if it is a vowel, false otherwise

  // var ch = prompt("Enter a Character");
  // ch = ch.toLowerCase();
  // if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
  //   document.write("true");
  // } else {
  //   document.write("false");
  // }



//   task 5

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var password = "therao123";

// var userPassword = prompt("Enter your password");

// userPassword = userPassword.toLowerCase();

// if (userPassword === "") {
//   userPassword = prompt("Please Enter your password");
//   userPassword = userPassword.toLowerCase();
// } 
// if (password === userPassword) {
//   document.write("Correct!!!");
// } else {
//   document.write("InCorrect!!!");
// }



// task 6


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day"
//  document.write( greeting);
// }
// else{
// greeting = "Good evening";
// document.write(greeting)
// }


//task 7

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time = +prompt("Enter time in 24 hours format");

// if (time >= 0000 && time < 1200 ) {
//   document.write("Good Morning")
// }
// else if (time >= 1200 && time < 1700 ) {
//   document.write("Good Afternoon");
// }
// else if (time >= 1700 && time < 2100 ) {
//   document.write("Good Evening");
// }
// else if (time >= 2100 && time <= 2359 ) {
//   document.write("Good Night");
// }

