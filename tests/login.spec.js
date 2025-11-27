import { test, expect } from '@playwright/test';

import { loginPage } from "../pages/loginpage.po"

import logindata from "../testdata/logindata.json"


let login



test.beforeEach(async ({ page }) => {

     login = new loginPage(page)
     await login.launchURL()
     await login.Logovisible()

})

test(`Login with vaild credentials`, async () => {

     await login.loginwithCreds(logindata.username, logindata.password)
     await login.loginSuccess()

})


test(`Login with vaild username and Invalid password`, async () => {

     await login.loginwithCreds(logindata.username, logindata.wrongpassword)

     await login.loginfailed()
})


test(`Login with Invaild username and valid password`, async () => {

     await login.loginwithCreds(logindata.wrongpassword, logindata.password)

     await login.loginfailed()
})


test(`Login with Invaild username and Invalid password`, async () => {

     await login.loginwithCreds(logindata.wrongpassword, logindata.wrongpassword)

     await login.loginfailed()
})


