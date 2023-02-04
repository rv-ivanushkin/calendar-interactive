import { PaperProps } from '@mui/material'
import React, { useMemo } from 'react'
import { CalendarBody } from './CalendarBody'
import { CalendarHeader } from './CalendarHeader'
import { CalendarContext } from './context'
import { useDateWithForecast } from './hooks'
import { CalendarContainer } from './style'

export interface CalendarProps extends PaperProps {
  selected: Date
  compact?: boolean
}

export const Calendar = ({
  selected,
  compact = false,
  ...paperProps
}: CalendarProps) => {
  const contextData = useMemo(
    () => ({
      compact,
    }),
    [compact]
  )
  const { dates, startDate, endDate } = useDateWithForecast(selected)
  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <CalendarContext.Provider value={contextData}>
      <CalendarContainer {...paperProps}>
        <CalendarHeader />
        <CalendarBody dates={dates} startDate={startDate} endDate={endDate} />
      </CalendarContainer>
    </CalendarContext.Provider>
  )
}
