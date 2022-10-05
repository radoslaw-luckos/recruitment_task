import { object, string, date } from 'yup'

export const formSchema = object({
    firstName: string().label('First name').required(),
    lastName: string().label('Last name').required(),
    email: string().label('Email address').email().required(),
    date: date().label("Event's date").required()
});
