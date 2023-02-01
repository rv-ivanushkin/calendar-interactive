import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Mode, RootState } from 'src/types'

export const themeModeSlice = createSlice({
  name: 'themeMode',
  initialState: 'light' as Mode,
  reducers: {
    setMode: (state, { payload }: PayloadAction<Mode>) => payload,
  },
})

export const selectThemeMode = (state: RootState) => state.themeMode
