# Git Bash 
## Acessar projeto VS Code
code .

# Instalar Node.js
npm init -y

# Instalar Cypress
npm install cypress

# Projeto existente 
## Recria arquivos package-lock.json
npm install

# Iniciar o Cypress
## Força instalação existente
npx cypress install --force

# Confirmar instalação Cypress
npx cypress verify

# Abrir Cypress
npx cypress open

# Instalar Faker
npm install @faker-js/faker

# Instalar Relatorio
https://github.com/LironEr/cypress-mochawesome-reporter
npm i --save-dev cypress-mochawesome-reporter

## Incluir a linha no e2e.js
import 'cypress-mochawesome-reporter/register';

# Rodar Terminal
npx cypress run

# Cypress Runs
## Exetar no Terminal
npx cypress run --record --key a83d1090-8742-4f5d-92f7-264159a2babf

# Git
https://stackoverflow.com/questions/70179719/git-error-src-refspec-main-does-not-match-any

* git init 
* git remote add origin https://github.com/ReginaBecker2024/cypress-praticando-ci-cd.git
* git add .
* git commit -am "Criando Projeto" 
* git branch -M main 
* git push
* git push --set-upstream origin main
* git push -u origin main