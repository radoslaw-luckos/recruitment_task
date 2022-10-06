import { formatDate } from '../formatDate'

describe('Util functions tests', () => {
    it('checks date formating function', () => {
        const initialDate = '2022-12-20T00:00:00.000+00:00'
        const formatedDate = formatDate(initialDate)
        expect(formatedDate).toBe('20.12.2022')
    })
    it('checks if date is formated correctly when day number < 10', () => {
        const initialDate = '2022-12-09T00:00:00.000+00:00'
        const formatedDate = formatDate(initialDate)
        expect(formatedDate).toBe('09.12.2022')
    })
    it('checks if date is formated correctly when month number < 10', () => {
        const initialDate = '2022-01-19T00:00:00.000+00:00'
        const formatedDate = formatDate(initialDate)
        expect(formatedDate).toBe('19.01.2022')
    })
})