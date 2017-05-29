let EC = protractor.ExpectedConditions;

function SearchBox(){
  let searchBoxElements = {
    searchBox: element(by.css("input[title='Search for Products, Brands and More']")),
    searchButton: element(by.css("button[data-reactid='63']"))
  }

  this.fSearchProduct = (text)=>{
    searchBoxElements.searchBox.sendKeys(text);
    searchBoxElements.searchButton.click().then(()=>{
      browser.sleep(5000);
    });
  }
}

module.exports = new SearchBox();
