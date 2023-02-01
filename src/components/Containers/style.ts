import { Box, styled } from '@mui/material'

export const NavigationContainer = styled(Box)`
  display: grid;
  grid-template-columns: auto repeat(2, auto);
  justify-content: space-between;
  align-items: center;
`

export const ShortCalendarContainer = styled(Box)`
  display: grid;
  gap: 10px;
  align-items: start;
  align-content: start;
`

export const CalendarContainer = styled(Box)`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 10px;
`
