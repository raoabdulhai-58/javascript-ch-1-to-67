// chapter 21-25

// task 1
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name :");
// var lastName  = prompt("Enter your last name :");
// var fullName = firstName + lastName;

// document.write("Hello Mr " + fullName);



// task 2
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mobName = prompt("Enter favorite mobile phone model ");
// var x = mobName.length;

// document.write("My favorite phone is : " + mobName + "<br>");
// document.write("length of string: " + x);



// task 3
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

//  var str = "pakistan";
//  var x = str.indexOf('n');

//  document.write("String : " + str + "<br>");
//  document.write("Index of n " + x);



//task 4
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var str = "Hello World";
// var x = str.lastIndexOf('l');

//  document.write("String : " + str + "<br>");
//  document.write("Last Index of l : " + x);



// task 5
// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// var str = "Pakistani";
// var x = str.charAt(3);

//  document.write("String : " + str + "<br>");
//  document.write("Character at Index 3 : " + x);



// task 6
// 6. Repeat Q1 using string concat() method.


// var firstName = prompt("Enter your first name :");
// var lastName  = prompt("Enter your last name :");
// var fullName = firstName.concat(lastName);

// document.write("Hello Mr " + fullName);



// task 7 
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser

// var str = "Hyderabad";

// document.write("City : " + str + "<br>");

// for (let i = 0; i < str.length; i++) {
//   if(str.slice(i,i+5) === "Hyder"){
//     str = "Islam" + str.slice(i+5);

//     document.write("After Replacement : " + str);
//   }
  
// }




// task 8
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket andfootball together.";

// message = message.replace(/and/g, " & ");
// document.write(message);



// task 9 
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var str = "472";
// document.write("Value : " + str + "<br>");
// document.write("Type : " + typeof(str) + "<br>");

// var num = Number(str);
// document.write("Value : " + num + "<br>");
// document.write("Type : " + typeof(num) + "<br>");



// task 10 
// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var str = prompt("Enter Ur Input :");
// document.write("User Input : " + str + "<br>");

// var newStr = str.slice(0,1);
// var newStr = newStr.toUpperCase();
// str = str.slice(1);

// document.write("Title Case : " + newStr + str + "<br>");



// task 11
// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// document.write("Number : " + num + "<br>");

// var str = num.toString().replace(".","");
// document.write("Result : " + str + "<br>");



// task 12
// 3. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var userName = prompt("Enter your name ");
// var a = [];

//   for (let i = 0; i < userName.length; i++) {
//     a[i] = userName[i].charCodeAt();
//     if (a[i] === 33  ||  a[i] === 44  || a[i] === 46 || a[i] === 64) {
//      alert("Plz Enter a valid username");
     
//     }
//     userName = prompt("Enter your name ");
//   }
  
//   document.write(userName);



//task 13
// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// var A = ["cake", "apple pie", "cookie","chips", "patties"];
// var search = prompt("Welcome to The Rao bakery . what do u want order sir / maa'm");
// search = search.toLowerCase();
// for (let i = 0; i < A.length; i++) {
  
//   if (A[i]  === search ) {
//     document.write(search +" is <b>available</b> at index " + A.indexOf(search) + " in our bakery");
//     break;
//   }
//   else {
//     document.write( "We are sorry " + search +" is <b>not available</b>  in our bakery");
//     break;
//   }
  
// }



// task 15

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// var password = prompt("Enter your password");
//  var n = password.charAt(0);
//   n = parseInt(n);

//    if (password.search(/[0-9]/) === -1 ) {
//      alert("password must contain number");
//    }
//    else if (password.search(/[a-z A-Z]/) === -1) {
//     alert("password must contain characters");
//    }
//    else if (!isNaN(n)) {
//     alert("password must not start with number");
//    }
//   else if (password.length < 6) {
//     alert("password must contain at 6 letter");
//   }
//    else{
//      document.write("you have entered a valid password");
//    }





// task 16
// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// university = university.split("");
// for (let i = 0; i < university.length; i++) {
//   document.write(university[i] + "<br>");
// }



// task 17
// 17. Write a program to display the last character of a user
// input

// var x = "Pakistan";
// var n = x.charAt(x.length -1);

// document.write("User Input "+ x + "<br>");
// document.write("Last Charater of Input : "+n);




// task 18
// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// var str = "The quick brown dog fox jumps over the lazy dog";
// str1 = str.toLowerCase();
// var word = "the";
// var n = 0;
// var newstr = [];
// newstr  = str1.split(" ");
 
// for (let i = 0; i < newstr.length; i++) {
//   if (word === newstr[i]) {
//     n++;
//   }
// }
// document.write("Text : " + str + "<br>");
// document.write("There are " + n + " occurrences (s) of word 'the'");





// chapter 26-30

//task 1
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var num = +prompt("Enter a positive number");
 
// document.write("Number : " + num + "<br>");
// document.write("Round of value : " + Math.round(num) + "<br>");
// document.write("Floor value : " + Math.floor(num) + "<br>");
// document.write("ceil value : " + Math.ceil(num) + "<br>");



// task 2 
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var num = +prompt("Enter a Negative number");
 
// document.write("Number : " + num + "<br>");
// document.write("Round of value : " + Math.round(num) + "<br>");
// document.write("Floor value : " + Math.floor(num) + "<br>");
// document.write("ceil value : " + Math.ceil(num) + "<br>");





// task 3
// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var num = -4;
// document.write("the absolute value is -4 is : " + Math.abs(num));




// task 4
// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var n = Math.random();

// document.write(Math.floor((n * 4 ) + 1) + "<br>");
// document.write(Math.floor((n * 6 ) +1));



// task 5
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


// var x = Math.random() * 2 ;
// x = Math.floor(x);
// if (x === 0) {
//   document.write("Its heads")
// }
// else {
//   document.write("Its tails ")
// }



// task 6
// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var x = Math.random() * 100 ;
// x = Math.floor(x);

// document.write("Random number between 1 to 100 : " +x)



// task 7
// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// var weight = prompt("Enter ur Weight");
// weight = parseFloat(weight);

// document.write("Your weight is : " + weight + "kgs");





// task 8
// var inp = +prompt("Enter a Number between 1 to 10");
// var num = Math.random() * 10;
// num = Math.floor(num);

// if (inp === num) {
//   document.write("Congratulation! <br>")
//   document.write("ur input is " + inp + "<br>");
//   document.write("Random number is " + num + "<br>");
// } else {
//   document.write("Try again! <br>")
//   document.write("ur input is " + inp + "<br>");
//   document.write("Random number is " + num + "<br>");
// }







// chapter 31-34


// task 1
// 1. Write a program that displays current date and time in
// your browser

// var date = new Date();

// document.write(date);



// task 2
// 2. Write a program that alerts the current month in words.
// For example December
// var months = ["jan", "feb", "mar", "april", "may", "jun", "july", "aug", "sep", "oct", "nov" , "dec"];
// var date = new Date();
// var month = date.getMonth();
// var currentMonth = months[month];


// document.write("current Month is : " + currentMonth );



// task 3
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// var date = new Date();
// var day = date.getUTCDay()
// var currentday = days[day];

// currentday = currentday.slice(0,3);

// alert("Todayday is : " + currentday );



// task 4
// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// var days = ["monday", "tuesday", "wednesday", "thursday","friday", "saturday", "sunday"];
// var date = new Date();
// var day = date.getUTCDay()
// var currentday = days[day];

// var x = currentday.slice(0,3);

// document.write(x);
// if (x === "sat" || x === "sun") {
//   alert("Its funday")
// }
// else {
//   alert("Its a " + x);
// }



// task 5 
// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”

// var date = new Date();

// var currentDate = date.getDate();


// if (currentDate < 16) {
//   document.write("First fifteen days of month");
// }
// else {
//   document.write("Last fifteen days of month");
// }



// task 6
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


// var today = new Date();
// var doomsday = new Date("january 1,1970");
// var mstoday = today.getTime();
// var msdoomsday = doomsday.getTime();
// var msdiff =  mstoday - msdoomsday;

// var Ddiff = msdiff / (1000 * 60);

// document.write("Current Date : " + today + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + msdiff + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + Ddiff);





// task 7
// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var date = new Date();
// var currentTime = date.getHours();

// if (currentTime <= 12) {
//   alert("Its " + currentTime + " AM");
// }
// else
// {
//   alert("Its " + currentTime + "PM");
// }




// task 8

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var date = new Date();
// date.setFullYear(2020);
// date.setMonth(11);
// date.setDate(31);

// document.write(date);




// task 9
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?

// var today = new Date();
// var pstday = new Date("june 18,2015");
// var mstoday = today.getTime();
// var mspstday = pstday.getTime();
// var msdiff =  mstoday - mspstday;

// var Ddiff = msdiff / (1000 * 60 * 60 * 24);


// document.write(Math.floor(Ddiff) + " Days has passed since 1st Ramazan, 2015"  + "<br>");



// task 10
// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.


// var today = new Date();
// var pstday = new Date("january 1,2020");
// var mstoday = today.getTime();
// var mspstday = pstday.getTime();
// var msdiff =  mstoday - mspstday;

// var Ddiff = msdiff / (1000 * 60 * 60);


// document.write("On Reference date " + today + "," + Ddiff + "seconds had passed since the begning of 2020");




// task 11
// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

//  var today = new Date();

//  document.write("current date: " + today + "<br>");
//  today.setHours(-1);
//  document.write("1 hour ago , it was: " + today + "<br>");



// task 12
// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var today = new Date();

//  document.write("current date: " + today + "<br>");
//  today.setFullYear(1920);
//  document.write("100 years back , it was: " + today + "<br>");



// task 13
// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var age = prompt("Enter your age");

// var today = new Date();
// var ytoday = today.getFullYear();
// var ydiff = ytoday - age; 

// document.write("Your age is : " + age + "<br>");
// document.write("Your birthday year is : " + ydiff)





// task 14
// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// var customerName = "Rao Abdulhai";
// var months = ["jan", "feb", "mar", "april", "may", "jun", "july", "aug", "sep", "oct", "nov" , "dec"];
// var date = new Date();
// var month = date.getMonth();
// var currentMonth = months[month];
// var numberOfUnits = 410;
// var chargePerUnit = 16;
// var netAmmount = numberOfUnits * chargePerUnit;
// var latePay = 350;
// var grossAmount = netAmmount + latePay;


// document.write("<h1> K-Electric Bill </h1>");
// document.write("Customer Name : " + customerName + "<br>");
// document.write("Current Month : " + currentMonth + "<br>");
// document.write("Number of units : " + numberOfUnits + "<br>");
// document.write("Charges per unit : " + chargePerUnit + "<br><br>");
// document.write("Net Amount Payable (within Due Date) : " + netAmmount.toFixed(2)+ "<br>");
// document.write("Late Payment Surcharge : " + latePay + "<br>");
// document.write("Gross Amount Payable (after Due Date) : " + grossAmount.toFixed(2) + "<br>");





//chapter 35-38

//task 1
// 1. Write a function that displays current date & time in your
// browser.


// function date(){
//   var today = new Date();

//   document.write(today);
// }

// date();





// task 2
// 2. Write a function that takes first & last name and then it
// greets the user using his full name.


// function fullname(){
//   var firstName = prompt("Enter your First name");
//   var lastName = prompt("Enter your Last name");

//   document.write("your name is : " + firstName + lastName);
// }

// fullname();




//task 3
// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var add;

// function sum(num1 , num2){
//     add = num1 + num2;
//     document.write(add);
// }
// sum(num1 , num2);




// task 4
// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var num1 = +prompt("Enter first number");
// var oprtr = prompt("Enter a operator");
// var num2 = +prompt("Enter second number");


// function sum(num1, oprtr, num2){
  
//   switch (oprtr) {
//     case '+' :
//       return add = num1 + num2;
//       break;
//     case '-' :
//       return add = num1 - num2;
//       break;
//     case '*' :
//       return add = num1 * num2;
//       break;
//     case '/' :
//       return add = num1 / num2;
//       break;
//     case '%' :
//       return add = num1 % num2;
//       break;

//     default:
//       document.write("operator is invalid")
//       break;
//   }
  
// }
// var add = sum(num1, oprtr, num2);
// document.write(add);



//task 5
//5. Write a function that squares its argument.

// function square(x, y){
   
//    document.write(Math.pow(x,2) + "<br>") ;
//    document.write(Math.pow(y,2));
//   }

// square(4,3)



// task 6
//6. Write a function that computes factorial of a number.

// var x = 1;
// function fact(n) {
//     for (let i = 1; i <= n; i++) {
//        x *=  i;
//       document.write( "the factorical of " + i + " is " + x + "!<br>");
//     }
// }
// fact(10);



// task 7
// 7. Write a function that take start and end number as inputs
// & display counting in your browser.


// var startNum = +prompt("enter start number");
// var endNum = +prompt("enter end number");

// function count(startNum,endNum) {
//   for (let i = startNum; i <= endNum; i++) {
//     document.write(i + "<br>"); 
//   }
// }
// count(1,10);


// task 8
// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// var base = +prompt("Enter base ");
// var perpendicular = +prompt("Enter perpendicular ");
// var hypotenuse;
// function hyp(base, perpendicular){
//   function squr() {
//       hypotenuse = Math.sqrt(Math.pow(base,2) + Math.pow(perpendicular,2));
//       document.write("hypotenus = " + "(base)^2" + " + "  + "(perpendicular)^2" + "<br>");
//       document.write("hypotenus = " + base + " +  "  + perpendicular + "<br>");
//       document.write("hypotenus = " + hypotenuse);
//   }
//   squr();
// }
// hyp(10,20);




// task 9
// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// var width = 5;

// function area(width,height) {
//     document.write("Area " + width * height);
// }
// area(width,10)




// task 10
// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// var name = "madam";
// var check = "";
// function paldrm() {
//   for (let i = name.length-1 ; i >= 0 ; i--) {
//     check +=  name[i];
//   }
//   if (name === check) {
//     document.write(name +" is a palindrome word");
//   }
//   else {
//     document.write(name + " is not a palindrome word");
//   }
// }
// paldrm();




// task 11
// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function x(str) {
//   str = str.split(" ");

//     for (let i = 0, x = str.length; i < x; i++) {
//          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }

//     return str.join(" ");
// }
// var newstr = x('the quick brown fox');
// document.write(newstr);





// task 12
// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function x(str) {
//  var  words = str.split(" ");

 
//   var size = 0;

//    for (let i = 0; i < words.length; i++) {
//      if (words[i].length >= size) {
//        size = words[i].length;
//        str = words[i]; 
//      }     
//    }
     
//     return str;
// }
// document.write('String is : web development tutorial' + "<br>")
// document.write("The largest word in a string is : " + x('web development tutorial'));




// task 13
// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


// function x(str, letter) {
//   var str = str.toLowerCase();
//   var count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//           count++;
//         }
//        x = count;
//     }
//     return x;
// }
// document.write("String is : JSResourceS.com <br>");
// document.write(" occurrences of 'o'  is  : " + x('JSResourceS.com', 'o'))




// task 14 
// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


// function Circumference(radius) {
//      circumferenceOfCirlce = 2 * 3.14 * radius;
//     circumferenceOfCirlce = circumferenceOfCirlce.toFixed(2);
//      return circumferenceOfCirlce;
// }

// function Area(radius) {
//   areaOfCircle = 3.14 * Math.pow(radius,2);
//   return areaOfCircle
// }

// document.write("The Circumference of circle is : " + Circumference(20) + "<br>");
// document.write("The Area of circle is : " + Area(20));