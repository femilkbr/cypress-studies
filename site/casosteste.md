# CASOS DE TESTE DE ESTUDO #

## FEATURE: AUTENTICAÇÃO DO USUÁRIO ##
**Para** garantir que usuários válidos possam acessar o site

**Como** um usuário do site

**Quero** me logar com minhas credenciais


### CASOS DE TESTE
**Caso de Teste 1: Login bem-sucedido com credenciais válidas**

**Dado que** estou na página de login do SauceDemo

**E** as credenciais de usuário "standard_user" e senha "secret_sauce" estão disponíveis

**Quando** eu preencho o campo de usuário com "standard_user"

**E** preencho o campo de senha com "secret_sauce"

**E** clico no botão "LOGIN"

**Então** devo ser redirecionado para a página de produtos

**E** a URL da página deve ser "https://www.saucedemo.com/v1/inventory.html"

**Caso de Teste 2: Login com senha inválida**
**Dado que** estou na página de login do SauceDemo

**Quando** eu preencho o campo de usuário com "standard_user"

**E** preencho o campo de senha com "senha_incorreta"

**E** clico no botão "LOGIN"

**Então** devo ver uma mensagem de erro

**E** a mensagem de erro deve ser "Epic sadface: Username and password do not match any user in this service"

**Caso de Teste 3: Login com usuário inexistente**

**Dado que** estou na página de login do SauceDemo

**Quando** eu preencho o campo de usuário com "usuario_inexistente"

**E** preencho o campo de senha com "secret_sauce"

**E** clico no botão "LOGIN"

**Então** devo ver uma mensagem de erro

**E** a mensagem de erro deve ser "Epic sadface: Username and password do not match any user in this service"

**Caso de Teste 4: Tentativa de login com campos vazios**

**Dado que** estou na página de login do SauceDemo

**Quando** eu clico no botão "LOGIN"

**Então** devo ver uma mensagem de erro

**E** a mensagem de erro deve ser "Epic sadface: Username is required"

**Caso de Teste 5: Login com usuário bloqueado**

**Dado que** estou na página de login do SauceDemo

**Quando** eu preencho o campo de usuário com "locked_out_user"

**E** preencho o campo de senha com "secret_sauce"

**E** clico no botão "LOGIN"

**Então** devo ver uma mensagem de erro

**E** a mensagem de erro deve ser "Epic sadface: Sorry, this user has been locked out."

## Feature: Fluxo de Compra de Produtos

**Para** garantir que usuários válidos possam efetuar uma compra

**Como** um usuário do site

**Quero** finalizar uma compra e fazer checkout

**Caso de Teste 1: Finalização de compra de um produto** 

**Dado** que estou logado na página de produtos do SauceDemo 

**Quando** eu adiciono o item "Sauce Labs Backpack" ao meu carrinho 

**E** clico no ícone do carrinho 

**E** clico no botão "CHECKOUT" 

**E** preencho os campos de informação com dados válidos (`Primeiro Nome`, `Último Nome`, `CEP`) 

**E** clico no botão "CONTINUE" 

**E** confirmo a compra na página de visão geral 

**E** clico no botão "FINISH" 

**Então** devo ver a mensagem de confirmação da compra 

**E** a mensagem deve ser "THANK YOU FOR YOUR ORDER" 

**E** devo ser redirecionado para a página de confirmação do pedido

**Caso de Teste 2: Adicionar e remover múltiplos produtos do carrinho** 

**Dado** que estou logado na página de produtos do SauceDemo 

**Quando** eu adiciono o "Sauce Labs Backpack" ao meu carrinho 

**E** eu adiciono o "Sauce Labs Fleece Jacket" ao meu carrinho 

**E** eu removo o "Sauce Labs Fleece Jacket" do carrinho 

**Então** devo ver apenas o "Sauce Labs Backpack" no carrinho

**Caso de Teste 3: Cancelamento da compra no carrinho** 

**Dado** que estou com o "Sauce Labs Backpack" no meu carrinho 

**Quando** eu clico no ícone do carrinho 

**E** clico no botão "CHECKOUT" 

**E** clico no botão "CANCEL" 

**Então** devo ser redirecionado para a página de produtos


**Caso de Teste 4: Checkout com campos de informação obrigatórios em branco** 

**Dado** que estou na página de checkout de informações 

**Quando** eu preencho apenas o campo "First Name" com "Teste" 

**E** clico no botão "CONTINUE" 

**Então** devo ver uma mensagem de erro 

**E** a mensagem de erro deve ser "Error: Last Name is required"

 

>Casos de teste gerados com ajuda de Google Gemini
> Written with [StackEdit](https://stackedit.io/).
