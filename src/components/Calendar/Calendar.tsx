import { Typography } from '@mui/material'
import React from 'react'
import { daysInWeek, daysInWeekShort } from './constants'
import {
  CalendarWithTopPanel,
  CalendarStyled,
  DaysInWeekContainer,
  CalendarNodeStyled,
} from './style'
import { CalendarProps } from './types'
import { getDates, getMonthByDate } from './utils'

export const Calendar = ({ selected, compact = false }: CalendarProps) => {
  const [datesBefore, datesInMoth, datesAfter] = getDates(
    (selected && selected) || new Date()
  )

  const labelsOfWeek = compact ? daysInWeekShort : daysInWeek
  const typographyVariant = compact ? 'caption' : 'h6'
  const elevation = compact ? 0 : 3

  return (
    <CalendarWithTopPanel elevation={elevation}>
      <DaysInWeekContainer>
        {labelsOfWeek.map((day, index) => (
          <Typography
            key={`${day}_${index.toString()}`}
            variant={typographyVariant}
          >
            {day}
          </Typography>
        ))}
      </DaysInWeekContainer>
      <CalendarStyled>
        {datesBefore.map(({ date, nativeDate }, index) => (
          <CalendarNodeStyled
            key={`CalendarNodeS_${index.toString()}`}
            compact={compact}
          >
            <Typography variant={typographyVariant}>
              {index === 0 && !compact
                ? `${date} ${getMonthByDate(nativeDate, true)}`
                : date}
            </Typography>
          </CalendarNodeStyled>
        ))}
        {datesInMoth.map(({ date }, index) => (
          <CalendarNodeStyled
            key={`CalendarNodeS_${index.toString()}`}
            compact={compact}
          >
            <Typography variant={typographyVariant}>{date}</Typography>
          </CalendarNodeStyled>
        ))}
        {datesAfter.map(({ date, nativeDate }, index) => (
          <CalendarNodeStyled
            key={`CalendarNodeS_${index.toString()}`}
            compact={compact}
          >
            <Typography variant={typographyVariant}>
              {index === 0 && !compact
                ? `${date} ${getMonthByDate(nativeDate, true)}`
                : date}
            </Typography>
          </CalendarNodeStyled>
        ))}
      </CalendarStyled>
    </CalendarWithTopPanel>
  )
}
