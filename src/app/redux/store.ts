// redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import countriesReducer from './features/countrySlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
