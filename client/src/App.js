
import React from 'react'
import AddEventForm from './components/form/AddEventForm'
import EventsList from './components/list/EventsList'

const App = () => {

  return (
    <main className='flex flex-col items-center justify-center w-screen h-screen bg-blue-900'>
      <AddEventForm />
      <EventsList />
    </main>
  )
}

export default App
