import {useEffect, useState} from 'react'
import { fetchEvents } from '../../utils/requests/fetchEvents'
import { useSelector, useDispatch } from 'react-redux'
import { createEventsList } from '../../state/EventsSlice'
import EventCard from './EventCard'

const EventsList = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState()
  const events = useSelector(state => state.events.eventsList)
  const dispatch = useDispatch()


  useEffect(() => {    
    const getEvents = async () => {
      const eventsData = await fetchEvents()
      if (eventsData.data) {
        dispatch(createEventsList(eventsData.data))
      } else {
        setFetchError(eventsData.message)
      }
    }
    getEvents()
    setIsLoading(false)
  }, [isLoading, dispatch])

  return (
    <section className="h-5/6 w-1/2 ">
        <h2 className='text-xl text-cyan-200 text-center py-4'>Events List</h2>
        {fetchError && <p className="text-red-600 text-sm text-center">{fetchError}</p>}          
        {events.length === 0 && !fetchError && <p className="text-violet-600 text-sm text-center">There are no events yet! Feel free to add one!</p>}
        <ul className="flex flex-row items-center gap-6 justify-center flex-wrap w-full h-5/6 overflow-y-auto">
          {events.map(event => (
            <EventCard  firstName={event.firstName} lastName={event.lastName} date={event.eventDate} key={event.id}/>
          ))}
        </ul>
    </section>
  )
}

export default EventsList