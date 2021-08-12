/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

       /*  const title = cy.title()
        console.log(title) */

        //cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')//.debug()
        
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo')
    })

    it('Should find and interact whit an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple').click()

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')        
    })

})