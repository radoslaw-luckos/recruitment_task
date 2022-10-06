import React from 'react'

const EventCard = ({date, firstName, lastName, key}) => {
  return (
      <li data-testid={'event-card'} className="bg-teal-200 p-6 rounded-md w-2/5 mb-5 text-center" key={key}>
        <p className="min-w-200">{date}</p>
        <h3 className="min-w-200">{firstName} {lastName}</h3>
      </li>
  )
}

export default EventCard