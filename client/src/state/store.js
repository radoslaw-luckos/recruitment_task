import { configureStore } from '@reduxjs/toolkit'
import eventsReducer from './EventsSlice'

export const store = configureStore({
    reducer: {
        events: eventsReducer
    },
})