import React from 'react'

const EventCard = ({date, firstName, lastName, key}) => {
  return (
      <li className="bg-teal-200 p-6 rounded-md w-5/12 mb-5 text-center" key={key}>
        <p className="w-200">{date}</p>
        <h3 className="w-200">{firstName} {lastName}</h3>
      </li>
  )
}

export default EventCard