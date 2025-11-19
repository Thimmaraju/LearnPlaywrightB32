
class employee {

    static x = 20  // static variable

    y = 45  // Non static varibale 

    constructor(name1){

        console.log(name1)
    }

    // constructor(){

    //     console.log("Krish")
    // }


    static method1() {

        console.log("This is simple Method name 1")

        // static method
    }

    method2() {

        console.log("This is simple Method name 2")
       

        // non static method 
    }


    static method3() {

        console.log("This is simple Method name 3")

        this.method1()

        // static method
    }


    method4() {

        console.log("This is simple Method name 4")

        this.method2()
    }



}


//employee.method3()

 const emp1 = new employee("Raju")

// emp1.method4()

// emp1.method3()

// OOPS 
// Encapsulation 
// inheritance 
// Polymorphism 
// Prototyping 

// 2 values  fristvalue 2ndvalue 

// 1 varibale 

// condition

//"Raju" and "NiHar"

z  =  4==="4" ? "Raju" :"NiHar"

console.log(z)