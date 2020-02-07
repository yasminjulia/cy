describe('Testcase 01', () => {
    beforeEach(() => {
        cy.visit('https://www.olx.com.br/')
    })
    it('Procurando um frigobar para meu ap novo', () =>{
        cy.get(id="q").type('frigobar')
        cy.get().click()
        cy.get(class{"submitBtn"}).click()
       // cy.get('button[type=submit]').as('submitBtn')
        //cy.get(class{"link"}).find("DDD 71 - Salvador")
        

        
        cy.get('.gLFyf').type('{enter}')
        cy.contains('Jéssica Campos – Medium').click({force:true})
        cy.get(':nth-child(3) > .cr').contains('Engenheira de Controle e Automação')
    })
});

//*[@id="___gatsby"]/div[3]/div[3]/div[2]/div[1]/div/div[2]/div/a[8]