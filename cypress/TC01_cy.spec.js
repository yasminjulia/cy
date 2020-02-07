describe('Testcase 01', () => {
    beforeEach(() => {
        cy.visit('http://sistema.seia.ba.gov.br/')
    })
    it('Buscando perfil no medium', () =>{
        cy.get('.gLFyf').type('Jessica Campos Medium')
        cy.get('.gLFyf').type('{enter}')
        cy.contains('Jéssica Campos – Medium').click({force:true})
        cy.get(':nth-child(3) > .cr').contains('Engenheira de Controle e Automação')
    })
});