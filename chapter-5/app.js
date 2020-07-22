 //task 1


// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser

// var a = 5;
// var b = 10;
// var sum = a + b;
// document.write("sum of " +  a  + " and "  + b + " is " + sum);



// task 2

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.


// var a = 10;
// var b = 5;

// var subtraction = a - b;
// document.write("Subtraction of " +  a  + " and "  + b + " is " + subtraction +  "<br>");

// var multiplication = a * b;
// document.write(" Multiplication of " +  a  + " and "  + b + " is " + multiplication +  "<br>");

// var division = a / b;
// document.write(" Division of " +  a  + " and "  + b + " is " + division +  "<br>");

// var modulus = a % b;
// document.write(" Modulus of " +  a  + " and "  + b + " is " + modulus);



//task 3
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// var a ;

// document.write(" Declare a variable " + a + "<br>");

// var a = 5;
// document.write(" Value after variable declaration is: " + a + "<br>");

// var a = ++a;
// document.write("Value after increment is: " + a + "<br>" );

// var a = a + 7;
// document.write("Value after addition is: " + a + "<br>" );

// var a = --a;
// document.write("Value after decrement is: " + a + "<br>" );

// var a = a % 3 ;
// document.write("The remainder is : " + a + "<br>" );




//task 4

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. 

// var ticketPrice = "600" ;
// var buyingTicket = 5;

// document.write("Total cost to buy  " + buyingTicket + " tickets to a moive is " + ticketPrice * buyingTicket + "PKR");




// task 5

// 5. Write a script to display multiplication table of any
// number in your browser.

// var no = 4;

// document.write("Table of " + no + "<br>") ;
// for (var i = 1 ; i  <= 10 ; i ++) {
//   document.write(no + " X " + i  + " = " + no * i + "<br>") 
  
// }




//task 6

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var tempCelsius = 30;
// var tempFahrenheit ;


//  tempFahrenheit = (tempCelsius * 9 / 5 ) + 32;
//  document.write(tempCelsius + "oC is " + tempFahrenheit + "oF <br>");


//  tempCelsius = (tempFahrenheit - 32) * 5 / 9 ;
//  document.write(tempFahrenheit + "oF is " + tempCelsius + "oC");



// task 7

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser

// document.write("<h1> Shopping Cart </h1>");
// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var ShippingCharges = 100;
// var total = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + 100;

// document.write("Price of item 1 is " + priceItem1 + "<br>");
// document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
// document.write("Price of item 2 is " + priceItem2+ "<br>");
// document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
// document.write("Shipping charges is " + ShippingCharges + "<br>" + "<br>" + "<br>");

// document.write("Total cost of your order is " + total);



// task 8

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


// var totalMarks = 980;
// var marksObtained = 800;
// var percentage = (marksObtained * 100) / totalMarks;

// document.write("<h1> Mark sheet </h1>");
// document.write("Total Marks is : " + totalMarks + "<br>");

// document.write("Obtained Marks is : " + marksObtained + "<br>");

// document.write("Percentage is : " + percentage + "% <br>");





//task 9

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var usDollar = 10;
// var saudiRitals = 25;

// var totatCurrency = (usDollar * 104.80) + (saudiRitals * 28);

// document.write("<h1> Currency in PKR </h1>");

// document.write("Total Currency in PKR: " + totatCurrency);




//task 10

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var a = 2 ;
//   a = (((a + 5) * 10) / 2);

//   document.write("Result is : " + a);




//task 11


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// var currentYear = 2020;
// var birthYear = 1995;
// var age = currentYear - birthYear;

// document.write("<h1> Age Calculator </h1>");

// document.write("Current year is : " + currentYear + "<br>");
// document.write("Brith year is : " + birthYear + "<br>");
// document.write("Age is : " + age + "<br>");



// task 12

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

//  var circleRadius = 20;
//  var circumference = 2 * 3.142 * circleRadius;
//  var area = (3.142 * (circleRadius * 2));

//  document.write("<h1> The Geometrizer </h1>");

//  document.write("Radius of Circle is : " + circleRadius + "<br>");
//  document.write("The circumference is : " + circumference  + "<br>");
//  document.write("The area is : " + area  + "<br>");




//task 13

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

// var favoriteSnake = "Chocolate chip";
// var currentAge = 25;
// var maximumAge = 70;
// var amountPerDay = 3;

// var total = ((maximumAge - currentAge) * 3);

// document.write("<h1> The Lifetime Supply Calculator </h1>");
// document.write("Favorite snake is :" + favoriteSnake + "<br>");
// document.write("Current age :" + currentAge + "<br>");
// document.write("Maximum age is :" + maximumAge + "<br>");
// document.write("Amount of snake per day :" + amountPerDay + "<br>");

// document.write("You will need " + total + " " + favoriteSnake + " to last until the ripe old age of " + maximumAge) ;