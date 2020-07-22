// task 1

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var students  = [];


// task 2

// 2. Declare an empty array using JS object notation to store
// student names in future.

//  var student = {};


// task 3 

// 3. Declare and initialize a strings array.

// var students = ['cat' , 'dog' , 'cow' , 'camel'];


// task 4

// 4. Declare and initialize a numbers array.

// var numbers = [1 , 2 , 3 , 4 , 5];
 

// task 5
//5. Declare and initialize a boolean array.

// var x = [true , false];



// task 6
// 6. Declare and initialize a mixed array.

// var mixedarray = [1 , 'cat' , 'this is a cat' , false];



//task 7
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


// var qualifications = ['SSC','HSC','BSC','BS','BCOM','MS','M. Phil.','PhD'];

// for (var i = 0; i < qualifications.length; i++) {
//     document.write(i+1 + ") " + qualifications[i] + "<br>")
  
// }



//task 8

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var students = ["rao","asad","baber"];
// var score =[450 , 370 , 290];
// var totalmarks = 500;


// document.write("score of " + students[0] + " is " + score[0]  + " percentage: " + (score[0] * 100) / totalmarks + "%" + "<br>");
// document.write("score of " + students[1] + " is " + score[1]  + " percentage: " + (score[1] * 100) / totalmarks + "%" + "<br>");
// document.write("score of " + students[2] + " is " + score[2]  + " percentage: " + (score[2] * 100) / totalmarks + "%" + "<br>");





// task 9 

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser


//var colors = [];

//var  color1 = prompt("Enter a name of color");

// a
//colors.unshift(color1)
//document.write(colors[0] + "<br> <br>");

//colors.unshift("yellow","green");



// document.write(colors[0] + "<br>");
// document.write(colors[1] + "<br>");
// document.write(colors[2] + "<br>");


// b

// color2 = prompt("enter a color u want to add");
// colors.push(color2);

//document.write(colors[3] + "<br>");

// c

// colors.unshift("pink","orang");
// document.write(colors[0] + "<br>");
// document.write(colors[1] + "<br>");
// document.write(colors[2] + "<br>");
// document.write(colors[3] + "<br>");
// document.write(colors[4] + "<br>");
// document.write(colors[5] + "<br>");



// d

//  colors.shift();

// document.write(colors[0] + "<br>");
// document.write(colors[1] + "<br>");
// document.write(colors[2] + "<br>");
// document.write(colors[3] + "<br>");
// document.write(colors[4] + "<br>");
// document.write(colors[5] + "<br>");


// e 

//  colors.pop();

// document.write(colors[0] + "<br>");
// document.write(colors[1] + "<br>");
// document.write(colors[2] + "<br>");
// document.write(colors[3] + "<br>");
// document.write(colors[4] + "<br>");
// document.write(colors[5] + "<br>");


// f

// var pos = +prompt("enter a index number in which position u want to add color");

// colors.splice(pos,0,"brown");
// document.write(colors[0] + "<br>");
// document.write(colors[1] + "<br>");
// document.write(colors[2] + "<br>");
// document.write(colors[3] + "<br>");
// document.write(colors[4] + "<br>");
// document.write(colors[5] + "<br>");


// g

// var pos = +prompt("enter a index number in which position u want to delete color");
// var numOfColors = +prompt("How many colors u want to delete");


// colors.splice(pos,numOfColors);
// document.write(colors[0] + "<br>");
// document.write(colors[1] + "<br>");
// document.write(colors[2] + "<br>");
// document.write(colors[3] + "<br>");





//task 10

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var scores = [210 , 110 , 330 , 250 , 400];

// document.write("Scores of students " + scores + "<br>");

// scores.sort();

// document.write("Ordered Scores of students " + scores);



// task 11

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array

//  var cities = ["karachi","lahore","hyderabad","nawabshah","islamabad"];

//  var city = [];

// document.write("Cities in list : " + cities + "<br>");
 
//  city = cities.slice(0,3);

//  document.write("Selected cities : " + city);



// task 12


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


// var arr = ["This ", " is ", " my ", " cat"];

// var arry = arr.join("");

// document.write(arry);



//task 13


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// var x = [];

// x.unshift("karachi")
// x.unshift("islamabad")
// x.unshift("lahore")
// x.unshift("hyderabad")

// document.write(x + "<br>");

// var y = [];
// y1 = x.pop();
// y2 = x.pop();
// y3 = x.pop();
// y4 = x.pop();

// document.write(y1 + " ");
// document.write(y2 + " ");
// document.write(y3 + " ");
// document.write(y4 + " ");


// task 14

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// var x = [];

// x.push("karachi")
// x.push("islamabad")
// x.push("lahore")
// x.push("hyderabad")

// document.write(x + "<br>");

// var y = [];
// y1 = x.pop();
// y2 = x.pop();
// y3 = x.pop();
// y4 = x.pop();

// document.write(y1 + " ");
// document.write(y2 + " ");
// document.write(y3 + " ");
// document.write(y4 + " ");


// task 15

// 15. Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array.
//   Display the following dropdown/select menu in your
//   browser using document.write() method:



// var company = ['Apple','Samsung', 'Motorola', 'Nokia', 'Sony' , 'Haier'];
// document.write("<select>")
// document.write("<option>"+ company[0] +  " </option>");
// document.write("<option>"+ company[1] +  " </option>");
// document.write("<option>"+ company[2] +  " </option>");
// document.write("<option>"+ company[3] +  " </option>");
// document.write("<option>"+ company[4] +  " </option>");
// document.write("<option>"+ company[5] +  " </option>");
// document.write("</select>")






















 



