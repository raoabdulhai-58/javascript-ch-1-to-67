// task 1

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a = 10;
// document.write("Result: <br>");
// document.write("The value of a is : " + a + "<br>");
// document.write("................................... <br> <br>");

// var a = ++a;
// document.write("The value of ++a is : " + a + "<br>");
// document.write("Now the value of a is : " + a + "<br> <br>");


// var aa = a++;
// document.write("The value of a++ is : " + aa + "<br>");
// document.write("Now the value of a is : " + a + "<br><br>");


// var a = --a;
// document.write("The value of --a is : " + a + "<br>");
// document.write("Now the value of a is : " + a + "<br><br>");

// var aa = a--;
// document.write("The value of a-- is : " + aa + "<br>");
// document.write("Now the value of a is : " + a + "<br><br>");




// task 2

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is : " + a + "<br>");
// document.write("b is : " + b + "<br>");
// document.write("result is : " + result + "<br>");



//task 3

// 3. Write a program that takes input a name from user &
// greet the user.

// var name = prompt("Enter name : ");

// document.write("Welcome to our website : " + name);




// task 4

// 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var num = 5;
// var tableNo = prompt("Enter a Number for table : " , num);

// document.write(tableNo + " x " + " 1 " + " = " + tableNo * 1 + "<br>");
// document.write(tableNo + " x " + " 2 " + " = " + tableNo * 2 + "<br>");
// document.write(tableNo + " x " + " 3 " + " = " + tableNo * 3 + "<br>");
// document.write(tableNo + " x " + " 4 " + " = " + tableNo * 4 + "<br>");
// document.write(tableNo + " x " + " 5 " + " = " + tableNo * 5 + "<br>");
// document.write(tableNo + " x " + " 6 " + " = " + tableNo * 6 + "<br>");
// document.write(tableNo + " x " + " 7 " + " = " + tableNo * 7 + "<br>");
// document.write(tableNo + " x " + " 8 " + " = " + tableNo * 8 + "<br>");
// document.write(tableNo + " x " + " 9 " + " = " + tableNo * 9 + "<br>");
// document.write(tableNo + " x " + " 10 "+ " = " + tableNo * 10 + "<br>");





// task 5

// 5. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


// var subject1 = prompt("Enter a Subject-1 Name : ");
// var subject2 = prompt("Enter a Subject-2 Name : ");
// var subject3 = prompt("Enter a Subject-3 Name : ");
// var totalMarks = 100;
// var obtMarkSub1 = +prompt("Enter a Subject Marks of " + subject1);
// var obtMarkSub2 = +prompt("Enter a Subject Marks of " + subject2);
// var obtMarkSub3 = +prompt("Enter a Subject Marks of " + subject3);
// var totalObtMarks = obtMarkSub1 + obtMarkSub2 + obtMarkSub3;
// var perSub1 = (obtMarkSub1 * 100) / totalMarks;
// var perSub2 = (obtMarkSub2 * 100) / totalMarks;
// var perSub3 = (obtMarkSub3 * 100) / totalMarks;
// var totalpercentage =(totalObtMarks * 100) /(totalMarks * 3);
// var totalpercentage = totalpercentage.toFixed(4);
// document.write("<table>");
// document.write("<tr>");
// document.write("<th> Subject </th> ");
// document.write("<th>Total Marks </th> ");
// document.write("<th>Obtained Marks </th> ");
// document.write("<th> Percentage </th>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subject1 + "</td>");
// document.write("<td>" + totalMarks + "</td>");
// document.write("<td>" + obtMarkSub1 + "</td>");
// document.write("<td>" + perSub1 + "%" + "</td>");
// document.write("</tr>");
// document.write("<tr>")
// document.write("<td>" + subject2 + "</td> ");
// document.write("<td>" + totalMarks + "</td> ");
// document.write("<td>" + obtMarkSub2 + "</td> ");
// document.write("<td>" + perSub2 + "%" + "</td> ");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>" + subject3 + "</td> ");
// document.write("<td>" + totalMarks + "</td> ");
// document.write("<td>" + obtMarkSub3 + "</td> ");
// document.write("<td>" + perSub3 + "%" + "</td> ");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td> </td> ");
// document.write("<td>" + (totalMarks * 3) + "</td> ");
// document.write("<td>" + totalObtMarks + "</td> ");
// document.write("<td>" + totalpercentage + "%" + "</td> ");
// document.write("</tr>");
// document.write("</table>");



