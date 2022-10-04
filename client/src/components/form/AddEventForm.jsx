import React from 'react'
import { useFormik } from 'formik'
import FormInput from './FormInput'

const AddEventForm = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          eventDate: ''
        }
      })
    return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col items-center justify-center'>
      <FormInput
        id='firstName'
        title='First Name'
        type='text'
        changeHandler={formik.handleChange}
        value={formik.values.firstName}
      />
      <FormInput
        id='lastName'
        title='Last Name'
        type='text'
        changeHandler={formik.handleChange}
        value={formik.values.lastName}
      />
      <FormInput
        id='email'
        title='Email Address'
        type='email'
        changeHandler={formik.handleChange}
        value={formik.values.email}
      />
      <FormInput
        id='date'
        title="Event's Date"
        type='date'
        changeHandler={formik.handleChange}
        value={formik.values.eventDate}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddEventForm