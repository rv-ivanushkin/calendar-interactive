import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import queryString from 'query-string'
import { FORECAST_QUERY_PARAMS } from './constants'
import {
  DailyUnits,
  ForecastWithDate,
  GetForecastParams,
  GetForecastResponse,
} from './types'

export const weatherForecastApi = createApi({
  reducerPath: 'weatherForecastApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.open-meteo.com/v1/',
    paramsSerializer: (params) =>
      queryString.stringify(params, { encode: false }),
  }),
  tagTypes: ['Forecast'],
  endpoints: (builder) => ({
    getForecast: builder.query<ForecastWithDate[], GetForecastParams>({
      query: (params) => ({
        url: 'forecast',
        params: { ...FORECAST_QUERY_PARAMS, ...params },
      }),
      transformErrorResponse(baseQueryReturnValue, meta, arg) {
        return null
      },
      transformResponse: (
        baseQueryReturnValue: GetForecastResponse,
        meta,
        arg
      ) => {
        const result: ForecastWithDate[] = []
        const times = baseQueryReturnValue.daily.time
        for (let i = 0; i < times.length; i += 1) {
          result.push({
            time: times[i],
            temperature_2m_max:
              baseQueryReturnValue.daily.temperature_2m_max[i],
            temperature_2m_min:
              baseQueryReturnValue.daily.temperature_2m_min[i],
            sunrise: baseQueryReturnValue.daily.sunrise[i],
            sunset: baseQueryReturnValue.daily.sunset[i],
            windspeed_10m_max: baseQueryReturnValue.daily.windspeed_10m_max[i],
          })
        }

        return result
      },
    }),
  }),
})

export const { useGetForecastQuery } = weatherForecastApi
