context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3002/ghost/#/signin');
        cy.screenshot();
        cy.get('input[name="identification"]').type('misopruebasautomatizadas@gmail.com');
        cy.screenshot();
        cy.get('input[name="password"]').type('Asdfg12345!');
        cy.screenshot();
        cy.xpath("//span[.='Sign in →']").click();
        cy.wait(2000)
        cy.screenshot();
    })

    it('PR001', () => {
        cy.contains('Tags').click();
        cy.wait(2000)
        cy.screenshot();
        cy.contains('New tag').click();
        cy.wait(2000)
        cy.screenshot();
        cy.get('#tag-name').type(cy.faker.lorem.words());
        cy.wait(2000)
        cy.screenshot();
        cy.contains('Save').click();
        cy.wait(2000)
        cy.screenshot();
        cy.contains('Tags').click();
        cy.wait(2000)
        cy.screenshot();
    })
})