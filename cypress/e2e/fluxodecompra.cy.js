describe('Fluxo de Compra', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })  
  it('TC1: Finalização de compra de um produto', () => {
    
    cy.login("standard_user", "secret_sauce")
    cy.addproduct1()
    cy.scrollTo('top')
    cy.clickcart()
    cy.checkout()
  })  

  it('TC2: Adicionar e remover múltiplos produtos do carrinho', () => {
    
    cy.login("standard_user", "secret_sauce")
    cy.addproduct1()
    cy.wait(1000)
    cy.addproduct2()
    cy.wait(1000)
    cy.addproduct3()
    cy.wait(1000)
    cy.scrollTo('top')
    cy.clickcart()
    cy.screenshot('carrinho-com-3-produtos')
    cy.continueshopping()
    cy.removeproduct1()
    cy.removeproduct2()
    cy.clickcart()
    cy.screenshot('carrinho-com-1-produtos')
    cy.checkout()
  })
  
  it('TC3: Cancelamento da compra no carrinho', () => {
    
    cy.login("standard_user", "secret_sauce")
    cy.addproduct1()
    cy.clickcart()
    cy.cancelcheckout()

  })  

  it('TC4: Checkout com campos de informação obrigatórios em branco', () => {
    
    cy.login("standard_user", "secret_sauce")
    cy.addproduct1()
    cy.clickcart()
    cy.checkoutNoInfo()

  }) 
  
  it.only('TC5: logout', () => {
    
    cy.login("standard_user", "secret_sauce")
    cy.wait(3000)
    cy.logout()
  })

})