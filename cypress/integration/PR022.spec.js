const datapool = require("./data/A_PRIORI_DATA_TAGS.json");

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

    it('PR022', () => {
        cy.contains('Tags').click();
        cy.wait(2000)
        cy.screenshot();
        cy.contains('New tag').click();
        cy.wait(2000)
        cy.screenshot();
        cy.get('#tag-name').type(datapool[4].tag_name);
        cy.wait(2000)
        cy.screenshot();
        cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[4]/div[1]/button/span').click();
        cy.wait(2000);
        cy.screenshot();
        cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[4]/div[2]/div/div/div/div[1]/div/div/div[6]/div[1]/div/div/div/div[5]/div/pre').type(datapool[4].tag_code_injection.tag_header);
        cy.wait(2000);
        cy.screenshot();
        cy.contains('Save').click();
        cy.wait(2000)
        cy.screenshot();
        cy.contains('Tags').click();
        cy.wait(2000)
        cy.screenshot();
    })
})