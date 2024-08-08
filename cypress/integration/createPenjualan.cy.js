describe('Ensure user success create and search pesanan', () => {
    beforeEach(() => {
        cy.fixture('user').as('userData')
        cy.get('@userData').then((user) => {
            cy.visit('https://v2.jubelio.com/');
            cy.get('#textfield-email').type(user.username)
            cy.get('#textfield-password').type(user.password)
            cy.get('button[type="submit"]').click()
        })
        cy.visit('https://v2.jubelio.com/');
        cy.get('#textfield-email').type('r')
    })

    it('Ensure user success create pesanan', () => {
      cy.visit('https://www.cypress.io')
      cy.contains('cypress.io').should('be.visible')
    })
  })