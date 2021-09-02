# course-cypress

- 📚 Course: Testes de aplicações modernas com Cypress
- 👨‍🏫 Teacher: Fracisco Wagner Costa Aquino
- ⏯ Platform: Udemy

---
## 🏆 Certificate
![UC-4de64033-d708-472f-ba40-caa06240c33a](https://user-images.githubusercontent.com/48841463/131851917-2d1232c6-20fe-4b4a-b3fb-1cb0a5d62672.jpg)

## Para utilizar o projeto

### Possuir um editor de texto (para instalar  o Visual Studio Code)

sudo apt install code

### Comando para criar Projeto Node:


    npm init -y

## Para instalar o cypress com a última versão disponível com dependencia dev:

    npm install -D cypress
    


## Para instalar o cypress na versão específica do projeto:


    npm install cypress@3.6.0
    


## Configurar o arquivo "package.json" para abrir o cypress:


    "cypress:open": "cypress open"
    


## Para executar o script que abre o cypress:


    npm run cypress:open
    


## Para executar sem o script no terminal:


    .node_modules\.bin\cypress open



 ## Como rodar no cli

Para rodar em cli no modo headless podemos pegar o comando que esta na pasta do nosso projeto file packed.jason e executar o comando
run ("run": "cypress run") "npm run run" e ele executa em linha do comando, 
e o comando para um test especifico 
npm run run --spec cypress/integration/backend.js





### Developed Orders

- [x] Testes Funcionais.
- [x] Testes da API.
- [x] Testes de interface
