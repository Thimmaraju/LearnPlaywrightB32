
// arithematic Operators 
// comparision
// Assignment 
// Logical 
// conditional (ternary)

const { constants } = require("buffer")

console.log(5 + 7) // Addition

console.log(15-10)

console.log(20*4)

console.log(15/3)

//+ is also used as concatination purpose 

console.log("Raju" + "blr"+ "Playwrigt") // Concatination operator 

// ++ - Increment 
// -- - decrement 

// Post Increment  x++
// Pre increment   ++x

x = 12
x++  // x = x + 1  ++x (13) or  x++ (12)
console.log(x)

y = 34 
 
y--  // y = y-1

console.log(y)

// + - * / ++ --  %

// % - Modulus 

//remainder 

console.log(13%4)
// 13/4   - 1   

console.log(14%4)
// 14/4   - 2

console.log(15%4)
// 15/4   - 3
console.log(16%4)

// 16/4   - 0 

//=======================================================================

// coersion In JS 
// + Addition 

// + concatination

console.log(5+6)

console.log("Raju"+"G")

console.log("raju" + 7)

console.log("45" + "20")


console.log(3+4+"4"+5 + "20") //12420  // 74520 // 344520


// comparision

//true or false 

x = "Raju"

y = "Raju"

// x = 7

// y = 7


console.log(x === y)

//== is used for comparing 2 values 

// Loose equal 
//it compares only value but not datatypes 

//=== is used for comparing 2 values 

//it will compare value but also datatypes 

// strict equial 

console.log(2 === "2")

//==
//===
// > 
// <
// >=
// <=
// !=

console.log(34 < 23 ) // true

console.log(5>=5) // 


console.log(5 != 5)  // true 

// AND 

// x  y  result 

// 0  0    0
// 1  0    0
// 0  1    0
// 1  1    1 


console.log( false && false)

// markrs = 65 

// condition1 
// if any student more than 90 and lessthan or equal to 100 - A+

// If any student more than 70 and less than or equal to 90  - A 

// if any student >60 and <=70  - B

// if any student >35 and <=60 - C

// otherwise 

marks = 64
if(marks>90 && marks<=100){

    console.log("Grade A+")
}
else if(marks>70 && marks<=90){

      console.log("Grade A")
}

else if(marks>60 && marks<=70){

      console.log("Grade B")
}

else if(marks>35 && marks<=60){

      console.log("Grade C")
}
else{

      console.log("Fail")
}


// OR 

// x    y     result 

// 0    0      0
// 1    0      1
// 0    1      1
// 1    1      1

//||




console.log( true || true)

// NOT 

// x   result 

// 0    1

// 1    0

// !

console.log(!false)

//Assigment operators

// x = "Raju"

// console.log(x)

// +=
// -=
// /=
// *=

x = 10

x +=25   // x = x+ 25

console.log(x)

y = 30 

y -=23  // y =y-23 

console.log(y)

num1 = 34

num1 *= 5  // num1 = num1*5

console.log(num1)

//**

// 2^100

// //2*2*2*2

// 2**100

// Conditional operator 

// ternary Operation // Playwriht config 


// z = abc/xyz 
// but on a condition 

// if the condition is true z = abc
// if the condition is false z = xyz 
 
// <condition> ? value1 : value2 

z = false ? "abc" : "xyz" 

console.log(z)

// process.env.CI  = true  - when your running tests in virtual 

// process.env.CI = False when you are running tests in local machine 

//  retries = process.env.CI ? 2 : 1