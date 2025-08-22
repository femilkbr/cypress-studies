describe('Testes de Compra - Validação de Preços', () => {

   beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })

  it('Deve coletar e somar os preços de dois produtos', () => {

    cy.login("standard_user", "secret_sauce")

    //Coleta o preço do Sauce Labs Backpack
    let backpackPrice;
    let bikeLightPrice;

    cy.get('.inventory_item_name').contains('Sauce Labs Backpack').parents('.inventory_item').find('.inventory_item_price').invoke('text').then((text1) => {
      backpackPrice = parseFloat(text1.replace('$', ''));
      cy.log(`Preço do Backpack: ${backpackPrice}`);

      cy.addproduct1();

      cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').parents('.inventory_item').find('.inventory_item_price').invoke('text').then((text2) => {
        bikeLightPrice = parseFloat(text2.replace('$', ''));
        cy.log(`Preço do Bike Light: ${bikeLightPrice}`);

        cy.addproduct4();

        const soma = backpackPrice + bikeLightPrice;
        cy.log(`Total esperado: ${soma}`);
        

          });
        });
      });
    });