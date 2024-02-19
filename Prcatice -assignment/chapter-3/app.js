// Q1 )Declare a variable called age & assign to it your age. Show
// your age in an alert box

var age="15"
alert("I am "+age+"years old")

// Q2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”

var times="14"
alert("You have cisited the site " +times+"times")

// Q3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser

var birthYear=+prompt("Enter Your Birth Year")
document.write("My birth year is"+birthYear+"<br />")
document.write("Data Type of my declared variable is "+typeof(birthYear)+"<br />")

// Q4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var name=prompt("Write Your Name ")
var product=prompt("which Product you Want ")
var quantity=+prompt("how many products you wants to order")

document.write(name+" ordered "+quantity+" "+product+"(s) on XYZ Clothing store")