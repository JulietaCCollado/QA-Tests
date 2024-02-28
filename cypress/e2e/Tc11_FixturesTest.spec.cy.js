/// <reference types="Cypress" />


describe('Fixtures test',function(){

    beforeEach(function(){
        cy.fixture('conduitLoginData').as('data')
    })
    
    it('Conduit - Valid Credentials',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder="Email"]').type(this.data.validEmail)
        cy.get('input[placeholder="Password"]').type(this.data.validPassword)
        cy.get('button[type="submit"]').click()
        cy.contains('Settings').click()
        cy.contains('Or click here to logout.').click()
    })

    it('conduit - Invalid Credentials',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"').click()
        cy.get('input[placeholder="Email"]').type(this.data.invalidEmail)
        cy.get('input[placeholder="Password"]').type(this.data.invalidPassword)
        cy.get('button[type="submit"]').click()
        cy.get('.error-messages').should('contain','email or password is invalid')
    })
})