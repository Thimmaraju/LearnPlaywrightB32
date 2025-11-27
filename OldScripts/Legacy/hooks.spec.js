import { test, expect } from '@playwright/test';

// test.afterAll(()=> {

//     console.log("After all - Only one time")
// })


// test.afterEach( ()=> {

//     console.log("After Each Test")
// })



// test.beforeAll(()=> {

//     console.log("Before all - Only one time")
// })

test.describe("Group 1", () => {


    test.beforeEach(() => {

        console.log("Before Each Test")
    })

    test("test case 1", () => {

        console.log("Test case 1")
    })

    test("test case 2", () => {

        console.log("Test case 2")
    })

    test("test case 3", () => {

        console.log("Test case 3")
    })


    test("test case 4", () => {

        console.log("Test case 4")
    })

})


test("test case 5", () => {

    console.log("Test case 5")
})


