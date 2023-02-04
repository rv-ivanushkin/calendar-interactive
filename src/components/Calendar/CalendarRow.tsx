import React from 'react'
import { CalendarCell } from './CalendarCell'
import { CalendarRowStyled } from './style'
import { BaseNode } from './types'

interface CalendarRowProps {
  days: BaseNode[]
}

export const CalendarRow = ({ days }: CalendarRowProps) => (
  <CalendarRowStyled>
    {days.map((date, index) => (
      <CalendarCell key={`Typography_${index.toString()}`} cell={date} />
    ))}
  </CalendarRowStyled>
)
