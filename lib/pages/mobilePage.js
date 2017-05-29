let EC = protractor.ExpectedConditions;

function MobilePage(){
  let mobilePageElemnents = {
    filterSections: element.all(by.css("section")),
    results: element.all(by.css("div[class='col _2-gKeQP_JgpX1HjPC2J0lJ']")),
    individualClearFilter: element.all(by.css("div[class='_1Rpt5NpY2lsIM_A3LqTNAg']"))

  }

  this.filterSearch = (cat, option)=>{
    var p = protractor.promise.defer();
    mobilePageElemnents.filterSections.filter((ele, index)=>{
      return ele.isElementPresent(by.css("div[class='_3QT2gRdhWoIqYlz3Xors1w _1AgMasTorJ1ujikQFY0nZX']")).then((flag)=>{
        if(flag){
      return ele.element(by.css("div[class='_3QT2gRdhWoIqYlz3Xors1w _1AgMasTorJ1ujikQFY0nZX']")).getText().then((text)=>{
        return text === cat;
      });
    }
  })
    }).then((selectedEle)=>{
      if(selectedEle[0]){
        selectedEle[0].click().then(function(){
          browser.sleep(2000);
          selectedEle[0].all(by.css("label")).filter((valueLabel, index)=>{
            return valueLabel.getText().then((text)=>{
                return text.indexOf(option) > -1;
            });
          }).then((selectedOption) => {
            if(selectedOption[0]){
              selectedOption[0].click().then(()=>{
                browser.sleep(2000);
                p.fulfill(true)
              });
            }
            else{
              p.reject("Option not found");
            }
          });
        });
      }
      else{
        p.reject("Category not found");
      }
    });
    return p.promise;
  }

  this.filterSeachTextbox = (cat, value)=>{
    var p = protractor.promise.defer();
    mobilePageElemnents.filterSections.filter((ele, index)=>{
      return ele.isElementPresent(by.css("div[class='_3QT2gRdhWoIqYlz3Xors1w _1AgMasTorJ1ujikQFY0nZX']")).then((flag)=>{
        if(flag){
      return ele.element(by.css("div[class='_3QT2gRdhWoIqYlz3Xors1w _1AgMasTorJ1ujikQFY0nZX']")).getText().then((text)=>{
        return text === cat;
      });
    }
    });
    }).then((selectedEle)=>{
      if(selectedEle[0]){
          selectedEle[0].element(by.css("input[type='text']")).sendKeys(value);
          selectedEle[0].click().then(function(){
            p.fulfill();
          });
      }
      else{
        p.reject("Category not found");
      }
    });
    return p.promise;
  }

  this.fVerifyResultDescription =  (expectedDescription, index)=>{
    mobilePageElemnents.results.count().then((resultCount)=>{
      if(!index) index = resultCount;
      mobilePageElemnents.results.each((ele, i)=>{
        if(i<index){
          expect(ele.element(by.css("div[class='OiPjkeiwG6bMhntS85nm-']")).getText()).toEqual(expectedDescription);
        }
      });
    });
  }

  this.fVerifyResultTitleContains =  (expectedTitle, index)=>{
    mobilePageElemnents.results.count().then((resultCount)=>{
      if(!index) index = resultCount;
      mobilePageElemnents.results.each((ele, i)=>{
        if(i<index){
          expect(ele.element(by.css("div[class='_3wU53nj74OY_QGlVHZXv4g']")).getText()).toContain(expectedTitle);
        }
      });
    });
  }

  this.fClearFilter =  (filter) =>{
    var p = protractor.promise.defer();
    mobilePageElemnents.individualClearFilter.count(console.log);
    mobilePageElemnents.individualClearFilter.filter((ele)=>{
      return ele.getText().then((text)=>{
        console.log(text, filter);
        return text.indexOf(filter) > -1;
      });
    }).then((selectedEle)=>{
      if(selectedEle[0]){
        selectedEle[0].click().then(()=>{
          browser.sleep(5000);
          p.fulfill();
        });
      }
      else{
        p.reject(filter+ " is not found");
      }
    });
    return p.promise;
  }

  this.fOpenResultLink = (titleText) =>{
    mobilePageElemnents.results.filter((ele, index)=>{
      return ele.element(by.css("div[class='_3wU53nj74OY_QGlVHZXv4g']")).getText().then((text)=>{
        return text === titleText;
      });
    }).then((selectedResult)=>{
      if(selectedResult[0]){
        selectedResult[0].click().then(()=>{
          browser.getAllWindowHandles().then((handles)=>{
            browser.switchTo().window(handles[1]).then(() =>{
              browser.sleep(5000);
            })
          });
        })
      }
    })
  }
}

module.exports =  new MobilePage();
