///<reference types="cypress"/>


describe('Chola hospital app',function(){
    it("Verfiy username and password",async function(){
      

cy.visit("https://cashless.cholainsurance.com/login") 
// Assuming you're inside a Cypress test file
cy.contains('Hospital Portal').should('be.visible')

// Typing text into the username input field
cy.xpath('/html/body/app-root/body/div/div/app-login/form/div/div[2]/div/div[2]/div[2]/input').click().type(393975);

// Typing text into the password input field
cy.xpath('/html/body/app-root/body/div/div/app-login/form/div/div[2]/div/div[3]/div[2]/input').click().type(921129);

// Clicking the login button
cy.contains('button', 'LOGIN').click();

cy.contains("Invalid User Name or Password").should('be.visible')

//forget password field

cy.get("div[class='forgot-pwd-txt']").click()

cy.contains("Forgot Password").should('be.visible')

cy.get('input[formcontrolname="providerID"]').click().type('random name')

cy.get('button[type="submit"]').click()

cy.contains("Failure").should('be.visible')
cy.contains("OK").click()
    })
})
