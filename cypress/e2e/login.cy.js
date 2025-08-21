describe('Testes de Login', () => {
  
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })

  it('TC1:  Login bem-sucedido com credenciais válidas', () => {
    
    cy.login("standard_user", "secret_sauce")
    cy.url().should('include', '/inventory.html');
    
  })

  it('TC2:  Login com senha inválida', () => {
    
    cy.login("standard_user", "123456")
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    
    
  })

  it('TC3:  Login com usuário inexistente', () => {
    
    cy.login("usuario_inexistente", "secret_sauce")
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    
  })

  it('TC4:  dados de login em branco', () => {
       
    cy.login(" ", " ")
    cy.contains('Epic sadface: Username is required').should('be.visible');
    
  })

   it('TC5:  Login com usuário "locked_out_user"', () => {
    
    cy.login("locked_out_user", "secret_sauce")
    cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible');
    
  })

})