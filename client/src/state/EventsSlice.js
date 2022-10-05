import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    eventsList: []
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        createEventsList: (state, action) => {
            state.eventsList = action.payload
        },
        updateEventsList: (state, action) => {
            state.eventsList = [...state.eventsList, action.payload]
        }
    },
})

export const { createEventsList, updateEventsList } = eventsSlice.actions

export default eventsSlice.reducer