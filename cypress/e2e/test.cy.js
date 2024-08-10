// test.spec.js
import LoginPage from '../pageObjects/loginPage';
import SalesTransactionPage from '../pageObjects/transactionPage';

describe('template spec', () => {
  const loginPage = new LoginPage();
  const salesTransactionPage = new SalesTransactionPage();

  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.fixture('user.json').as('users');
    cy.get('@users').then(user => {
      loginPage.login(user.username, user.password);
    });
    cy.wait(3000);
  });

  it('Ensure user success create pesanan', () => {
    salesTransactionPage.navigateToTransactionPage();
    salesTransactionPage.addNewOrder();
    salesTransactionPage.fillOrderDetails();
    salesTransactionPage.saveOrder();
    salesTransactionPage.verifyOrderSaved();
  });

  it('Ensure user can search pesanan', () => {
    salesTransactionPage.navigateToTransactionPage();
    salesTransactionPage.searchOrder('zaenal');
    salesTransactionPage.verifySearchSuccess();
  });

  it('Ensure user can edit pesanan', () => {
    const baseText = 'ini edit';
    const currentTime = Date.now();
    const textForEdit = `${baseText} ${currentTime}`;
    
    salesTransactionPage.navigateToTransactionPage();
    salesTransactionPage.closeRightIcon();
    salesTransactionPage.searchOrder('zaenal');
    salesTransactionPage.editOrder(textForEdit);
    salesTransactionPage.verifyOrderEdited(textForEdit);
  });
});
