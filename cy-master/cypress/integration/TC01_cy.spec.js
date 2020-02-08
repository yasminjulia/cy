    describe('Testes toTest.html', () => {
        beforeEach(() => {
            cy.visit('./toTest.html')
        })
        it('Evento de click no botão', () => {
            cy.get('[id="buttonSimple"]').click({ force: true })
            cy.get('[id="buttonSimple"]').should('have.value', 'Obrigado!')
        })
        it('Preencher o campo nome e verifica se contem o nome inserido', () => {

            cy.get('[id="elementosForm:nome"]').type('Julia')
            cy.get('[id="elementosForm:nome"]').should('have.value', 'Julia')
        })
        it('Preencher o campo sobrenome e verifica se contem o nome inserido', () => {

            cy.get('[id="elementosForm:sobrenome"]').type('Guimaraes')
            cy.get('[id="elementosForm:sobrenome"]').should('have.value', 'Guimaraes')
        })
        it('Selecionando sexo', () => {
            cy.get('[id="elementosForm:sexo:1"]').check()
            cy.get('[id="elementosForm:sexo:1"]').should('be.checked')
        })
        it('Comida favorita', () => {
            cy.get('[id="elementosForm:comidaFavorita:3"]').check()
            cy.get('[id="elementosForm:comidaFavorita:3"]').should('be.checked')

        })
        it('Selecionando escolaridade', () => {

            cy.get('[id="elementosForm:escolaridade"]').select('Superior').should('have.value', 'superior')

        })
        it('Selecionando esportes', () => {

            cy.get('[id="elementosForm:esportes"]').select(['Natacao'])
                .should('have.value', 'natacao')
        })
        it('Escrevendo sugestões', () => {

            cy.get('[id="elementosForm:sugestoes"]').type('hello world is an anti curse term')

        })



    })