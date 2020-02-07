describe('Testcase 01', () => {
    beforeEach(() => {
        cy.visit('https://www.olx.com.br/')
    })
    it('Procurando um frigobar para meu ap novo', () =>{
        cy.get(id="q").type('frigobar')

        
        cy.get('.gLFyf').type('{enter}')
        cy.contains('Jéssica Campos – Medium').click({force:true})
        cy.get(':nth-child(3) > .cr').contains('Engenheira de Controle e Automação')
    })
});