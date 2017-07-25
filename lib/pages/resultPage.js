let EC = protractor.ExpectedConditions;

function MobilePage(){
  let mobilePageElemnents = {
    filterSections: element.all(by.css("section")),
    results: element.all(by.css("div[class='col _2-gKeQ']")),
    individualClearFilter: element.all(by.css("div[class='_1Rpt5NpY2lsIM_A3LqTNAg']"))
  }

  this.fOpenResultLink = (titleText) =>{
    mobilePageElemnents.results.filter((ele, index)=>{
      return ele.element(by.css("div[class='_3wU53n']")).getText().then((text)=>{
        return text === titleText;
      });
    }).then((selectedResult)=>{
      if(selectedResult[0]){
        selectedResult[0].click().then(()=>{
          browser.getAllWindowHandles().then((handles)=>{
            browser.switchTo().window(handles[1]).then(() =>{
            });
          });
        });
      }
    });
  }

  this.fClickFirstLink = ()=>{
    let firstEle = mobilePageElemnents.results.get(0);
    browser.driver.wait(EC.presenceOf(firstEle), 30000);
    return firstEle.element(by.css("div[class='_3wU53n']")).getText().then((text)=>{
      return firstEle.click().then(()=>{
        return browser.getAllWindowHandles().then((handles)=>{
          return browser.switchTo().window(handles[1]).then(() =>{
            return text;
            });
          });
      });
    });
  };
}

module.exports =  new MobilePage();
