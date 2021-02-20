describe('When user goto the home page', () => {
  it('he will be redirect to https://www.cypress.io/ in 2 seconds', () => {
    cy.visit('/')
    cy.location('pathname').should('eq', '/')
    cy.wait(2_000)
    cy.location('href').should('eq', 'https://www.cypress.io/')
  })
})
