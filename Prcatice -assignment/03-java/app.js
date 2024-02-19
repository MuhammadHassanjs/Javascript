var age=+prompt("Enter Your Age For enrollment In Gym?")
currentage=""
if(age<15){   
    currentage=alert("You will Not Get admission Not Old Enough")
}
else if(age===15 || age<18){
    currentage=alert("First  Pay 500 Then I will Let You In ")
}
else if(age===18 || age<=50){
    currentage=alert("Congratulations Your Are Elligibe To Get admission")
}
else{
    currentage=alert("Sorry ! But Its Too Old To Get Admission")
}