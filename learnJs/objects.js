

// Object non primitive 


// var x = 10 

// var y = "Raju"

// var a = true

// var b = undefined

// var c 

// var z = null


// values = {

//     x : 10 ,
//     y : "Raju",
//     a : true
// }

// key : value

// objectname = {

//     propertyname : propertyvalue
// }

creds = {

    username: "Raju",
    password: "Pass@1234"
}

console.log(creds.username)   // "Raju"
console.log(creds.password)

console.log(creds['username'])
//console.log(creds.wrongpassword) //


const student = {

    firstname: "Chethana",
    lastname: "abc",
    Place: "Bangalore",
    courses: {

        course1: {
            key1: "API testing"
        },
        course2: "Playwright",
        course3: "Javascript"

    }
}

student.firstname  // Chethana

student['firstname'] // Chethana 


console.log(student.courses.course1.key1)


console.log(student.fathername) // undefined

student['Place'] = "chennai"  // Update / Edit the Value 

console.log(student.Place)

student['gender'] = "Female"  // Adding the Properties 

console.log(student.gender)

delete student.courses  // Deletion of the Property 

console.log(student.courses)


const menuItems = {

    menu1: "Admin",
    menu2: "PIM",
    menu3: "Leave",
    menu4: "Time",
    menu5: "Recruitment",
    menu6: "My Info",
    menu7: "Performance",
}


for(let item in menuItems){

    console.log("Loop starts")

    console.log(menuItems[item])

    console.log("Loop Ends")
}

