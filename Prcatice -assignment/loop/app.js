// 1. Write a program to display the message "Hello World" 5 times
// in your browser using for loop.

    // const h1=document.querySelector('h1')
    // for (let index = 0; index < 5; index++) {
    //     h1.innerHTML += `Helo world <br/>`

    // }


// 2. Write a program to print numeric counting from 1 to 10.

    // const h1=document.querySelector('h1')
    // for(let i=1; i<=10;i++){
    //     h1.innerHTML += `${[i]}<br/>`
    // }

// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.

    // let tableNumber= +prompt("Enter a number to print its multiplication table")
    // let rangeNumber= +prompt("Enter length of multiplication table")
    // const h1=document.querySelector("#multiplicationnumber")
    // const h2=document.querySelector("#range")
    // const p=document.querySelector('p')

    // h1.innerHTML += `Multiplication table of ${tableNumber}`
    // h2.innerHTML += `Length ${rangeNumber}`
    // for(i=1;i<=rangeNumber;i++){
    //     p.innerHTML += `${tableNumber}  x  ${[i]} =  ${tableNumber*i}<br/>
    //     `
    // }

 // 4. You have an array
// A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
// Write each element on new line with the help of for loop.

    //    let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"]
    //    const h1=document.querySelector("#multiplicationnumber")
    // for(i=0;i<A.length;i++){
    //     h1.innerHTML += `${A[i]} <br/>`
    // }

// 5. Write a program to print items of the following array using for
// loop:

    //  let fruits = ["apple", "banana", "mango", "orange", "strawberry"]
    //  const h2=document.querySelector("#range")
    //  const h1=document.querySelector("#multiplicationnumber")
    // for(i=0;i<fruits.length;i++){
    //     h1.innerHTML += `${fruits[i]} <br/>`
    //     h2.innerHTML += `Element at index ${i} is ${fruits[i]} <br/>`
    // }

// 6. Write a program to initialize an array of N items by using
   // prompt. Where N is number of items as entered by the user.

//    let userinput=+prompt("Enter Number of items")
//      const h2=document.querySelector("#range")
//       const h1=document.querySelector("#multiplicationnumber")
//       h1.innerHTML += `Number of items : ${userinput} <br/> <br/> Items:<br/>`
//     for(i=1;i<=userinput;i++){ 
//         let indexinput= prompt(`Enter value at index ${i}`)
//         h2.innerHTML += `${indexinput}<br/>
//         `
//     }

// 8. You have an array
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable "search by user input" in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let A = ["cake", "apple pie", "cookie", "chips", "patties"]
// const h1=document.querySelector("#multiplicationnumber")
// const useriput=prompt("What do you want to order ?")
// for(i=0;i<A.length;i++){
//     if(A[i]===useriput){
//         h1.innerHTML+=`${A[i]} is available at index ${i} in our bakery`
//     }
//     else {
//         h1.innerHTML +=`We are sorry ${A[i]} is not available in our bakery`
//     }
// }

// 9. Write a program to identify the largest number in the given
// array.
    // let A = [24, 53, 78, 91, 12]
    // const h2=document.querySelector("#range")
    // const h1=document.querySelector("#multiplicationnumber")

    // h1.innerHTML= `Array items : ${A}`
    // h2.innerHTML= `The largest number is ${Math.max.apply(Math , A)} `


// 10. Write a program to identify the smallest number in the given
//     array.
    // let A = [24, 53, 78, 91, 12]
    //     const h2=document.querySelector("#range")
    //     const h1=document.querySelector("#multiplicationnumber")

    //     h1.innerHTML= `Array items : ${A}`
    //     h2.innerHTML= `The largest number is ${Math.min.apply(Math , A)} `

// 11. Write a program to identify the largest & the smallest
// number in the given array.

    // let A = [24, 53, 78, 91, 12]
    //     const h2=document.querySelector("#range")
    //     const h1=document.querySelector("#multiplicationnumber")

    //     h1.innerHTML= `Array items : ${A}`
    //     h2.innerHTML= `The largest number is ${Math.max.apply(Math , A)}<br/>The smallest number is ${Math.min.apply(Math , A)}  `

// 12. Write a program to print multiples of 5 ranging 1 to 100
        const h2=document.querySelector("#range")
for(i=5;i<100;i+5){
    h2.innerHTML=`${i}`
}

