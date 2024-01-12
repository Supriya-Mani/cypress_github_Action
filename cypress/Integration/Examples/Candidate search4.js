
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
   cy.contains('Candidate Search').click({force:true})
   //click search query
   cy.xpath('/html/body/div[1]/div[4]/div/main/div/div/div[1]/div[1]/form/div/div/div/div/div/input').click({force:true})
   .type("p")
   //click on search
   cy.xpath('/html/body/div[1]/div[4]/div/main/div/div/div[1]/div[1]/form/div[2]/button[1]').click({force:true})


    })
})
