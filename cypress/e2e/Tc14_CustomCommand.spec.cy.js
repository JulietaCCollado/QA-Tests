describe('Custom Comman test',function(){

    var table;

    beforeEach(function(){
       cy.fixture('ConduitCsv.csv')
       .then(neatCsv)
       .then(data=>{
        table = data
       })
    })
    
    it('Conduit - Valid Credentials',function(){
        cy.conduitLogin(this.data.validEmail,this.data.validPassword)
        cy.contains('Settings').click()
        cy.contains('Or click here to logout.').click()
    })

    it('conduit - Invalid Credentials',function(){
        cy.conduitLogin(this.data.invalidEmail,this.data.invalidPassword)
        cy.get('.error-messages').should('contain','email or password is invalid')
    })
})