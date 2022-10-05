import React from 'react'
import AddEventForm from './components/form/AddEventForm'
import EventsList from './components/list/EventsList'

const App = () => {

  return (
    <main className='flex flex-row items-start justify-around w-screen h-screen bg-gray-900 overflow-auto p-20 '>

        <AddEventForm />
      <EventsList />
    </main >
  )
}

export default App
