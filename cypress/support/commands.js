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

  Cypress.Commands.add('addproduct1', () => { 
    
    cy.xpath("/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/button").click()
    
  })

  Cypress.Commands.add('clickcart', () => { 
    cy.get('.shopping_cart_link').click()
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