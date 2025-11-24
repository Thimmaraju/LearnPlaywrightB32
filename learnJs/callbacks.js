
// synchronous - Means 

const { cpSync } = require("fs")

// Execute the statements one by one (one after the other )

//line by line sequentially then synchronous


// console.log("Raju")

// console.log("Bindu")

// console.log("Vidya")


// Javascript is synchronous

//callback functions


// function  printnameBindu(){

//     console.log("Bindu")

// }

// function  printnameVidya(){

//    console.log("Vidya")
// }

// function  printnameRaju(z){

//      console.log("Raju")

//      console.log(z)
// }


// function printStatement(x , y, callback){

//     console.log("This is Main function")

//     console.log(x)

//     console.log(y)



//     callback("Krish")

// }

// //printStatement(7,9, printnameVidya)

// printStatement(7,9, printnameRaju)


// Higher order function - A function which accepts another function as parameter  

  // Ex: printStatement

// Call back function - A function which we are passing as parameter to Higher order function 

// Call back function 

// Anonimous function 

// function without Name is anonimous function 


// function (){


//     console.log(4+6)
// }


// () => console.log(5+7)


//setTimeout( function, 3000)


//()=> console.log("Bindu")


// console.log("Raju")

// //setTimeout( ()=> console.log("Bindu"), 4000)

// console.log("Vidya")


// console.log("Krish")

// Js synchrounous or asynchrounous

// what is higher order function

// callback function 

// anonimous function 

// closure function 


// function add(num1, num2){

//     console.log(num1+num2)
// }


// function substrct(num1, num2){

//     console.log(num1-num2)
// }


// function calculator(callback){

//     x = 40
//     y = 45
//     callback(x,y)
// }

// calculator(substrct)

// If any callback consuming data from higher order function then it is also called closure function


// Js - Synchronous language 

// to make it ASynchronous we need use callback and promises 

// console.log("Raju")

// setTimeout(() => console.log("Bindya"), 2000)

// console.log("Vidya")



function add(value1, value2){

    console.log(value1)
     console.log(value2)
      console.log(value1+value2)

}


function substarct(value1, value2){

    console.log(value1)
     console.log(value2)
      console.log(value1-value2)

}

function calculator(num1, num2 , callback){

    x = num1
    y = num2
    callback(x,y)
}


calculator(30,56, substarct)

printMsg = () => console.log("Bindya")

 setTimeout( printMsg, 2000)


 //function1( function2(function3 (function4 (function5))))// callback hell


 function step1(value, callback) {
    callback(value + 10, false);
}

function step2(value, callback) {
    callback(value + 10, false);
}

function step3(value, callback) {
    callback(value + 10, false);  //40
}

step1(10, function (result1, boolvalue) {
    if (!boolvalue) {
        step2(result1, function (result2, boolvalue) {
            if (!boolvalue) {
                step3(result2, function (result3, boolvalue) {
                    if (!boolvalue) {
                        console.log("Results " + result3);
                    }
                })
            }
        })
    }
});



// Set  -- Unique values 

// MAP

// regular Expression

x = "3487t5rhjnkjerehfjmekvn3ir0924789342oi4j2i748923"


y = "798J8978av7876ascri6876pt56"

word = y.replace("7", "")

console.log(word)

