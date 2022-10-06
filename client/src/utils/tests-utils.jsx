import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import eventsReducer from '../state/EventsSlice'

export function renderWithProviders(
  ui,
  {
      preloadedState = {
          eventsList: []
      },
    store = configureStore({ reducer: { events: eventsReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
