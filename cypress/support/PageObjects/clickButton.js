class buttons {
    getClickAntButtons() {
     return cy.get('.ant-btn').click();
    }

    getClickNextButtons() {
        return cy.get('.next-btn').click();
    }
}
export default buttons