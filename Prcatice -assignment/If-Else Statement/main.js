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

var time=+prompt("Write the current time using 24 hrs zone")
if(time>=0 &&time<12){
    alert("Good Morning")
}
else if(time>=12 &&time<17){
    alert("Good Afternoon")
}

else if(time>=17 &&time<21){
    alert("Good Afternoon")
}

else if(time>=21 &&time<23.59){
    alert("Good Afternoon")
}
else if (time=24){
    time=0
}

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
