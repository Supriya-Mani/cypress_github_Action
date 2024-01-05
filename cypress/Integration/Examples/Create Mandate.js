
///<reference types="cypress"/>


describe('Validating create mandate functionality',function(){
    it("Testing create new mandate ",async function(){
      

cy.visit("https://web.qa.xpheno.work/login",{failOnStatusCode: false, }) 
    //Enter the username in login screen
    cy.get('input[id=":r0\:"]').type('pandiselvam.ramamoorthi@impigertech.com')
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
  
//Click on Contract Reference and type random date
   const faker = require('faker');

   const fakeName = faker.name.firstName(); 

   cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[1]/div[2]/div/div/div/div/div/div[1]/div[2]/div/div/input')
   .click({force:true}).type(fakeName,{force:true})
// Assuming you are in a Cypress test file

// Generate a random string
const RequestNo = Math.random().toString(36).substring(7);

// Type the random text into the element with the specified ID
cy.xpath("/html/body/div[1]/div[4]/div/main/div/form/div[1]/div[2]/div/div/div/div/div/div[1]/div[3]/div/div/input").click({force:true}).type(RequestNo,{force:true});


  //click on client SPOC
  // Assuming you are in a Cypress test file

// Generate a random string
const randomText = Math.random().toString(36).substring(7);

// Type the random text into the element with the specified ID
cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[1]/div[2]/div/div/div/div/div/div[1]/div[4]/div/div/input').type(randomText,{force:true});

//click on recieve date and select random
const randomDate = faker.date.past(1);
    const day = String(randomDate.getDate()).padStart(2, '0');
    const month = String(randomDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = randomDate.getFullYear();

    // Format the date as "dd/mm/yyyy"
    const formattedDate = `${day}/${month}/${year}`;
    // Type the formatted random date into the calendar input field
   cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[1]/div[2]/div/div/div/div/div/div[2]/div[1]/div[1]/div/div/input') 
   .click({force:true}).clear().type(formattedDate);
   

//click on recieve by
// Generate a random string
const recievename = [
  'Mohamed Rahamathulla Chanbasha',
  'Vijayaragavan Ambalam',
  'Dhanapriya Ravi',
  'Vibin Parthiban',
  'Pandiselvam Ramamoorthi',
  'Vinoth Shankar',
  'Sachin Prasath Pandurangan',
  'Naveenkumar Magesh',
  'Ameer Zain',
  'Xpheno QA',
  'Kousalyaa'
];

// Get a random name
const randomName = Cypress._.sample(recievename);

// Type the random text into the element with the specified XPath
cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[1]/div[2]/div/div/div/div/div/div[2]/div[1]/div[2]/div/div/div/input')
  .click({force:true})
  .type(randomName)
 cy.contains(randomName).click()
//click on jobtitle
const job=["IoT Solution Architect","DevOps Engineer","Cloud Architect","Block Chain Developer","Big Data Engineer","Artificial Intelligence Engineer","Computer Systems Analyst","Network Engineer","IT Security","Software Developer","Web Developers"]
const  jobtitle= faker.random.arrayElement(job)

// Type the random text into the element with the specified ID
cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[2]/div[2]/div/div/div/div/div/div[1]/div[1]/div/div/input').type(jobtitle);

//click on Job title and select Dropdown
const randomEmploymentType = faker.random.arrayElement(['Permanent', 'Contractual']);

// Type the random name into the input field
cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[2]/div[2]/div/div/div/div/div/div[1]/div[2]/div')
  .type(randomEmploymentType)
  cy.contains(randomEmploymentType).click()

//click on priority 
const priority = faker.random.arrayElement(['High', 'Medium', 'Low']);

// Click the element that opens the dropdown
cy.get(':nth-child(3) > .MuiInputBase-root > .MuiSelect-select').click({force:true});
cy.contains(priority).click()

//click on mandate type
const dropdownOptions = ['Generic', 'Niche', 'Super Niche'];

// Generate a random index
const randomIndexs = Math.floor(Math.random() * dropdownOptions.length);

// Get the random option
const randomOptions = dropdownOptions[randomIndexs];

// Find the dropdown element and click to open it
cy.get(':nth-child(4) > .MuiInputBase-root > .MuiSelect-select')
.click({ force: true })
  .should('be.visible')
  .then(() => {
    // Click on the job mode with error handling
    cy.contains(randomOptions)
      .click({force:true})
  })
  
//click on start and end date selection using random data

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// Use Faker.js to generate a random end date less than 4 years from tomorrow
const randomEndDate = faker.date.future(4, tomorrow);

const days = String(tomorrow.getDate()).padStart(2, '0');
const months = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const years = tomorrow.getFullYear();

const formattedStartDate = `${days}/${months}/${years}`;

const daysEnd = String(randomEndDate.getDate()).padStart(2, '0');
const monthsEnd = String(randomEndDate.getMonth() + 1).padStart(2, '0');
const yearsEnd = randomEndDate.getFullYear();

const formattedEndDate = `${daysEnd}/${monthsEnd}/${yearsEnd}`;

cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[2]/div[2]/div/div/div/div/div/div[2]/div[1]/div/div/input')
  .click().clear().type(formattedStartDate);

cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[2]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/input')
  .click().clear().type(formattedEndDate);
//check the header 
cy.contains('Mandate specs').should('be.visible')


//click on job mode and click on job mode
const jobModes = ['Hybrid', 'Remote', 'WFO', 'WFH'];
const jobMode = faker.random.arrayElement(jobModes);


// Click on the element and handle any potential errors
cy.get(':nth-child(1) > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select')// Replace with the actual class name
  .click({ force: true })
  .should('be.visible')
  .then(() => {
    // Click on the job mode with error handling
    cy.contains(jobMode)
      .click()
  })
//click on shift drodown
const shiftOptions = ['Regular', 'Night'];
  const randomShift = faker.random.arrayElement(shiftOptions);
  
cy.get(':nth-child(3) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root > .container-wrapper > :nth-child(1) > :nth-child(2) > .MuiInputBase-root > .MuiSelect-select')
.click({ force: true })
  .should('be.visible')
  .then(() => {
    // Click on the job mode with error handling
    cy.contains(randomShift)
      .click({force:true})
  })

//click on Add department

cy.get(':nth-child(3) > .multilevel-dropdown > .input-box > .input-placeholder-text').click({ force: true });
cy.wait(500)
cy.get('.list-item').find('input[type="checkbox"]').then(checkboxes => {
  // Ensure we have at least 4 checkboxes to select
  const checkboxesToSelect = Math.min(4, checkboxes.length);

  // Generate an array of 4 unique random indices within the range of checkboxes
  const randomIndices = Array.from({ length: checkboxesToSelect }, () =>
    faker.datatype.number({ min: 0, max: checkboxes.length - 1 })
  );

  // Iterate over the random indices and check the corresponding checkboxes
  randomIndices.forEach(index => {
    cy.wrap(checkboxes[index]).check({ force: true });
  });

  cy.get('.sub-list').find('input[type="checkbox"]').then(subCheckboxes => {
    // Ensure we have at least 4 sub-checkboxes to select
    const subCheckboxesToSelect = Math.min(4, subCheckboxes.length);

    // Generate an array of 4 unique random indices within the range of sub-checkboxes
    const randomSubIndices = Array.from({ length: subCheckboxesToSelect }, () =>
      faker.datatype.number({ min: 0, max: subCheckboxes.length - 1 })
    );

    // Iterate over the random sub-indices and check the corresponding sub-checkboxes
    randomSubIndices.forEach(subIndex => {
      cy.wrap(subCheckboxes[subIndex]).check({ force: true });
    });

   // Click on a different element to close the dropdown (you can customize this selector)
    cy.get('body').type('{esc}')
cy.wait(500)
    
  });
});
/*//click on Add industry
cy.get(':nth-child(4) > .multilevel-dropdown > .input-box > .custom-arrow-icon > [data-testid="ArrowDropDownIcon"] > path')
.click({force:true})
cy.get('.list-item').click({force:true}).find('input[type="checkbox"]').then(checkboxes => {
  // Ensure we have at least 4 checkboxes to select
  const checkboxesToSelect = Math.min(4, checkboxes.length);

  // Generate an array of 4 unique random indices within the range of checkboxes
  const randomIndices = Array.from({ length: checkboxesToSelect }, () =>
    faker.datatype.number({ min: 0, max: checkboxes.length - 1 })
  );

  // Iterate over the random indices and check the corresponding checkboxes
  randomIndices.forEach(index => {
    cy.wrap(checkboxes[index]).check({ force: true });
  });

  cy.get('.sub-list').find('input[type="checkbox"]').then(subCheckboxes => {
    // Ensure we have at least 4 sub-checkboxes to select
    const subCheckboxesToSelect = Math.min(4, subCheckboxes.length);

    // Generate an array of 4 unique random indices within the range of sub-checkboxes
    const randomSubIndices = Array.from({ length: subCheckboxesToSelect }, () =>
      faker.datatype.number({ min: 0, max: subCheckboxes.length - 1 })
    );

    // Iterate over the random sub-indices and check the corresponding sub-checkboxes
    randomSubIndices.forEach(subIndex => {
      cy.wrap(subCheckboxes[subIndex]).check({ force: true });
    });

   // Click on a different element to close the dropdown (you can customize this selector)
    cy.get('body').type('{esc}')
cy.wait(500)
    
  });
});*/

  //click on qualification and enter the values
  const qualificationOptions = ['Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Diploma', 'High School Diploma'];
  const randomQualification = faker.random.arrayElement(qualificationOptions)
  cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[3]/div[2]/div/div/div/div/div/div[2]/div[1]/div/div/textarea[1]')
  .click({force:true}).type(randomQualification,{force:true})

  //click on experience year startvalue and endvalue
 /* const minStartValue = 0;
    const maxStartValue = 30;
    const minEndValue = 0;
    const maxEndValue = 30;

    // Get random start and end values within the specified ranges
    const startValue = faker.random.number({ min: minStartValue, max: maxStartValue });
    const endValue = faker.random.number({ min: minEndValue, max: maxEndValue });

    // Interaction with the first slider
    cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[3]/div[2]/div/div/div/div/div/div[3]/div[1]/div/div/div[1]/div/div/div/div/button[2]/span')
      .click({ force: true, position: 'bottom' })
      .then(() => {
        cy.contains(startValue).click({force:true}).type('{esc}');
        
      })
      
    // Interaction with the second slider
    cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[3]/div[2]/div/div/div/div/div/div[3]/div[1]/div/div/div[2]/div/div/div/div/button[2]/span')
      .click({ force: true, position: 'bottom' })
      .then(() => {
        cy.contains(endValue).click({ force: true })
        .type('{esc}',{force:true})
      })*/
      
    
  
 //click on Annual CTC
 /*const startCTC= faker.random.number({ min: 0, max: 100 });
  const endCTC = faker.random.number({ min: startCTC, max: 100 });
  
  cy.get(':nth-child(2) > .mandate-slider > .select-container > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select')
    .should('be.visible')  // Ensure the element is visible
    .click({ force: true})
    .then(() => {
      cy.contains(endCTC).click({ force: true })
      cy.focused().click({force:true})
    cy.get('body').dblclick({force:true})
     
    });
  
    cy.get(':nth-child(2) > .mandate-slider > .select-container > :nth-child(2) > .MuiInputBase-root > .MuiSelect-select')
    .should('be.visible')
    .click({ force: true})
    .then(() => {
      cy.contains(endCTC).click({ force: true })
      cy.get('body').dblclick({force:true})
    
    });*/
  //click on primary skills
  const primaryskill = faker.lorem.paragraph();
cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[3]/div[2]/div/div/div/div/div/div[4]/div[1]/div/div/textarea[1]')
  .click({force:true}).type(primaryskill,{force:true});
  //click on secondary skills
  const secondaryskill = faker.lorem.paragraph();
cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[3]/div[2]/div/div/div/div/div/div[4]/div[2]/div/div/textarea[1]')
 .click({force:true}).type(secondaryskill,{force:true})
//click on job description and enter the value
const jobDescription = faker.lorem.paragraph();

cy.get(':nth-child(1) > [style="height: 100%; border: 1px solid rgb(217, 217, 217); border-radius: 10px;"] > .quill > .ql-container > .ql-editor')
.click({force:true}).type(jobDescription,{force:true})

//click on Remarks
const Remark = faker.random.words()
cy.get(':nth-child(2) > [style="height: 100%; border: 1px solid rgb(217, 217, 217); border-radius: 10px;"] > .quill > .ql-container > .ql-editor')
.click({force:true}).type(Remark,{force:true})

//check the Location header
cy.contains('Location').should('be.visible')

//click on add location button
cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[4]/div[2]/div/div/div/div/div/div[2]/button').click({force:true})

//check the add location header
cy.contains("Add Location").should('be.visible')

//click on Primary location and select the dropdown

const dropdownSelector =':nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > #tags-standard'
// Click the dropdown to open it
cy.get(dropdownSelector).click({force:true});

const Primarydropdown= [
'Mumbai (All Areas)',
'Port Blair',
'Anantapur',
'Guntur',
'Kakinada',
'Kurnool',
'Nellore',
'Tirupati',
'Vijayawada',
'Machilipatnam',
'Gannavaram',
'Eluru',
'Vizianagaram',
'Chitoor',
'Nandyal',
'Ongole',
'Tada',
'Razole',
'Kamalapuram']
const randomprimary = faker.random.arrayElement(Primarydropdown)
  // Create an option with the generated word and select it
  cy.get(dropdownSelector).type(randomprimary,{force:true}).click({force:true});

  // Optionally, you can assert that the selected value matches the expected value
  cy.get(dropdownSelector).should('have.value',randomprimary);
  cy.contains(randomprimary).click({force:true})
  cy.get('body').click({force:true})
  
  //click on secondary location and enter the values
  const secondaryLocation = "Secondary Location";
cy.log('Before finding textarea');
cy.get(`label:contains('${secondaryLocation}')`)
  .next('div')
  .first()
  .type('Not Applicable').should('be.visible').click()
  cy.get('#tags-standard-option-0').click()
  cy.get('body').click({force:true})

  //click on job order and enter the values
const Joborder=faker.random.number({ min: 1, max: 100 });
cy.xpath('/html/body/div[5]/form/div[2]/div[1]/div[3]/div/div/input').type(Joborder,{force:true})

//Annual CTc

/*const lakh = 100000;

const minStartValue = 0 * lakh;
const maxStartValue = 100 * lakh;

const minEndValue = 0 * lakh;
const maxEndValue = 100 * lakh;

// Get random start and end values within the specified ranges
const startValue = faker.random.number({ min: minStartValue, max: maxStartValue });
const endValue = faker.random.number({ min: minEndValue, max: maxEndValue });

// Interaction with the first slider
cy.get(':nth-child(2) > .MuiGrid-root > .mandate-slider > .select-container > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select')
  .click({ force: true, position: 'bottom' })
  .then(() => {
    cy.contains(`${startValue.toLocaleString()} Lakh`).click({ force: true });
  });

// Interaction with the second slider
cy.get(':nth-child(2) > .MuiGrid-root > .mandate-slider > .select-container > :nth-child(2) > .MuiInputBase-root > .MuiSelect-select')
  .should('be.visible')
  .click({ force: true, position: 'bottom' })
  .then(() => {
    cy.contains(`${endValue.toLocaleString()} Lakh`).click({ force: true });
    cy.get('body').click({ force: true });
  });*/

//click on client SPOC
const username = faker.internet.userName();


cy.xpath('/html/body/div[5]/form/div[2]/div[5]/div[1]/div/div/input').click({force:true})
.type(username)

//click on email
const email = faker.internet.email();
cy.xpath('/html/body/div[5]/form/div[2]/div[5]/div[2]/div/div/input').click({force:true})
.type(email)
//click on add client spoc button
cy.xpath('/html/body/div[5]/form/div[2]/div[6]/button').click({force:true})
const usernames=faker.internet.userName()
cy.xpath('/html/body/div[5]/form/div[2]/div[6]/div[1]/div/div/input').click({force:true})
.type(usernames)
const emails= faker.internet.email()
cy.xpath('/html/body/div[5]/form/div[2]/div[6]/div[2]/div/div/input').click()
.type(emails)

//click on pricing model
cy.get('.grid-layout > :nth-child(1) > .MuiInputBase-root > .MuiSelect-select').click()
cy.contains('Fixed Percentage').click()
  
//click on Annual CTC
 const minCTC = 50000;
  const maxCTC = 1500000;

  const randomCTC = faker.random.number({ min: minCTC, max: maxCTC });
  cy.xpath('//span[text()="CTC per Annum"]//parent::legend//parent::fieldset//parent::div//input')
.click({force:true})
  .type(randomCTC)

  //click on percentage
  const randomPercentage = faker.datatype.number({ min: 1, max: 10 });
  cy.xpath('//span[text()="Percentage(%)"]//parent::legend//parent::fieldset//parent::div//input').click({force:true})
  .type(randomPercentage)
//click on add button
  cy.get('.bottom-assign-button').click()
    
  //click on success button and enter the value
  const success = faker.lorem.paragraph();
  cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[5]/div[2]/div/div/div/div/div/div/div[1]/div/div/textarea[1]')
  .click({force:true}).type(success,{force:true})

  //click on success factor
  const successfactor=faker.random.word();
  cy.xpath('/html/body/div[1]/div[4]/div/main/div/form/div[5]/div[2]/div/div/div/div/div/div/div[2]/div/div/textarea[1]' )
.click({force:true}).type(successfactor)
//upload file in cypress
cy.contains('Attachments').should('be.visible')

//click on save button

cy.get('.save-btn').click()
cy.wait(2000)
//check the success popup
cy.contains('Success').should('be.visible')
//click on done
cy.contains("Done").click()

})

})