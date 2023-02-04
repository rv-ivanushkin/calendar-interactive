import { configureStore } from '@reduxjs/toolkit'
import { weatherForecastApi } from 'src/components/Calendar'
import { dateSlice, themeModeSlice } from 'src/features'

export const store = configureStore({
  reducer: {
    themeMode: themeModeSlice.reducer,
    date: dateSlice.reducer,
    [weatherForecastApi.reducerPath]: weatherForecastApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherForecastApi.middleware),
})
