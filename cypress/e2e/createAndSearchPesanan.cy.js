describe('template spec', () => {
  beforeEach(() => {
    // alias the users fixtures
    cy.viewport(1280, 720)
    cy.fixture('user.json').as('users')
    cy.visit('https://v2.jubelio.com/');
    cy.get('@users').then(user => {
      cy.get('#textfield-email').type(user.username)
      cy.get('#textfield-password').type(user.password)
    })
    cy.get('button[type="submit"]').click()
    cy.wait(3000)
  })
  it('Ensure user success create pesanan', () => {
    cy.get(':nth-child(4) > .false > .mr-2').click()
    cy.get('.MuiGrid-container > [href="/sales/transactions"]').click()
    cy.get('[data-testid="ChevronRightIcon"]').click()
    cy.get('.MuiButton-contained > .d-flex').click()
    cy.get('input[placeholder="Pilih pelanggan"]').type('akulaku')
    cy.wait(1000)
    cy.get('input[placeholder="Pilih pelanggan"]').type('{downarrow}')
    .type('{enter}')
    cy.get('input[placeholder="Pilih lokasi"]').click().type('{downarrow}').type('{enter}')
    cy.wait(1000)
    cy.get('input[placeholder="Pilih lokasi"]').type('{downarrow}').type('{enter}')
    cy.get('span.font-size-md.font-weight-bold').click()
    cy.get('div.flex-row.d-flex').click()
    cy.wait(1000)
    cy.get('button[title="save"]').click()
    cy.get('div.MuiAlert-message.css-1w0ym84').should('be.visible').should('have.text', 'Data berhasil disimpan')
  })

  it('Ensure user can search pesanan', ()=> {
    cy.get(':nth-child(4) > .false > .mr-2').click()
    cy.get('.MuiGrid-container > [href="/sales/transactions"]').click()
    cy.get('[data-testid="ChevronRightIcon"]').click()
    cy.get('.MuiTabs-flexContainer > :nth-child(1)').click()
    cy.get('#mui-8').type('zaenal')
    cy.get('.css-rfnosa > .MuiButton-root').click()
    cy.get('span.font-size-xl.font-weight-bold.mt-3').should('not.exist')
    cy.get('.MuiTableBody-root > .MuiTableRow-root > :nth-child(5) > span').should('contain.text', 'zaenal')
  })

  it.only
  ('Ensure user can edit pesanan', ()=> {
    const baseText = 'ini edit'
    const currentTime = Date.now()
    const textForEdit = `${baseText} ${currentTime}` 
    cy.get(':nth-child(4) > .false > .mr-2').click()
    cy.get('.MuiGrid-container > [href="/sales/transactions"]').click()
    cy.get('[data-testid="ChevronRightIcon"]').click()
    cy.get('#mui-8').type('zaenal')
    cy.get('.css-rfnosa > .MuiButton-root').click()
    cy.wait(1000)
    cy.get('.MuiTabs-flexContainer > :nth-child(1)').click()
    cy.get('.d-flex > .font-weight-lightbold').click()
    cy.get('.css-vb6e92 > .MuiButton-root').click()
    cy.wait(3000)
    cy.get('textarea[rows="3"]').clear()
    cy.get('textarea[rows="3"]').type(textForEdit)
    cy.wait(1000)
    cy.get('button[title="save"]').click()
    cy.get('div.MuiAlert-message.css-1w0ym84').should('be.visible')
    cy.wait(1000)
    cy.get('.d-flex > .font-weight-lightbold').click()
    cy.wait(2000)
    cy.get('.MuiBox-root > .mb-0').should('have.text', textForEdit)
  })
})