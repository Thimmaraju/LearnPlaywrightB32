import { expect } from "@playwright/test"

exports.addEmployeePage = class addEmployeePage{


  constructor(page){
     
    this.page = page

    this.addEmpSubmenu = page.locator("//a[text()='Add Employee']")

    this.firstNameinput = page.locator('input[name="firstName"]')
    this.lastNameinput = page.locator('input[name="lastName"]')

    this.uploadfileBtn = page.locator('//input[@type="file"]')
    this.SaveBtn = page.locator('button[type="submit"]')

    this.successMessage = page.locator("//p[text()='Successfully SavedRaju']")
    this.EmpDetails = page.locator("//h6[text()='Personal Details']")

  }

  async navigateToAddEmployee(){

    await this.addEmpSubmenu.click()
  }

  async uploadEmpImge(){

    await this.uploadfileBtn.setInputFiles('testdata/learn.jpg')
  }

  async createEmployee(firstName, lastName){

    await this.firstNameinput.fill(firstName)
    await this.lastNameinput.fill(lastName)

    await this.uploadEmpImge()
    await this.SaveBtn.click()
  }

  async empCreateSuccess(){

    await expect(this.successMessage).toBeVisible()
    //await expect(this.EmpDetails).toBeVisible()
  }

}