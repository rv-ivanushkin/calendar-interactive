import React, { useContext, useEffect, useState } from 'react'
import { useAppDispatch } from 'src/hooks'
import { CalendarRow } from './CalendarRow'
import { CalendarContext } from './context'
import { useGetForecastQuery, weatherForecastApi } from './service'
import { CalendarBodyStyled } from './style'
import { BaseNode } from './types'
import { dateFormat, generateRow, getEndDateForForecast } from './utils'

export interface CalendarBodyProps {
  dates: BaseNode[]
  startDate: Date | null
  endDate: Date | null
}

export const CalendarBody = ({
  dates: originalDates,
  startDate,
  endDate,
}: CalendarBodyProps) => {
  const dispatch = useAppDispatch()
  const { compact } = useContext(CalendarContext)
  const [skip, setSkip] = useState<boolean>(true)
  const [dates, setDates] = useState(originalDates)

  useEffect(() => {
    setSkip(compact && Boolean(endDate) && Boolean(startDate))
  }, [compact, endDate, startDate])

  const { data: forecast, isError } = useGetForecastQuery(
    {
      start_date:
        (startDate && dateFormat(getEndDateForForecast(startDate))) || '',
      end_date: (endDate && dateFormat(getEndDateForForecast(endDate))) || '',
    },
    {
      skip,
    }
  )

  useEffect(() => {
    if (forecast && forecast.length && !isError) {
      setDates(
        originalDates.map((date, index) =>
          index <= forecast.length ? { ...date, ...forecast[index] } : date
        )
      )
    } else if (isError) {
      dispatch(weatherForecastApi.util.resetApiState())
    } else {
      setDates(originalDates)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forecast, isError, originalDates])

  return (
    <CalendarBodyStyled>
      {generateRow(dates).map((rowDate, index) => (
        <CalendarRow key={`CalendarRow_${index.toString()}`} days={rowDate} />
      ))}
    </CalendarBodyStyled>
  )
}
