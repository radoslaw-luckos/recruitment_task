

describe('Adding new event', () => {
  it('tests if user can add new event', () => {
    cy.visit('http://localhost:3000/')

    // fill up the form
    cy.findByRole('textbox', { name: /first name/i }).type("Radosław")
    cy.findByRole('textbox', { name: /last name/i }).type("Łuckoś")
    cy.findByRole('textbox', { name: /email/i }).type("luckos.r@hotmail.com")
    cy.findByLabelText(/event's date/i).type('2022-12-20')

    //submit form
    cy.findByRole('button').click()

    //check for success message
    cy.findByText('Event successfully created!')

    //check if event was posted
    cy.findByRole('list').get('li').last().contains('2022-12-20')
  })
})