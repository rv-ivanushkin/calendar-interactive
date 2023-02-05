import React from 'react'
import { CalendarRow } from './CalendarRow'
import { CalendarBodyStyled } from './style'
import { BaseNode } from './types'
import { generateRow } from './utils'

export interface CalendarBodyProps {
  dates: BaseNode[]
}

export const CalendarBody = ({ dates }: CalendarBodyProps) => {
  return (
    <CalendarBodyStyled>
      {generateRow(dates).map((rowDate, index) => (
        <CalendarRow key={`CalendarRow_${index.toString()}`} days={rowDate} />
      ))}
    </CalendarBodyStyled>
  )
}
