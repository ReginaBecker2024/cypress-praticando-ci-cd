describe('Login', () => {
    
    it('Login campo nome vazio', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-lock')
            .click()
        // verifica se esta na pagina de cadastro
        cy.get('#user')
            .should('be.visible')

        cy.get('#btnRegister')
            .click()

        cy.get('.errorLabel')
            .should('have.text', 'O campo nome deve ser prenchido')
    }) 

    it('Login campo e-mail vazio', () => {
    cy.visit('/')
        .get('.header-logo')

    cy.get('.fa-lock')
        .click()

    // verifica se esta na pagina de cadastro
    cy.get('#user')
        .should('be.visible')
        .type('Regina')

    cy.get('#btnRegister')
        .click()

    cy.get('.errorLabel')
        .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    })        
    
    it('Login campo senha vazio', () => {
    cy.visit('/')
        .get('.header-logo')

    cy.get('.fa-lock')
        .click()

    // verifica se esta na pagina de cadastro
    cy.get('#user')
        .should('be.visible')
        .type('Regina')

    cy.get('#email')
        .should('be.visible')
        .type('thinaregina@gmail.com')

    cy.get('#btnRegister')
        .click()

    cy.get('.errorLabel')
        .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')          
    }) 

    it('Login com sucesso', () => {
    cy.visit('/')
        .get('.header-logo')

    cy.get('.fa-lock')
        .click()

    // verifica se esta na pagina de cadastro
    cy.get('#user')
        .should('be.visible')
        .type('Regina')

    cy.get('#email')
        .should('be.visible')
        .type('thinaregina@gmail.com')

    cy.get('#password')
        .should('be.visible')
        .type('123456')        

    cy.get('#btnRegister')
        .click()   
        
    cy.get('#swal2-title')
        .should('have.text', 'Cadastro realizado!')              
    })    
 })