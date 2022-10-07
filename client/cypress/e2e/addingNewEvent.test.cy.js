describe('Adding new event', () => {
  it('tests if user can add new event', () => {

    //mock api GET events call
    cy.intercept('GET', 'http://localhost:5000/events', { fixture: 'interceptGETfixture.json' }).as('getEvents')

    //visit website
    cy.visit('http://localhost:3000/')

    // fill up the form
    cy.findByRole('textbox', { name: /first name/i }).type("Example 3")
    cy.findByRole('textbox', { name: /last name/i }).type("Example")
    cy.findByRole('textbox', { name: /email/i }).type("example@hotmail.com")
    cy.findByLabelText(/event's date/i).type('2022-12-20')

    //submit form
    cy.findByRole('button').click()

    // // mock api response
    cy.intercept(
      {
        method: 'POST',
        url: 'http://localhost:5000/events',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
      }, { fixture: 'interceptPOSTfixture.json' }
    ).as('postEvent')

    //check for success message
    cy.findByText('Event successfully created!')

    //check if event was posted
    cy.findByRole('list').get('li').last().contains('20.12.2022')
  })
})