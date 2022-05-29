/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3002/ghost/#/signin')
        cy.screenshot();
        cy.get('input[name="identification"]').type('misopruebasautomatizadas@gmail.com')
        cy.screenshot();
        cy.get('input[name="password"]').type('Asdfg12345!')
        cy.screenshot();
        cy.xpath("//span[.='Sign in →']").click()

    })

    it('PR035', () => {
        cy.wait(2000);
        cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[1]').click()
        cy.xpath('//a[@title="New post"]/span').click()
        cy.screenshot();
        let title = cy.faker.lorem.words(5)
        cy.xpath("//textarea[@placeholder='Post title']").type(title)
        cy.contains(('Publish')).should('not.exist')
        cy.screenshot();
    })
})