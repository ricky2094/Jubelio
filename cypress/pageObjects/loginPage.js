// loginPage.js
class LoginPage {
    visit() {
      cy.visit('https://v2.jubelio.com/');
    }
  
    fillEmail(username) {
      cy.get('#textfield-email').type(username);
    }
  
    fillPassword(password) {
      cy.get('#textfield-password').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  
    login(username, password) {
      this.visit();
      this.fillEmail(username);
      this.fillPassword(password);
      this.submit();
    }
  }
  
  export default LoginPage;
  