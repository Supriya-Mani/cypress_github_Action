describe('Manual checking in the cypress script',function(){
    it('Random check in xpheno application',function(){

cy.visit("https://web.qa.xpheno.work/login",{failOnStatusCode: false, }) 
cy.get('.login-screens-container-grid').click();
cy.get('input[id=":r0\:"]').type('pandiselvam.ramamoorthi@impigertech.com')
    //Enter the Password in loging
  cy.get('input[id=":r1:"]').type('impiger#123')
  //click on submit button
   
cy.get('.css-1m78xmj').submit();
cy.get('.xpheno-navigationList .active > .MuiListItem-root').click();
cy.get('b').click();
cy.get('.MuiList-root:nth-child(2) > div:nth-child(2) > .MuiCollapse-root .css-kmttzg:nth-child(1) > .MuiListItem-root').click();
cy.get('.approval-list-title > span').click();
cy.get('.css-z6su52 > svg').click();
cy.get('.css-dgyjnj').click();
cy.get('.MuiGrid-root:nth-child(1) > .MuiFormControl-root path:nth-child(3)').click();
cy.get('.MuiGrid-root:nth-child(2) .MuiButtonBase-root').click();
cy.get('.MuiInputBase-root > #name-email-popper').click();
cy.get('body').click();
cy.get('.MuiMenuItem-root:nth-child(1)').click();
cy.get('.MuiButton-sizeLarge').click();
cy.get('.filter-box-style > .MuiBox-root').submit();
cy.get('.reset-label').click();
cy.get('.MuiInputBase-root > #name-email-popper').click();
cy.get('.MuiButton-sizeLarge').click();
cy.get('.filter-box-style > .MuiBox-root').submit();
cy.get('.reset-label').click();
cy.get('.MuiToggleButton-root:nth-child(1) > svg').click();
cy.get('.Mui-selected path').click();
cy.get('.Mui-selected').click();
cy.get('.Mui-selected').click();
cy.get('.MuiList-root:nth-child(2) > div:nth-child(2) .css-kmttzg:nth-child(2) > .MuiListItem-root').click();
cy.get('#\\3Ar3q2\\3A').click();
cy.get('.PrivateSwitchBase-input').click();
cy.get('#\\3Ar3q2\\3A').click();
cy.get('#\\3Ar3q2\\3A').type('java');
cy.get('.submit-btn').click();
cy.get('.filter-container').submit();
cy.get('.candidate-header').click();
cy.get('.candidate-header > svg').click();
cy.get('.active-tab .MuiTypography-root').click();
cy.get('.active-tab .MuiTypography-root').click();
cy.get('.active-tab .MuiTypography-root').click();
cy.get('#\\3Ar3rb\\3A').click();
cy.get('body').click();
cy.get('#menu- > .MuiBackdrop-root').click();
cy.get('.active-tab .MuiTypography-root').click();
cy.get('.active-tab .MuiTypography-root').click();
cy.get('.MuiList-root:nth-child(2) > div:nth-child(2) .css-kmttzg:nth-child(3) > .MuiListItem-root').click();
cy.get('.MuiList-root:nth-child(2) .css-kmttzg:nth-child(4) > .MuiListItem-root').click();
cy.get('html').click();
cy.get('.MuiList-root:nth-child(2) .css-kmttzg:nth-child(5) > .MuiListItem-root').click();
cy.url().should('contains', 'https://content.googleapis.com/static/proxy.html');
cy.get('.MuiList-root:nth-child(2) > div:nth-child(3) > .MuiCollapse-root .css-kmttzg:nth-child(1) > .MuiListItem-root').click();
cy.get('.MuiList-root:nth-child(2) > div:nth-child(3) .css-kmttzg:nth-child(2) > .MuiListItem-root').click();
cy.get('.MuiList-root:nth-child(2) > div:nth-child(3) .css-kmttzg:nth-child(3) > .MuiListItem-root').click();
cy.get('.MuiList-root:nth-child(2) > div:nth-child(3) > .MuiCollapse-root .css-kmttzg:nth-child(1) > .MuiListItem-root').click();
cy.get('.MuiButton-root > [data-testid="MenuIcon"] > path').click();
cy.get('.reportColumnFilters > .MuiBackdrop-root').click();
cy.get('.css-z6su52').click();
cy.get('.filter-parent-box').click();
cy.get('.MuiList-root:nth-child(2) .css-kmttzg:nth-child(5) > .MuiListItem-root').click();
cy.get('.MuiList-root:nth-child(2) .css-kmttzg:nth-child(4) > .MuiListItem-root').click();
cy.get('.MuiList-root:nth-child(2) > div:nth-child(2) .css-kmttzg:nth-child(2) > .MuiListItem-root').click();
cy.get('#\\3Ar43h\\3A').click();
cy.get('#\\3Ar43h\\3A').click();
cy.get('#\\3Ar43h\\3A').type('dhanapriya');
cy.get('.submit-btn').click();
cy.get('.filter-container').submit();
cy.get('.eachcards-active').click();
cy.get('.MuiAlert-message').click();
cy.get('.eachcards-active').click();
cy.get('.eachcards-active').click();
   })
})