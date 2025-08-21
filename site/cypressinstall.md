# Instaçação do Cypress no VSC

Abra o Visual Studio Code;
Abra o terminal;
Use o comando npm init -y (iniciar projeto)
Use o comando npm install cypress --save-dev (instalar o Cypress)
Use o comando npx cypress open

O Cypress se abrirá e o usuário poderá escolher as configurações iniciais tais como o navegador que será usado e se vqi testar uma aplicação web ou componente.

No final deste processo, o Cypress dará a oportunidade do usuáriio criar o primeiro arquivo com os scripts de testes, depois disso, o Cypress criará todas as pastas e será possível adicionr novos arquivos de script de teste direto do VSC.
 

# Separando credenciais do código

Uma boa prática é colocar os logins e senhas a serem usados nos testes no arquide configuração do Cypress.

Dentro do module.export é possível colocar vários tipos de configuração, como mostra o exemplo abaixo:

    module.exports = defineConfig({
        e2e: {
        setupNodeEvents(on, config) {
        // implement node event listeners here
        },
       },
       
        env: {
        credentialsOK: {
        username: 'standard_user',
        password: 'secret_sauce',
        },
        },
    
    });
