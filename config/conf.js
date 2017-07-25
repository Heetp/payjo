let envConfig = require("./../lib/getEnvConf.js");
let jasmineSpecReporter = require("jasmine-spec-reporter").SpecReporter
// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',
  directConnect: true,
  onPrepare: () =>{
    let selectedConf;
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
    // console.log("a:"+browser.params.env);
    browser.params.env =  browser.params.env.toLowerCase();
    if(["stage","uat","prod"].indexOf(browser.params.env)>-1){
      selectedConf = envConfig[browser.params.env]
    }
    else{
      console.log("Selecting stage env by default");
      selectedConf = envConfig["stage"];
    }
    browser.baseUrl = selectedConf.baseUrl;
    browser.params.phoneNumber = selectedConf.phoneNumber;
    browser.params.password = selectedConf.password;
    jasmine.getEnv().addReporter(new jasmineSpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  },
  onComplete: () =>{
    //browser.pause();
  },
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['./../specs/e2e.spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
