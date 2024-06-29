// redux/features/todo-slice.ts
import { Countries } from '@/lib/apiSchima'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const statusArray = [
  { id: 'unMember', name: 'Member of the United Nations', checked: false },
  { id: 'independent', name: 'Independent', checked: true },
]
const regions: string[] = ['Americas', 'Asia', 'Europe', 'Africa']

type RootState = {
  foundCountries: number | undefined
  statusArray: typeof statusArray
  regions: string[]
}

const initialState: RootState = {
  foundCountries: 0,
  statusArray,
  regions,
}

const countries = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    handleStatusChange: (state, action: PayloadAction<string>) => {
      const id = action.payload

      state.statusArray = state.statusArray.map((status) => {
        if (status.id === id) {
          status.checked = !status.checked
        }
        return status
      })
    },
    handleRegionChange: (state, action: PayloadAction<string>) => {
      const name = action.payload
      // Check if the region is already in the array
      if (state.regions.includes(name)) {
        // Remove the region by filtering it out
        state.regions = state.regions.filter((region) => region !== name)
      } else {
        // Add the region to the array
        state.regions.push(name)
      }
    },

    setFoundCountries: (state, action: PayloadAction<number>) => {
      if (action.payload) {
        state.foundCountries = action.payload
      }
      return state
    },
  },
})

export const { handleStatusChange, handleRegionChange, setFoundCountries } =
  countries.actions

export default countries.reducer
