describe('template spec', () => {
  const username = Cypress.env('credentialsOK').username;
  const password = Cypress.env('credentialsOK').password;

  it('TC1:  Login bem-sucedido com credenciais válidas', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.screenshot('tela-de-login'); 
    cy.get('[placeholder="Username"]').type(username);
    cy.get('#password').type(password);
    cy.wait(3000); // 3000 milissegundos = 3 segundos
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
    cy.screenshot('login-sucesso'); 
    cy.wait(3000); // 3000 milissegundos = 3 segundos
  })

  it('TC2:  Login com senha inválida', () => {
    
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.screenshot('tela-de-login'); 
    cy.get('[placeholder="Username"]').type(username);
    cy.get('#password').type('123456');
    cy.wait(3000); // 3000 milissegundos = 3 segundos
    cy.get('#login-button').click();
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    cy.screenshot('login-erro'); 
    cy.wait(3000); // 3000 milissegundos = 3 segundos
  })

it('TC3:  Login com usuário inexistente', () => {
    
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.screenshot('tela-de-login'); 
    cy.get('[placeholder="Username"]').type('usuario_inexistente');
    cy.get('#password').type(password);
    cy.wait(3000); // 3000 milissegundos = 3 segundos
    cy.get('#login-button').click();
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    cy.screenshot('login-erro'); 
  })

  it('TC4:  dados de login em branco', () => {
    
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.screenshot('tela-de-login'); 
    cy.get('#login-button').click();
    cy.contains('Epic sadface: Username is required').should('be.visible');
    cy.wait(3000); // 3000 milissegundos = 3 segundos
    cy.screenshot('login-erro'); 
  })

   it.only('TC5:  Login com usuário "locked_out_user"', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.screenshot('tela-de-login'); 
    cy.get('[placeholder="Username"]').type('locked_out_user');
    cy.get('#password').type(password);
    cy.wait(3000); // 3000 milissegundos = 3 segundos
    cy.get('#login-button').click();
    cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible');
    cy.screenshot('usuário bloqueado'); 
  })

})