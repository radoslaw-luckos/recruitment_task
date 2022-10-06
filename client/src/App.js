import React from 'react'
import AddEventForm from './components/form/AddEventForm'
import EventsList from './components/list/EventsList'

const App = () => {

  return (
    <main className='flex flex-row flex-wrap items-start justify-around w-screen h-screen bg-gray-900 p-20'>
      <AddEventForm />
      <EventsList />
    </main >
  )
}

export default App
