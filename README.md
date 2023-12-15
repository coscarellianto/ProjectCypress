**AliExpress Test Project ReadMe**

**Description**

This project is designed to automate test cases for the AliExpress website (https://www.aliexpress.com) using Cypress with Mocha and Chai. The primary objective is to navigate to the AliExpress page, search for the iPhone, go to the second page of search results, click on the second item, and verify if it has available stock.


**Technologies**
- Cypress: JavaScript end-to-end testing framework.
- Mocha: Test framework for JavaScript.
- Chai: Assertion library for Node.js.
- Mochawesome and mochawesome-merge to build the report
- Import: cypress-wait-until library 


**Prerequisites**
- Make sure you have Node.js and npm installed on your machine.


**Clone Project**
1. Clone the repository
2. Open the project directory in a text editor or the terminal
3. Install dependencies:
      npm install


**Initiate the project**

Open the project in your preferred text editor and run in the editor terminal or in the computer terminal located in the project the following commands: 

1. npm init -y
2. npm install cypress (this command is to install the last version of Cypress)
3. npx cypress -v (to check the version of cypress)
4. npx cypress open
5. Once cypress has opened, choose the e2e option