///<reference types="cypress"/>


describe('Validating create mandate functionality',function(){
    it("Testing create new mandate ",async function(){
      

cy.visit("https://web.staging.xpheno.work/login",{failOnStatusCode: false, }) 
    //Enter the username in login screen
    cy.get('input[id=":r0\:"]').type('naveenkumar.magesh@impigertech.com')
    //Enter the Password in loging
  cy.get('input[id=":r1:"]').type('impiger#123')
  //click on submit button
   cy.get('button[id=":r2:"]').click({force:true})
   //It navigate to the dashboard screen
   cy.contains('Dashboard').should('be.visible')
   //click on mandate option
   cy.contains('Mandates').click({force:true})
   //click on New button
   cy.contains('New').should('be.visible').click({force:true})
   cy.contains("New Mandate").should('be.visible')


   const faker = require('faker');

  //click on Annual CTC
  const minStartValue = 0 
    const maxStartValue = 100 
  
  const minEndValue = 0 
  const maxEndValue = 100 
  
  // Get random start and end values within the specified ranges
  const startValue = faker.random.number({ min: minStartValue, max: maxStartValue });
  const endValue = faker.random.number({ min: minEndValue, max: maxEndValue });
  
  // Function to interact with the slider
  function interactWithSlider(selector, value) {
    return cy.get(selector)
      .should('be.visible')
      .click({ force: true, position: 'bottom' })
      .then(() => {
        cy.contains(`${value.toLocaleString()} Lakh`).click({ force: true });
        cy.get('body').click({ force: true });
      });
  }
  
  // Interaction with the first slider
  interactWithSlider('/html/body/div[5]/form/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div/input', startValue);
  
  // Interaction with the second slider
  interactWithSlider('/html/body/div[5]/form/div[2]/div[2]/div/div[2]/div/div[1]/div/div/div/input', endValue);
  
  
    });
   
    })

