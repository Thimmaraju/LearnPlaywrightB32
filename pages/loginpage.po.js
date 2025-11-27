import { expect } from "@playwright/test"

exports.loginPage = class loginPage{


  constructor(page){

      this.page = page
      this.usernameInput = page.locator('//input[@name="username"]')
      this.passwordInput = page.locator('//input[@name="password"]')
      this.loginBtn = page.locator('//button[@type="submit"]')
      this.logiErrorMessage = page.locator("//p[text()='Invalid credentials']")
      this.logo = page.locator('//img[@alt="company-branding"]')
  }

  async launchURL(){

    await   this.page.goto("/web/index.php/auth/login")
  }

  async Logovisible(){

   await expect(this.logo).toBeVisible()
  }

  async loginwithCreds(username, password){

    await  this.usernameInput.fill(username)

    await this.passwordInput.fill(password)

    await this.loginBtn.click()
  }

  async loginSuccess(){

    await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  }

  async loginfailed(){

     await expect(this.logiErrorMessage).toBeVisible()
  }

}
