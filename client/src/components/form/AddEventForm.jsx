import {useState} from 'react'
import FormInput from './FormInput'
import FormButton from './FormButton'
import { useFormik } from 'formik'
import { formSchema } from '../../utils/validations/AddEventFormValidation.js'
import { postEvent } from '../../utils/requests/postEvent'
import { useDispatch } from 'react-redux'
import { updateEventsList } from '../../state/EventsSlice.js'

const AddEventForm = () => {

  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()
    const newEvent = values
    const res = await postEvent(newEvent)
    if (res.ok) {
      dispatch(updateEventsList(newEvent))
      setMessage(res.message)
    } else {
      setError(res.message)
    }
  }
    
  const {errors, touched, handleBlur, handleChange, values} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      eventDate: '',
    },
    validationSchema: formSchema,
    onSubmit,
  })
  
  return (
    <div className="h-max-4/5 ">
      <h1 className='text-xl text-cyan-200 my-4 text-center'>Add new event to our DB!</h1>      
      <form onSubmit={onSubmit} className='flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-200 p-12 rounded-md mb-8'>
        <FormInput
          id='firstName'
          title='First Name'
          type='text'
          changeHandler={handleChange}
          value={values.firstName}
          touched={touched.firstName}
          errors={errors.firstName}
          onBlur={handleBlur}
        />
        <FormInput
          id='lastName'
          title='Last Name'
          type='text'
          changeHandler={handleChange}
          value={values.lastName}
          touched={touched.lastName}
          errors={errors.lastName}
          onBlur={handleBlur}
        />
        <FormInput
          id='email'
          title='Email Address'
          type='text'
          changeHandler={handleChange}
          value={values.email}
          touched={touched.email}
          errors={errors.email}
          onBlur={handleBlur}
        />
        <FormInput
          id='eventDate'
          title="Event's Date"
          type='date'
          changeHandler={handleChange}
          value={values.eventDate}
          touched={touched.eventDate}
          errors={errors.eventDate}
          onBlur={handleBlur}
        />
        <FormButton title='Add Event' type="submit" />
        </form>
        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div> 
  )
}

export default AddEventForm