import { test, expect } from '@playwright/test';

import {loginPage} from "../pages/loginpage.po"

import {dashBoardPage} from "../pages/dashBoardPage.po"

import {addEmployeePage} from "../pages/addemployee.po"

import data from "../testdata/PIM/addemp.json"


let login
let dashboard
let addEmp 



test.beforeEach(async ({ page }) => {

     login = new loginPage(page)

     dashboard= new dashBoardPage(page)

     addEmp = new addEmployeePage(page)

     await login.launchURL()
     await login.Logovisible()

     await login.loginwithCreds(process.env.APP_USERNAME, process.env.APP_PASSWORD)

     await login.loginSuccess()

})

test(`Verify user can Add Employee`, async () => {

  await dashboard.clickOnPIM()

  await addEmp.navigateToAddEmployee()

  await addEmp.createEmployee(data.firstname, data.lastname)

  await addEmp.empCreateSuccess()

})
