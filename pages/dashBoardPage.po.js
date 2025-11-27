import { expect } from "@playwright/test"

exports.dashBoardPage = class dashBoardPage{


  constructor(page){
     
    this.page = page
    this.PIMMenu = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')

    this.Buzzmenu = page.locator()


  }

  async clickOnPIM(){

    this.PIMMenu.click()
  }

  async clickOnBuzz(){

    this.Buzzmenu.click()
  }
}