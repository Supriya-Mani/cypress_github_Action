///<reference types="cypress"/>


describe('Validating create mandate functionality',function(){
    it("Testing create new mandate ",async function(){
      

cy.visit("https://web.qa.xpheno.work/login",{failOnStatusCode: false}) 
    //Enter the username in login screen
    cy.get('input[type="email"]').type('naveenkumar.magesh@impigertech.com')
    //Enter the Password in loging
  cy.get('input[type="password"]').type('impiger#123')
  //click on submit button
   cy.get('button[id=":r2:"]').click({force:true})
   //It navigate to the dashboard screen
   cy.contains('Dashboard').should('be.visible')
   //click on mandate option
   cy.contains('Mandates').click({force:true})
   //click on New button
   cy.contains('New').should('be.visible').click({force:true})
   cy.contains("New Mandate").should('be.visible')

cy.clock()
// List of dropdown values
const dropdownValues = [
    'TCS',
    'cognizant',
    'infosys',
    'Centum Electronics',
    'Cyient ES',
    'DTICI Contract',
    'Lions Bot',
    'MBRDI CAD Bangalore',
    'MBRDI CAD Pune',
    'MBRDI CAE Bangalore',
    'TVS Motor Company Limited',
    'VOLVO CAE Bangalore'
  ];
  
  // Randomly select a value from the list
  const randomIndex = Math.floor(Math.random() * dropdownValues.length);
  const randomOption = dropdownValues[randomIndex];
  
  // Type the selected value in the input
  cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[1]/div[2]/div/div/div/div/div/div[1]/div[1]/div/div/div/input').click({force:true}).type(randomOption, { force: true });
  
  // Wait for the dropdown options to appear
  cy.get('.MuiAutocomplete-option').should('be.visible');
  
  // Click on the selected option
  cy.contains('.MuiAutocomplete-option', randomOption).click({ force: true });
  
  cy.clock().then(clock => {
    const elapsedTime = clock.elapsed;
    cy.log(`Dropdown click took ${elapsedTime} milliseconds`);
    

})
})
})