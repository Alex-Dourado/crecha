describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type("suco de maça com fazer{enter}")
    
   
  })
  it('dois', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type("suco de laranja{enter}")
    
   
  })
})