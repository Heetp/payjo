This document describes how to setup and run protractor test for this project.

To Setup, open a shell or command prompt and change the current directory to FlipkartE2E.
run following command to setup protractor.

Command: npm run setup

Wait few minutes for setup to complete.

Next, run the following command to update the webdriver-manager.

Command: npm run webdriver-manager:update.

Wait few more minutes for selenium jar and browser binaries to be downloaded and unzipped.

To Run test, we have following 3 commands:
 1) npm run e2e:stage
 2) npm run e2e:uat
 3) npm run e2e:prod.

To stop test from executing press 'c' on your shell or command prompt.
 -----------------------------------------------------------------------------------------------------------------------------------------------------

 loginUrls and credentials are stored as an object in lib/getEnvConf.js file. Any modification should be made in the aforementioned file.
