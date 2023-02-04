import React from 'react'
import { CalendarRow } from './CalendarRow'
import { CalendarBodyStyled } from './style'
import { BaseNode } from './types'
import { generateRow } from './utils'

export interface CalendarBodyProps {
  dates: BaseNode[]
}

export const CalendarBody = ({ dates }: CalendarBodyProps) => {
  const rows = generateRow(dates)
  return (
    <CalendarBodyStyled>
      {rows.map((rowDate, index) => (
        <CalendarRow key={`CalendarRow_${index.toString()}`} days={rowDate} />
      ))}
    </CalendarBodyStyled>
  )
}
