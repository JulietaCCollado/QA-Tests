/// <reference types="Cypress" />

describe('Advanced UI Elements',function(){
    it('Iframes',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(function($iframe){
            const element = $iframe.contents().find('#tinymce')
            cy.wrap(element).clear().type('Hello TextBox')
        })
    })
})