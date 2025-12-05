import { test, expect } from '@playwright/test';


test.describe("Group 1", () => {


    test("Test case 1", () => {

     

        console.log("test case 1")
    })

    test("Test case 2", () => {

        console.log("test case 2")

    })

    test("Test case 3", () => {

        console.log("test case 3")

    })


    test("Test case 4", () => {
  
        test.fail()

        console.log("test case 4")
        //expect(2).toBe(4)
    })


    test("Test case 5", () => {


        console.log("test case 5")
    })

})


test.describe("Group 2", () => {


    test("Test case 6", () => {

        console.log("test case 6")
    })

    test("Test case 7",{tag : "@smoke"}, () => {


        console.log("test case 7")

    })

   
})