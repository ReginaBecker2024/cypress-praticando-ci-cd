# Git Bash acessar projeto no vs code
code .

# Instalando Node.js
npm init -y

# Instalando Cypress
npm install cypress

# Projeto existente rodar cypress recria arquivos package-lock.json que não são enviados no git
npm install

# Iniciar o Cypress força instalação que já existia anterior
npx cypress install --force

# Confirmar instalação do Cypress
npx cypress verify

# Abrir Cypress
npx cypress open

# Instale o Faker
npm install @faker-js/faker

# Instalar Relatorio
https://github.com/LironEr/cypress-mochawesome-reporter
npm i --save-dev cypress-mochawesome-reporter
# Incluir a linha no e2e.js
import 'cypress-mochawesome-reporter/register';

# Rodar no Terminal
npx cypress run

# Cypress Runs
npx cypress run --record --key a83d1090-8742-4f5d-92f7-264159a2babf
Exetar no Terminal

# Git
git init 
git remote add origin https://github.com/ReginaBecker2024/cypress-praticando-ci-cd.git
git add .
git commit -m "primeiro commit" 
git branch -M main 
git push
git push --set-upstream origin master
git push -u origin main
