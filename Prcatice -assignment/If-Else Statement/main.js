// 1. Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.

    // var num=+prompt("Enter the number checker either is is divisible by 3 or not !")
    // if(num%3===0){
    //     alert("Number is dicisible by 3")
    // }
    // else{
    //     alert("Number is not divisible by 3")
    // }
    // 2. Write a program that checks whether the given input is an even
    // number or an odd number.


// var num3=+prompt("Enter the number check either it is rven or odd number !")
    // if(num3%2==0){
    //     alert("Number is Even")
    // }
    // else{
    //     alert("Number is odd")
    // }

// 3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young"


     // var age=+prompt("Write Your age ?")
     // if(age<18 ){
     //     alert("Too young")
     // }
     // else{
     //   alert("Old enough")
     // }


// 4 Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output.

   // var defaultname="hassan"
   // var names=prompt("Enter Your name ?")
   // if(names===defaultname){
   //     alert("Hi Hassan Welcome to Our Website")
   // }
// 7. Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)
    // var num1=+prompt("Write The First Number ?")
    // var num2=+prompt("Write The Second Number ?")
    // var operator=prompt("Write The operator ?")
    // if(operator === "/"){
    //     alert(num1/num2)
    // }
    // else if(operator === "+"){
    //     alert(num1+num2)
    // }

    // else if(operator === "-"){
    //     alert(num1-num2)
    // }

    // else if(operator === "*"){
    //     alert(num1*num2)
    // }
    // else{
    //     alert("Write The correct operator")
    // }

// 8. Write a program that takes time as input from user in 24 hours
// clock format like: 1900 = 7pm. Implement the following case
// using if, else & else if statements

    //  var time=+prompt("Write the current time using 24 hrs zone")
    //  if(time>=0 &&time<12){
    //      alert("Good Morning")
    //  }
    //  else if(time>=12 &&time<17){
    //      alert("Good Afternoon")
    //  }
     
    //  else if(time>=17 &&time<21){
    //      alert("Good Afternoon")
    //  }
     
    //  else if(time>=21 &&time<23.59){
    //      alert("Good Afternoon")
    //  }
    //  else if (time=24){
    //      time=0
    //  }

//  9. Write a program that takes a calendar year in YYYY format in
// a variable. Check & notify the user whether it is a leap year or
// not.

    // let year=+  prompt("Write the year to check whether it is a leap year or not ?")
    // if(year%4==0 && year%100!=0 | year%400==0){
    //     alert( year + " is a leap Year")
    // }
    // else{
    //     alert(year +" is not a leap year")
    // }

//     10. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise.

    // let Pass1=prompt("Enter Your new Password")
    // let Pass2=prompt("Confim Your  Password")

    // if(Pass1===null && Pass2===null){
    //     alert("Enter the Password")
    // }
    // else if(Pass1===Pass2){
    //     alert("Correct")
    // }
    // else if(Pass1!==Pass2){
    //     alert("Incorrect")
    // }

// 11. Write a program that adds an else statement to the following
// script to display “You are not Fahad”


    // var firstName = "Ali";
    // if (firstName === "Fahad") {
    //  document.write("Hello Fahad!");
    // }
    // else{
    //     document.write("You Are not Fahad")
    // }       


// 12. This if/else statement does not work. Try to fix it:
//  var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  greeting = "Good day";
//  else
//  greeting = "Good evening";
//  } 

    // var greeting="";
    // var hour = 13;
    //  if (hour < 18) {
    //  greeting = alert("Good day")}
    //  else{
    //  greeting = alert("Good evening");
    //  } 

//     13. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

//      let num= +prompt("Enter First Number")
//      let num1= +prompt("Enter Second Number")
//    if(Number.isInteger(num) && Number.isInteger(num1)){
//      alert(num + num1)
//     }

//     else{
//      alert("Number is not integer")
//     }

// 14. Write a program that takes input a number from user & state
// whether the number is positive, negative or zero.

    //  let num=Math.sign(prompt("Enter a number"))
 
    //  if(num==1){
    //      alert("The Number is Positive")
    //  }
     
    //  else if(num==-1){
    //      alert("The Number is Negative")
    //  }
     
    //  else if(num==0){
    //      alert("The Number is Zero")
    //  }
    //  else{
    //      alert("Enter a Number")
    //  }

//  15. Ask the user what the current hour is. If the hour is between
//  6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
//  between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
//  the hour is between 5 and 8 p.m., tell the user, "It's dinner
//  time." For any other hours, tell the user, "Sorry, you'll have to
//  wait, or go get a snack." (Hint: Store the hour in 24 hours clock
//  format i.e. 14 for 2pm , 15 for 3pm)   

    // let hour=prompt("Enter the Current Hour")
    
    // if(hour>=6 && hour<=9){
    //     alert("Breakfast is served.")
    // }
    // else if(hour>=11 && hour<=13){
    //     alert("Time for lunch.")
    // }
    // else if(hour>=17 && hour<=20){
    //     alert("It's dinner time.")
    // }
    // else{
    //     alert("Sorry, you'll have to wait, or go get a snack.")
    // }

//     16. Write a program that stores value in a variable & tell whether
// the type of that variable is a "number", "string", "boolean" or
// “undefined”

    // let  num=prompt("Write a letter")
    // function isBoolean(num) {
    //     return num === "false" || num === "true";
    //  }
    //  isBoolean();
    // if (num== ""){
    //         alert("hello")
    // }
    // else if(num == Number(num)){
    //     alert("number")
    // }
    // else if(typeof(num)== "true" &&typeof(num)==false){
    //     alert("Boolean")
    // }
    // else if(num == String(num)){
    //     alert("String")
    // }

//     17. Write a program that takes a character (i.e. string of length 1)
// and returns true if it is a vowel, false otherwise
   
    // let num=prompt("Write a Chracter ?")
    // if(num == "a"|num == "e"|num == "i"|num == "o"|num == "u"){
    //     alert("Its a vowel")
    // }   
    // else{
    //     alert("Not a vowel")
    // }

// 18. Choose the correct comparison operator to display "true",
//  when:
//  10 is NOT equal to 8.

    // let num=prompt("Write the first letter")
    // let num1=prompt("Write the Second letter")

    // if(num==num1){
    //     alert("Both are Equal")
    // }
    // else {
    //     alert(`${num} is not equal to ${num1}`)
    // }

// 19. Use a switch statement to rewrite the following JavaScript
// code. Prompt the user for the number of a month rather than
// setting it to 8:

    // let num=+prompt("Enter a Month")
    // if(num==1){
    //     alert("January")
    // }
    // else if(num==2){
    //     alert("February")
    // }
    // else if(num==3){
    //     alert("March")
    // } else if(num==4){
    //     alert("April")
    // } else if(num==5){
    //     alert("May")
    // } else if(num==6){
    //     alert("June")
    // } else if(num==7){
    //     alert("July")
    // } else if(num==8){
    //     alert("August")
    // } else if(num==9){
    //     alert("September")
    // } else if(num==10){
    //     alert("October")
    // } else if(num==11){
    //     alert("November")
    // } else if(num==12){
    //     alert("December")
    // }
    // else{
    //     alert("Invalid Month !!")
    // }

// 20    Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".

    // const num=+prompt("Enter Your Age")
    // if(num<18){
    //     alert("Too young")
    // }
    // else{
    //     alert( "Old enough")
    // }