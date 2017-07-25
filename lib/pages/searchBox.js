let EC = protractor.ExpectedConditions;

function SearchBox(){
  let searchBoxElements = {
    searchBox: element(by.css("input[title='Search for Products, Brands and More']")),
    searchButton: element(by.css("button[type='submit']"))
  }

  this.fSearchProduct = (text)=>{
    searchBoxElements.searchBox.sendKeys(text).then(()=>{
      searchBoxElements.searchButton.click().then(()=>{
        browser.driver.wait(EC.urlContains("search"), 30000);
        browser.sleep(3000);
      })
    });
  }
}

module.exports = new SearchBox();
