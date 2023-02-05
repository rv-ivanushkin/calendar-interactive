import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { DAYS_IN_WEEK, DAYS_IN_WEEK_COMPACT } from './constants'
import { CalendarContext } from './context'
import { CalendarHeaderStyled } from './style'

export const CalendarHeader = () => {
  const { compact } = useContext(CalendarContext)
  const months = compact ? DAYS_IN_WEEK_COMPACT : DAYS_IN_WEEK
  const typographyVariant = compact ? 'caption' : 'h6'
  const color = compact ? 'gray' : undefined
  return (
    <CalendarHeaderStyled compact={compact}>
      {months.map((name, index) => (
        <Typography
          color={color}
          variant={typographyVariant}
          key={`month_${index.toString()}`}
        >
          {name}
        </Typography>
      ))}
    </CalendarHeaderStyled>
  )
}
