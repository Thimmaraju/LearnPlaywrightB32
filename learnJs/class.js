
// // function add(num1, num2) {

// const { setuid } = require("process")

// //     console.log(num1)
// //     console.log(num2)
// //     console.log(num1 + num2)
// // }

// // add(5,9)

// // class classname{


// // }



// class calculator {

//     x = 20

//     y = "Raju"

//     printMessage(){

//         console.log("this is simple Method")
//     }


//     add(num1, num2) {

//         console.log(num1)
//         console.log(num2)
//         console.log(num1 + num2)
//     }

//     substract(num1, num2) {

//         console.log(num1)
//         console.log(num2)
//         console.log(num1 - num2)
//     }

    
//     multiply(num1, num2) {

//         console.log(num1)
//         console.log(num2)
//         console.log(num1 * num2)
//     }

    
    
//     division(num1, num2) {

//         console.log(num1)
//         console.log(num2)
//         console.log(num1 / num2)
//     }


// }

// //create object of the class / Instance of the class 

// const cal1 = new calculator()

// cal1.add(2,8)

// // cal1.multiply(4,8)

// cal1.add(5,8)

// console.log(cal1.y ) // 20 

// const cal2 = new calculator()

// cal2.add(4,9)


//POM Page Object Model 


// class classname{

//     variables
//     methods 
// }

// const obj = new classname()

// obj.


class student {


     studentname = "Chethana"


     constructor(name1,name2){

         console.log("Name 1 :" + name1)

           console.log("Name 2 :" + name2)
     }

     print_student_Name(){

        console.log("Name of the Student: "+ this.studentname )
     }


     print_complete_details(){

        this.print_student_Name()
     
         console.log("Course name : Playwright")
         console.log("Place : Bangalore")

     }

     Method1(){

        console.log(" This is Method 1 ")

        this.Method2()
     }

    Method2(){

        console.log(" This is Method 2 ")

     }
}

const stu1 = new student("Yamuna", "Amulya")

//stu1.print_student_Name()

// stu1.print_complete_details()

// stu1.Method1()'

// constructor is method in a class 

// it automatically invoked / Executed when create object of the class 

