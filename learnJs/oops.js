

class student{




    studentdetails(value1, value2, value3){

        this.studentName = value1 
        this.StuPlace = value2
        this.student_Course= value3
    }



    print_Student_details(){

        console.log(this.studentName, this.StuPlace, this.student_Course)
    }
}

const stu1 = new student()

//stu1.studentdetails("Chethana", "Bangalore", "Playwright")

stu1.print_Student_details()

// Encapsulation - Binding the data between the methods in a class 

// Setter  - Assign the Values to Variables 

// Getter - Get the Assigned Values of the Varibales 


//single Inhertance 

// Multi Level

// class A {

//     m1() {

//         console.log("This is M1 Method")
//     }

//     m2() {

//         console.log("This is M2 Method")
//     }


//     m3() {

//         console.log("This is M3 Method")
//     }


//     m4() {

//         console.log("This is M4 Method")
//     }


// }


// class B extends A {

//     m5() {

//         console.log("This is M5 Method")
//     }

//     m6() {

//         console.log("This is M6 Method")
//     }



// }


// class C extends A {

//     m7() {

//         console.log("This is M7 Method")
//     }

//     m8() {

//         console.log("This is M8 Method")
//     }



// }

// const obj = new B()

// //obj.m5()  // from Parent B 

// obj.m1() // from parent A

// obj.m8()  // child 



// class A {

//     add(num1, num2) {

//         console.log(num1)

//         console.log(num2)
//         console.log(num1 + num2)
//     }

//     printMessage() {

//         console.log("This method is from Parent")
//     }

// }


// class B extends A {


//     add(num1, num2, num3) {

//         console.log(num1)

//         console.log(num2)

//         console.log(num3)

//         console.log(num1 + num2 + num3)
//     }

//     printMessage() {

//         console.log("This method is from Child")
//     }


// }

// // const obj = new B()


// // obj.printMessage()  // Method Overriding

// // obj.add(4, 8)  // Method Overriding 


// const parentOBj = new A()

// parentOBj.add(2,6,10, 7)  // Method Overloading 



class A {

    stuname = "Krish"

    trainer = "Raju"

    add(num1, num2) {

        console.log(num1)

        console.log(num2)
        console.log(num1 + num2)
    }

    printMessage() {

        console.log("This method is from Parent")
    }

}

A.prototype.institutename = "DBS QA"


A.prototype.M2 = function (){

    console.log("This is M2 Method")
}


const objA = new A()

console.log(objA.institutename)

objA.M2()


