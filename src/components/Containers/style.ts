import { Box, styled } from '@mui/material'

// fixme: удалить или переименовать
export const NavigationContainer = styled(Box)`
  display: grid;
  grid-template-columns: auto repeat(2, auto);
  justify-content: space-between;
  align-items: center;
`

// fixme: удалить или переименовать
export const ShortCalendarContainer = styled(Box)`
  display: grid;
  gap: 10px;
  align-items: start;
  align-content: start;
`
// fixme: удалить или переименовать
export const CalendarContainer = styled(Box)`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 10px;
`
