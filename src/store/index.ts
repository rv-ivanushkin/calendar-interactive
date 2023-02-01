import { configureStore } from '@reduxjs/toolkit'
import { dateSlice, themeModeSlice } from 'src/features'

export const store = configureStore({
  reducer: {
    themeMode: themeModeSlice.reducer,
    date: dateSlice.reducer,
  },
  // middleware: (gDM) => gDM().concat()
})
