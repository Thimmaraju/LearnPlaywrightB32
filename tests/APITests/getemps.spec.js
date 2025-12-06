
import { test, expect } from '@playwright/test';

import addempdata from "../../testdata/addempApi.json"


const { faker } = require('@faker-js/faker');

test('Get All Employees  ', async ({ request }) => {

    const url = '/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC'

    const getAllEmps = await request.get(url, {
        headers: {

            cookie: process.env.COOKIEVALUE
        }
    })

    expect(getAllEmps.status()).toBe(200)
    const jsonresponse = await getAllEmps.json()

    console.log(jsonresponse)


})



test('Create Employee API ', async ({ request }) => {

    const url = '/web/index.php/api/v2/pim/employees'

    const randomchars = (Math.random() + 1).toString(36).substring(7);

    console.log(randomchars)
    addempdata.employeeId = randomchars
    addempdata.firstName = faker.person.firstName()
    addempdata.lastName = faker.person.lastName()

    const createEMP = await request.post(url, {
        headers: {

            cookie: process.env.COOKIEVALUE
        },

        data: addempdata
    })

    expect(createEMP.status()).toBe(200)

    const empjsonres = await createEMP.json()

    console.log(empjsonres)

    expect(empjsonres.data.firstName).toBe(addempdata.firstName)

    expect(empjsonres.data.lastName).toBe(addempdata.lastName)

    expect(empjsonres.data.terminationId).toBe(null)

    expect(empjsonres.data.employeeId).toBe(randomchars)
    expect(typeof empjsonres.data.empNumber).toBe('number')




})


test.only("get APIs reqres", async ({ request }) => {

    const response = await request.get("https://reqres.in/api/users?page=2",
        {
            headers: {
                "x-api-key": "reqres_fd961708e7c04c8a8725daf6895e10a3"
            }
        });


    expect(response.status()).toBe(200);

  
    const jsonresponse = await response.json()

    expect(jsonresponse.page).toBe(2)
    expect(jsonresponse.per_page).toBe(6)
    expect(jsonresponse.data[0].id).toBe(7)

    expect(jsonresponse.data[0].email).toBe('michael.lawson@reqres.in')




});


test.only("get APIs reqres - for Wrong Auth", async ({ request }) => {

    const response = await request.get("https://reqres.in/api/users?page=2",
        {
            // headers: {
            //     "x-api-key": "reqres_fd961708e7ca3"
            // }
        });


    

    expect(response.status()).toBe(403);

const htmlResponse = await response.text();
console.log(htmlResponse)
expect(htmlResponse).toContain('<!DOCTYPE html>');

});