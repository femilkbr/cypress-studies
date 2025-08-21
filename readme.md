

# CASOS DE TESTE DE ESTUDO #

## FEATURE: AUTENTICAÇÃO DO USUÁRIO ##

**Para** garantir que usuários válidos possam acessar o site

**Como** um usuário do site

**Quero** me logar com minhas credenciais

  ## CASOS DE TESTE ##

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
 

>Casos de teste gerados com ajuda de Google Gemini
> Written with [StackEdit](https://stackedit.io/).
