///<reference types="cypress"/>


describe('Validating create mandate functionality',function(){
    it("Testing create new mandate ",async function(){
      

cy.visit("http://rane.qa.com/admin/login") 
//Enter the username and password
cy.get("input[name='username']").type('raneadmin')
cy.get("input[type='password']").type('Rane@123',{force:true})

//Check the term and condition check box

cy.get("input[type='checkbox']").check()

// Use custom command to get CAPTCHA value
const imageUrl = 'http://rane.qa.com/customcaptcha/custom?NqUiSTiL';

    // Convert image to text using custom command
    cy.convertImageToText(imageUrl).then(captchaText => {
      // Type the CAPTCHA text into the input field
      
      
    // Fill in the CAPTCHA field
    cy.get("input[id='customcaptcha']").type(captchaText);
    

})

    })
})
