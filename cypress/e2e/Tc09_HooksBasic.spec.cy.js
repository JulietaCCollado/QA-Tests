/*
1. Before
2. After
3. Before Each
4. After Each
*/


describe('Hooks Basics',function(){

    before(function(){
        cy.log('Before block')
    })

    beforeEach(function(){
        cy.log('Before Each block')
    })
    
    it('Search item',function(){
        cy.log('This is Search item block')
    })
    
    it('Order item',function(){
        cy.log('This is Order item block')
    })

    this.afterEach(function(){
        cy.log('After Each block')
    })

    after(function(){
        cy.log('After block')
    })
})