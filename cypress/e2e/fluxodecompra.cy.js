describe('Fluxo de Compra', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })  

  it('TC1:  Finalização de compra de um produto', () => {
    
    cy.login("standard_user", "secret_sauce")
    cy.addproduct1()
    cy.scrollTo('top')
    cy.clickcart()
    cy.checkout()
  })  

})