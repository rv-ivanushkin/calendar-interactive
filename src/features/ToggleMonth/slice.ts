import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'src/types'

export const dateSlice = createSlice({
  name: 'date',
  initialState: new Date().toJSON(),
  reducers: {
    setDate: (state, { payload }: PayloadAction<string>) => payload,
  },
})

export const selectDate = (state: RootState) => new Date(state.date)
