let EC = protractor.ExpectedConditions;

function L1Menu(){
  let l1MenuElements = {
    loginLink: element(by.css("a[href='/account/login?ret=/']")),
    myAccountDropdownLink: element(by.css("a[href='/account/?rd=0&link=home_account']"))
  }

  this.fClickLogin = ()=>{
    l1MenuElements.loginLink.click();
  }

  this.fVerifyMyAccountDropdown = ()=>{
    expect(l1MenuElements.myAccountDropdownLink.isDisplayed()).toBeTruthy();
  }
}

module.exports = new L1Menu();
