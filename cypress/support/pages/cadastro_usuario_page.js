/// <reference types="cypress" />

export default {
clicarCadastrar() {
    cy.get('#btnRegister')
        .click()
    },

// //Modelo da biblioteca Chai
//     validarMensagemErro() {
//         cy.get('.errorLabel')
//         .then((element) => {
//         expect(element).to.be.visible
//         expect(element.text()).eq('O campo nome deve ser prenchido')
//         })
//     },

//Modelo do Cypress should
validarMensagemErro(mensagem) {
    cy.get('.errorLabel')
    .should('be.visible')
    .should('have.text', mensagem)
},

preencheNome(nome) {
    cy.get('#user')
    .should('be.visible')
    .type(nome) 
},

preencheEmail(email) {
    cy.get('#email')
    .should('be.visible')
    .type(email)
},

preencheSenha(senha) {
    cy.get('#password')
    .should('be.visible')
    .type(senha) 
},

validarMensagemSucesso(nome) {
    cy.get('#swal2-title')
    .should('be.visible')
    .should('have.text', 'Cadastro realizado!')              

    cy.get('#swal2-html-container')
    .should('be.visible')
    .should('have.text', `Bem-Vindo ${nome}`)       
}
}