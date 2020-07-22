// task 1

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

//  var arr = [[] , []];



// task 2
// 2. Declare and initialize a multidimensional array
// representing the following matrix:


// var arr = [[0,1,2,3] , [1,0,1,2] , [2,1,0,1]];
//  var arry =[];
//  for (let i = 0; i < arr.length; i++) { 
//     arry[i] = arr[i].join(" ");
//         document.write(arry[i] + "<br>");
//    }




// task 3


// 3. Write a program to print numeric counting from 1 to 10.


//  for (let i = 1; i <= 10 ; i++) {
//    document.write(i + "<br>");  
//  }




// task 4


//  4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var tblno = +prompt("enter a table number");
// var len = +prompt("enter a number of length");

// for (let i = 1; i <= len; i++) {

//    document.write(tblno + " X " + i + " = " + tblno * i + "<br>");
  
// }
  



// task 5

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

   

//  var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
//  for (let i = 0; i < fruits.length; i++) {
//    document.write(fruits[i] + "<br>");
//  }




// task 6

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

  //  document.write(" Counting : ");

  // for (let i = 1; i <= 15; i++) {
  //   document.write(i + " ");
    
  // }
  // document.write( "<br> "+ "Reverse counting : ");

  // for (let i = 10; i >= 1; i--) {
  //   document.write( i + " ");
    
  // }

  // document.write( "<br> "+ "Even : ");

  // for (let i = 0; i <= 20; i++) {
  //   if(i % 2 == 0 ){
  //     document.write(i + " "); 
  //   }
  // }

  // document.write( "<br> "+ "Odd : ");

  // for (let i = 0; i <= 20; i++) {
  //   if(i % 2 !== 0 ){
  //     document.write(i + " "); 
  //   }
    
  // }

  // document.write( "<br> "+ "Series : ");

  // for (let i = 1; i <= 20; i++) {
  //   if(i % 2 == 0 ){
  //     document.write(i + "k" + " "); 
  //   }
    
  // }




  // task 7 

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.


// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var searchItem = prompt("Welcome to The Raooo bakery. What do want to order sir/ma'am ");

// for (let i = 0; i < items.length; i++) {
//   if (searchItem === items[i]) {
//      var index1 = items.indexOf(searchItem);
//      document.write(searchItem + " is available at index " + index1 + " in our bakery");
//   }
//   else{
//     document.write("We are sorry." + searchItem + " is not available in our bakery");
//     break;
//   }
// }




// task 8

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


// var num = [24, 53, 78, 91, 12];

// document.write("Array Items : " + num + " <br>");
// var lrgNum = Math.max.apply(null, num);
// document.write("largest number : " + lrgNum);



// task 9

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]


// var num = [24, 53, 78, 91, 12];

// document.write("Array Items : " + num + " <br>");
// var slmNum = Math.min.apply(null, num);
// document.write("largest number : " + slmNum);




// task 10

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (let i = 1; i <= 20; i++) {
//   document.write(i*5 + " ");
  
// }