import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FormInput from '../FormInput'

describe('Add new event form field', () => {
    it('should render error after leaving empty field', () => {
        render(<FormInput
            id='firstName'
            title='First Name'
            type='text'
            errors='First name is a required field'
            value=''
            touched
        />)
        expect(screen.getByText('First name is a required field').toBeInTheDocument()
    })
    it('should render error after entering wrong email', () => {
        render(<FormInput
            id='email'
            title='Email Address'
            type='text'
            errors='Email address must be a valid email'
            value='luckos.rgmail.com'
            touched
        />)
        expect(screen.getByText('Email address must be a valid email').toBeInTheDocument()
    })
})