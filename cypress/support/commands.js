// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
require('cypress-xpath')

Cypress.Commands.add('login', (username, password) => { 
    
    cy.get('[placeholder="Username"]').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
    
  })
  //Sauce Labs Backpack
  Cypress.Commands.add('addproduct1', () => { 
    cy.xpath("/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button").click()
  })

  Cypress.Commands.add('removeproduct1', () => { 
    cy.xpath('//*[@id="inventory_container"]/div/div[1]/div[3]/button').click()
  })

  //Sauce Labs Fleece Jacket
  Cypress.Commands.add('addproduct2', () => { 
    cy.xpath("//*[@id='inventory_container']/div/div[4]/div[3]/button").click()
  })

  Cypress.Commands.add('removeproduct2', () => { 
    cy.xpath('//*[@id="inventory_container"]/div/div[4]/div[3]/button').click()
  })

  //Sauce Labs Bolt T-Shirt
  Cypress.Commands.add('addproduct3', () => { 
    cy.xpath("//*[@id='inventory_container']/div/div[3]/div[3]/button").click()
  })

  //Sauce Labs Bike Light
  Cypress.Commands.add('addproduct4', () => { 
    cy.xpath("//*[@id='inventory_container']/div/div[2]/div[3]/button").click()
  })

  Cypress.Commands.add('clickcart', () => { 
    cy.get('.shopping_cart_link').click()
  })

  Cypress.Commands.add('continueshopping', () => {
    cy.xpath('//*[@id="cart_contents_container"]/div/div[2]/a[1]').click()
  })

  Cypress.Commands.add('checkout', () => { 
    cy.get('.btn_action.checkout_button').click()
    cy.get('#first-name').type('Fernanda')
    cy.get('#last-name').type('Lima')
    cy.get('#postal-code').type('58043-902')
    cy.xpath('/html/body/div/div[2]/div[3]/div/form/div[2]/input').click()
    cy.scrollTo('bottom')
    cy.xpath('/html/body/div/div[2]/div[3]/div/div[2]/div[8]/a[2]').click()
    cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible'); 
  })

  Cypress.Commands.add('cancelcheckout', () => {
    cy.get('.btn_action.checkout_button').click()
    cy.xpath('//*[@id="checkout_info_container"]/div/form/div[2]/a').click()
  })

  Cypress.Commands.add('checkoutNoInfo', () => { 
    cy.get('.btn_action.checkout_button').click()
    cy.get('#first-name').type('Teste')
    cy.xpath('/html/body/div/div[2]/div[3]/div/form/div[2]/input').click()
    cy.scrollTo('top')
    cy.contains('Error: Last Name is required').should('be.visible'); 
  })

  Cypress.Commands.add('logout', () => { 
    cy.contains('button', 'Open Menu').click()
    cy.contains('Logout').click()
    cy.contains('Accepted usernames are:').should('be.visible'); 
  })
