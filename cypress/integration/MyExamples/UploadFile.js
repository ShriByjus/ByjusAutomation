describe('upload file',()=> {
    it('file upload test',()=> {
        cy.visit('enter website here')
        const filepath = 'image.png'
           cy.get('input[type="file"]').attachFile(filepath)
    })
})