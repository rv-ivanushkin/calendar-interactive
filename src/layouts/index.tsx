import { createTheme, ThemeProvider, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import {
  Calendar,
  CalendarContainer,
  NavigationContainer,
  ShortCalendarContainer,
} from 'src/components'
import {
  ButtonToday,
  selectDate,
  selectThemeMode,
  ToggleMonth,
  ToggleThemeMode,
} from 'src/features'
import { useAppSelector } from 'src/hooks'
import { dateHumanFormat } from 'src/utils'
import { LayoutsStyled } from './style'

export const Layouts = () => {
  const themeModeSelect = useAppSelector(selectThemeMode)
  const dateSelect = useAppSelector(selectDate)

  const [date, setDate] = useState(dateSelect)

  const diff1Month = new Date(date.getFullYear(), date.getMonth() - 1)
  const diff2Month = new Date(date.getFullYear(), date.getMonth() - 2)
  const diff3Month = new Date(date.getFullYear(), date.getMonth() - 3)

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeModeSelect,
        },
      }),
    [themeModeSelect]
  )

  useEffect(() => {
    setDate(dateSelect)
  }, [dateSelect])

  return (
    <ThemeProvider theme={theme}>
      <LayoutsStyled>
        <ShortCalendarContainer>
          <Typography color="primary">{dateHumanFormat(diff1Month)}</Typography>
          <Calendar selected={diff1Month} compact />
          <Typography color="primary">{dateHumanFormat(diff2Month)}</Typography>
          <Calendar selected={diff2Month} compact />
          <Typography color="primary">{dateHumanFormat(diff3Month)}</Typography>
          <Calendar selected={diff3Month} compact />
        </ShortCalendarContainer>
        <CalendarContainer>
          <NavigationContainer>
            <ToggleMonth />
            <ButtonToday />
            <ToggleThemeMode />
          </NavigationContainer>
          <Calendar selected={dateSelect} />
        </CalendarContainer>
      </LayoutsStyled>
    </ThemeProvider>
  )
}
