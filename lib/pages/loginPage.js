let EC = protractor.ExpectedConditions;
let l1Menu = require("./../pages/l1Menu.js");

function LoginPage(){

    let loginOverlayElements = {
      loginButton : element(by.buttonText("Login")),
      phoneNumberTB : element(by.css("form[autocomplete='on']")).$("input[type='text']"),
      passwordTB : element(by.css("form[autocomplete='on']")).$("input[type='password']")
    };
    let logoutElements = {
      accountInfo: element(by.css("a[href='/account/?rd=0&link=home_account']")),
      logoutOption: element(by.css("a[href='#']"))
    };

    this.fNavigate = ()=>{
      browser.get("");
      browser.driver.wait(EC.presenceOf($("input[title='Search for Products, Brands and More']")), 10000);
    }

    this.fLogin = (usr, pwd)=>{
      if(!usr){
        usr =  browser.params.phoneNumber;
        pwd = browser.params.password;
      }
      l1Menu.fClickLogin();
      browser.driver.wait(EC.presenceOf(loginOverlayElements.loginButton), 10000);
      loginOverlayElements.phoneNumberTB.sendKeys(usr);
      loginOverlayElements.passwordTB.sendKeys(pwd);
      loginOverlayElements.loginButton.click().then(()=>{
        browser.sleep(5000);
        browser.driver.wait(EC.presenceOf($("input[title='Search for Products, Brands and More']")), 10000);
        l1Menu.fVerifyMyAccountDropdown();
      });
    }

    this.fLogout = ()=>[
      browser.actions().mouseMove(logoutElements.accountInfo).perform().then(()=>{
        logoutElements.logoutOption.click();
        browser.sleep(2000);
      })

    ]

}

module.exports = new LoginPage();
