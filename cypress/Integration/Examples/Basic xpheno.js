describe("xpheno Web Application", function () {
    it("Login & adding Mandate", function () {
        cy.visit("https://web.qa.xpheno.work/login", { failOnStatusCode: false });
        cy.get(".MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.css-1ixds2g").type("naveenkumar.magesh@impigertech.com");
        cy.get(".MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.MuiInputBase-inputAdornedEnd.css-1gnht4k").type("impiger#123");
        cy.contains("Log in").click();
        cy.contains("Mandates").click();
        cy.wait(2000);
        cy.contains(" New").click();
        cy.get(".MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-feqhe6").eq(0).click();
        cy.get(".MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-1uvydh2").eq(0).type('TCS');
        cy.contains("TCS").click();
        cy.get(".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-52iuk5").eq(2).type("Test");
        cy.get(".MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-feqhe6").eq(1).click();
        cy.get(".MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-1uvydh2").eq(1).type('Dhanapriya Ravi');
        cy.contains("Dhanapriya Ravi").click();
        cy.get(".MuiInputBase-input.MuiOutlinedInput-input.css-1x5jdmq").eq(3).type("Java Devloper");
        cy.get(".MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-qiwgdb").eq(0).click();
        cy.contains("Permanent").click();
        cy.get(".MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-qiwgdb").eq(1).click();
        cy.contains("High").click();
        cy.get(".MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-qiwgdb").eq(2).click();
        cy.contains("Generic").click();
        cy.get(".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-multiline.css-160e1a6").eq(2).type("Java,JavaScript");
        cy.get(".ql-editor.ql-blank").eq(0).type("Sample");
        cy.contains("+ Add Location").click();
        cy.get(".MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-feqhe6").eq(6).click();
        cy.contains("Hybrid").click();
        cy.get(".MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-feqhe6").eq(7).click();
        cy.contains("Kolkata").click();
        cy.get(".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-52iuk5").eq(5).type("1");
        cy.get(".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-52iuk5").eq(6).type("Test");
        cy.get(".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-52iuk5").eq(7).type("j@gmail.com");
        cy.get(".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-1smhjhj").eq(5).click();
        cy.contains("Fixed Percentage").click();
        cy.get(".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-52iuk5").eq(8).type("30000");
        cy.get(".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-52iuk5").eq(9).type("30");
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.bottom-assign-button.css-ywc3qc").click();
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.save-btn.css-1nmpre1").click();      
        cy.get(".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot.css-c13z8j").eq(6).click();
        cy.contains("Vijayaragavan Ambalam").click();
        cy.get(".MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-1gnht4k").click();
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.bottom-assign-button.css-ywc3qc").click();  
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.css-o3jg85").click();
    })
})