import { screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import EventsList from '../EventsList'
import { renderWithProviders } from '../../../utils/tests-utils'

describe('Events List Component conditional rendering tests', () => {
    it('checks conditional rendering for empty events list', () => {
        // render events list component 
        renderWithProviders(<EventsList />)

        //check if correct paragraph renders
        const emptyList = screen.queryAllByTestId(/event-card/i)
        expect(emptyList.length).toBe(0)


        const emptyListParagraph = screen.queryByText(/there are no events yet! feel free to add one!/i)
        expect(emptyListParagraph).toBeInTheDocument()
    })
})