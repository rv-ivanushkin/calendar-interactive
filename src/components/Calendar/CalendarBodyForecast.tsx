import React from 'react'
import { CalendarRow } from './CalendarRow'
import { useDateWithForecast } from './hooks'
import { CalendarBodyStyled } from './style'
import { BaseNode } from './types'
import { generateRow } from './utils'

export interface CalendarBodyForecastProps {
  dates: BaseNode[]
  startDate: Date
  endDate: Date
}

export const CalendarBodyForecast = ({
  dates,
  startDate,
  endDate,
}: CalendarBodyForecastProps) => {
  const { datesWithForecast } = useDateWithForecast({
    dates,
    startDate,
    endDate,
  })

  return (
    <CalendarBodyStyled>
      {generateRow(datesWithForecast).map((rowDate, index) => (
        <CalendarRow key={`CalendarRow_${index.toString()}`} days={rowDate} />
      ))}
    </CalendarBodyStyled>
  )
}
