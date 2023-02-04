import { PaperProps } from '@mui/material'
import React, { useMemo } from 'react'
import { CalendarBody } from './CalendarBody'
import { CalendarHeader } from './CalendarHeader'
import { CalendarContext } from './context'
import { CalendarContainer } from './style'
import { getDates } from './utils'

export interface CalendarProps extends PaperProps {
  selected: Date
  compact?: boolean
}

export const Calendar = ({
  selected,
  compact = false,
  ...paperProps
}: CalendarProps) => {
  const { datesAfter, datesInMoth, datesBefore } = getDates(selected)

  const dates = datesBefore.concat(datesInMoth).concat(datesAfter)

  const contextData = useMemo(
    () => ({
      compact,
    }),
    [compact]
  )

  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <CalendarContext.Provider value={contextData}>
      <CalendarContainer {...paperProps}>
        <CalendarHeader />
        <CalendarBody dates={dates} />
      </CalendarContainer>
    </CalendarContext.Provider>
  )
}
