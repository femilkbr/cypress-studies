## COLETAR E SOMAR NÚMEROS

cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').parents('.inventory_item').find('.inventory_item_price').invoke('text').then((text2) => {
        bikeLightPrice = parseFloat(text2.replace('$', ''));
        cy.log(`Preço do Bike Light: ${bikeLightPrice}`);


cy.get('.inventory_item_name'): Este comando usa um seletor de classe (.inventory_item_name) para encontrar todos os elementos na página que contêm o nome de um produto.

.contains('Sauce Labs Bike Light'): Este comando filtra o resultado anterior. De todos os elementos com a classe .inventory_item_name, ele seleciona apenas o que contém o texto exato "Sauce Labs Bike Light".

.parents('.inventory_item'): Este é um comando de navegação. Ele sobe na árvore do DOM (Document Object Model) a partir do elemento que contém o nome do produto. Ele busca o elemento pai mais próximo que tem a classe .inventory_item. Isso é feito para garantir que estamos no contêiner do produto correto e não em outro lugar da página.

.find('.inventory_item_price'): Novamente um comando de navegação, mas agora ele desce na árvore do DOM a partir do elemento que acabamos de encontrar. Ele procura por um elemento filho que tenha a classe .inventory_item_price, que é onde o preço do produto está localizado.

.invoke('text'): Este é um comando para extrair o conteúdo de um elemento. Ele pega o texto visível dentro do elemento ($15.99, por exemplo) e o disponibiliza para o próximo comando na cadeia.

.then((text2) => { ... }): O .then() é uma das partes mais importantes do Cypress. Ele é usado para trabalhar com o resultado de um comando anterior. O Cypress executa os comandos de forma assíncrona. Quando o invoke('text') termina de extrair o texto, o .then() recebe esse texto na variável text2.

bikeLightPrice = parseFloat(text2.replace('$', ''));: Esta linha está dentro do bloco .then() e realiza duas operações:

text2.replace('$', ''): Remove o símbolo de dólar ($) da string text2. Por exemplo, transforma "$15.99" em "15.99". Isso é necessário porque o parseFloat só funciona com strings que representam números.

parseFloat(...): Converte a string "15.99" em um número decimal (15.99), que pode ser usado para cálculos. Esse valor é então armazenado na variável bikeLightPrice.

cy.log(Preço do Bike Light: ${bikeLightPrice});: Este comando exibe uma mensagem no log do Cypress Test Runner. Ele é útil para depuração, permitindo que você veja o valor da variável bikeLightPrice durante a execução do teste. A sintaxe ${bikeLightPrice} é uma template string do JavaScript que insere o valor da variável na mensagem.