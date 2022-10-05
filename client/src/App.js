import React from 'react'
import AddEventForm from './components/form/AddEventForm'
import EventsList from './components/list/EventsList'

const App = () => {

  return (
      <main className='flex flex-col items-center justify-center w-screen h-screen bg-gray-900'>
        <h1 className='text-xl text-cyan-200 pb-8'>Add new event to our DB!</h1>
        <AddEventForm />
        <EventsList />
      </main>
  )
}

export default App
