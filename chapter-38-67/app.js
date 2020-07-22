 // chapter 38 to 44

//  1. Write a custom function power ( a, b ), to calculate the value of
//  a raised to b.

// function pow(a,b) {
//     var  value = a;
//     for (let i = 0; i <= b; i++) {
//        value = value * a 
//     }
//     document.write(value);
// }
// pow(2,5)



// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// var year = +prompt("Enter year");

// function leapyear() {
//     if (year % 4 == 0) {
//       document.write("Its a leap year")
//     }
//     else {
//       document.write("Its not a leap year")
//     }
//    }
//  leapyear();



// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2


// var a = 2;
// var b = 3;
// var c = 4

// function triangle() {
//    var s = (a + b + c) / 2;
//     var result = area(s);
       
//        document.write(result);
//  }

//  function area(s) {
//   var num = s * (s - a) * (s - b) * (s - c);
//   return num;
//  }
    

// triangle();




// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function marks() {
//    var sub1 = +prompt("Enter Your English Marks");
//    var sub2 = +prompt("Enter your urdu Marks");
//    var sub3 = +prompt("Enter your Maths Marks");
//    var total = sub1 + sub2 + sub3;
//    var totalmarks = 300;
//    var per = percentage(total,totalmarks);
//    var avg = average(total);
//    document.write("percentage is: " + per + "<br>");
//    document.write("average is: " + avg);

// }

// function percentage(total,totalmarks){
//       return (total * 100)/totalmarks; 
// }
// function average(total) {
//       return total / 3;
// }

// marks();


// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


 
// var str = "webdevelopment";
// var pos ;
// function index(){
//       for (let i = 0; i < str.length; i++) {
//           if (str[i] === 'e') {
//               pos = i;
//               document.write("e is on indexof " + pos);
//               break;
//           }
//       }
// }
// index();



// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long

// var str = "hey my name is rao abdulhai i am a computer system engineer";

// function vovel(){
//       return str.replace(/[aeiou]/gi, '');
// }
// document.write(vovel());


// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


// function findOccurrences() {
//   var str = "Pleases read this application and give me gratuity";
//   var count = 0;
//   let haveSeenVowel = false;

//   for (var i of str.toLowerCase()){
//     switch (letter) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         {
//           if (haveSeenVowel) {
//             count++;
//             haveSeenVowel = false;
//           } else {
//             haveSeenVowel = true;
//           }
//           break;
//         }
//       default:
//         haveSeenVowel = false
//     }
//   }

//   return count
// }

// console.log(findOccurrences());



// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


// var distance = +prompt("Enter distance between two cities in Km");


// function meter() {
//      var result = distance * 1000;
//      document.write("distance is meter is : " + result + "<br>");
// }

// function feet() {
//     var result = distance * 3280.84;
//     document.write("distance is feet is : " + result + "<br>");
// }
// function inches() {
//     var result = distance * 39370.1;
//     document.write("distance is inches is : " + result + "<br>");
// }
// function centimeter() {
//     var result = distance * 100000;
//     document.write("distance is centimeter is : " + result + "<br>");
// }

// meter();
// feet();
// inches();
// centimeter();



// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


// var hours = +prompt("enter your working hours");
// var payment = 3000;
// function pay() {
//   hours = Math.floor(hours);
//     if (hours > 40) {
//        var overtime = hours - 40
//         var overtimepay = overtime * 12;
//         payment = payment + overtimepay;
//         document.write(payment);
//     }
//     else {
//         document.write(payment);
//     }
// }
// pay();



// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.



// var num = +prompt("Enter ammount to withdraw");
// var hun = 0;
// var fifty = 0;
// var ten = 0;
// function currency() {
//   if (num > 100) {
//     while (num >= 100) {
//        num = num - 100;
//        hun++;
//     }
// }
// if (num <= 100) {
//     while (num >= 50) {
//        num = num - 50;
//        fifty++;
//     }
// }
// if (num <= 50) {
//     while (num >= 10) {
//        num = num - 10;
//        ten++;
//     }
// }

// document.write("You will have "+  hun + " hundred notes " + " " + fifty + " fifty notes " + " " + ten + " ten notes " )
// }

// currency();





// chapter 42 to 48

// 1. Show an alert box on click on a link.

// function hello() {
//      alert("hello sir");
// }



// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

// function message(){
//     alert("thank for purchasing a phone from us");
// }


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// function deleterecord(e){
//    e.parentNode.remove();
// }


// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.


// function changeimage(id,src) {
//     var image = document.getElementById(id);
//      image.src = src;
// }


// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.


// var count = 0;
// function increment() {
//     count++;
//     var num = document.getElementById('num');
//     num.innerHTML = count;
// }
// function decrement() {
//     count--;
//     var num = document.getElementById('num');
//     num.innerHTML = count;
// }



// chapter 49 to 52

// 1. Create a signup form and display form data in your web
// page on submission.


// function info() {
//     var fname = document.getElementById('fname').value;
//     var lname = document.getElementById('lname').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;
//     var city = document.getElementById('city').value;
//     var age = document.getElementById('age').value;
//     var para = document.getElementById('para').value;

//     document.write("Frist name is : "+fname + "<br>")
//     document.write("Last name is : "+lname + "<br>")
//     document.write("Email is : " + email + "<br>")
//     document.write("Phone number is : " +phone + "<br>")
//     document.write("City is : " +city + "<br>")
//     document.write("Age is : " +age + "<br>")
//     document.write("About is : " +para + "<br>")
// }



// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// function info() {
//    var detail = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, dicta reiciendis veniam debitis tempore, eius necessitatibus magnam architecto unde itaque repellendus pariatur velit perferendis cumque ipsum. Illum autem iusto error!";
//    var para = document.getElementById('para');
//    para.innerHTML = detail;
// }



// <!-- chapter 52 to 57 -->


// function zoomimg(e) {
//       var modalimg = document.getElementById("modal-img");
//       var modal = document.getElementsByClassName("modal");
//       modalimg.src = e.src;
//       modalimg.className += " show";
//       setTimeout(()=>{ modalimg.className += "hidden"; }, 2000)

// }




// <!-- chapter 58-67  -->

// i. Get element of id “main-content” and assign them in a variable.

// var fname = document.getElementById("frist-name").value;
// var lname = document.getElementById("last-name").value;
// var email = document.getElementById("email").value;


// ii. Display all child elements of “main-content” element.

// var m = document.getElementById("main-content");
// var a = m.childNodes;
//   for (let i = 0; i < a.length; i++) {
//      var c = a[i].innerHTML;
//      document.write(c + "<br>");
//   }



// iii. Get all elements of class “render” and show their innerHTML
// in browser.

// var ren = document.getElementsByClassName("render");

// for (let i = 0; i < ren.length; i++) {
//      var c = ren[i].innerHTML;
//      document.write(c + "<br>");
// }




// iv. Fill input value whose element id frst-name using javascript

// var fname = document.getElementById("frst-name");
// fname.value = 'rao';


// v. Repeat part iv for id ”last-name” and “email”.

// var lname = document.getElementById("last-name");
// var email = document.getElementById("email");

// lname.value = 'abdulhai';
// email.value = 'raoabdulhai58@gmail.com';




// 2. use HTML code of question 1 and show the result on browser

// i. What is node type of element having id “form-content”.

// var f = document.getElementById("form-content");
// var t = f.nodeType;

// document.write(t);

// var l= document.getElementById("lastName");
// var n = l.nodeType;
// console.log(n)
// var c = l.childNodes;
// console.log(c)


// iii. Update child node of element having id “lastName”.

// var l = document.getElementById("lastName");
//  l.innerHTML = "Last name : abdulhai";
//  console.log(l);



// iv. Get First and last child of id “main-content”.

// var f = document.getElementById("main-content").firstChild;
// console.log(f);
// var l = document.getElementById("main-content").lastChild;
// console.log(l);

// v. Get next and previous siblings of id “lastName”

// var n = document.getElementById("lastName").nextSibling;
// console.log(n);
// var p = document.getElementById("lastName").previousSibling;
// console.log(p);



// vi. Get parent node and node type of element having id “email”

// var pn = document.getElementById("email").parentNode;
// console.log(pn);
// var nt = document.getElementById("email").nodeType;
// console.log(nt);