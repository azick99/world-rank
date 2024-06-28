// redux/features/todo-slice.ts
import { Countries } from '@/lib/apiSchima'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const statusArray = [
  { id: 'unMember', name: 'Member of the United Nations', checked: false },
  { id: 'independent', name: 'Independent', checked: true },
]

type StatusArray = typeof statusArray
type RootState = {
  countries: Countries[]
  statusArray: StatusArray
}

const initialState: RootState = {
  countries: [],
  statusArray,
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

  },
})

export const { handleStatusChange } = countries.actions

export default countries.reducer
