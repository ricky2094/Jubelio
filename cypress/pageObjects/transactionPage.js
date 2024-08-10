// salesTransactionPage.js
class SalesTransactionPage {
    navigateToTransactionPage() {
      cy.get(':nth-child(4) > .false > .mr-2').click();
      cy.get('.MuiGrid-container > [href="/sales/transactions"]').click();
    }
  
    addNewOrder() {
      cy.get('[data-testid="ChevronRightIcon"]').click();
      cy.get('.MuiButton-contained > .d-flex').click();
    }
  
    fillOrderDetails() {
      cy.get('input[placeholder="Pilih pelanggan"]').type('akulaku').wait(1000).type('{downarrow}').type('{enter}');
      cy.get('input[placeholder="Pilih lokasi"]').click().type('{downarrow}').type('{enter}').wait(1000).type('{downarrow}').type('{enter}');
      cy.get('span.font-size-md.font-weight-bold').click();
      cy.get('div.flex-row.d-flex').click();
      cy.wait(2000)
    }
  
    saveOrder() {
      cy.get('button[title="save"]').click();
    }
  
    searchOrder(name) {
      cy.get('.MuiTabs-flexContainer > :nth-child(1)').click()
      cy.get('#mui-8').type(name);
      cy.get('.css-rfnosa > .MuiButton-root').click();
      cy.wait(2000);
    }
  
    editOrder(newText) {
      cy.get('.d-flex > .font-weight-lightbold').click().wait(1000);
      cy.get('.css-vb6e92 > .MuiButton-root').click().wait(3000);
      cy.get('textarea[rows="3"]').clear().type(newText);
      cy.wait(3000);
      cy.get('button[title="save"]').click();
    }

    closeRightIcon(){
        cy.get('[data-testid="ChevronRightIcon"]').click();
    }
  
    verifyOrderSaved() {
      cy.get('div.MuiAlert-message.css-1w0ym84').should('be.visible').should('have.text', 'Data berhasil disimpan');
    }
  
    verifyOrderEdited(expectedText) {
      cy.get('.d-flex > .font-weight-lightbold').click().wait(3000);
      cy.get('.MuiBox-root > .mb-0').should('have.text', expectedText);
    }

    verifySearchSuccess(){
      cy.get('span.font-size-xl.font-weight-bold.mt-3').should('not.exist');
      cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(5) > span').should('have.text', 'zaenal');
    }
  }
  
  export default SalesTransactionPage;  