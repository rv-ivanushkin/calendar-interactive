import { Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CalendarContext } from './context'
import { CalendarCellStyled } from './style'
import { BaseNode } from './types'

export interface CalendarCellProps {
  cell: BaseNode
}

export const CalendarCell = ({ cell }: CalendarCellProps) => {
  const { compact } = useContext(CalendarContext)
  const typographyVariant = compact ? 'caption' : 'h6'
  const { date } = cell

  return (
    <CalendarCellStyled compact={compact}>
      <Button>
        <Typography variant={typographyVariant}>{date}</Typography>
      </Button>
    </CalendarCellStyled>
  )
}
