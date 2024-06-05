// redux/features/todo-slice.ts
import { Countries } from '@/lib/apiSchima'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CountriesState = {
  countries: Countries[]
  count: number
}

const initialState: CountriesState = {
  countries: [],
  count: 0,
}

const countries = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    addCount: (state) => {
      state.count += 1
    },
  },
})

export const { addCount } = countries.actions
export default countries.reducer
