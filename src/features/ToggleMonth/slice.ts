import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/types'

export const dateSlice = createSlice({
  name: 'date',
  initialState: new Date(),
  reducers: {
    setDate: (state, { payload }: PayloadAction<Date>) => payload,
  },
})

export const selectDate = (state: RootState) => state.date
