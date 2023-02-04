import { createTheme, ThemeProvider, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import {
  Calendar,
  CalendarContainer,
  MONTHS,
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
import { LayoutsStyled } from './style'

export const Layouts = () => {
  const themeModeSelect = useAppSelector(selectThemeMode)
  const dateSelect = useAppSelector(selectDate)

  const diff1Month = new Date(
    dateSelect.getFullYear(),
    dateSelect.getMonth() - 1
  )
  const diff2Month = new Date(
    dateSelect.getFullYear(),
    dateSelect.getMonth() - 2
  )
  const diff3Month = new Date(
    dateSelect.getFullYear(),
    dateSelect.getMonth() - 3
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeModeSelect,
        },
        shape: {
          borderRadius: 10,
        },
      }),
    [themeModeSelect]
  )

  return (
    <ThemeProvider theme={theme}>
      <LayoutsStyled>
        <ShortCalendarContainer>
          <Typography color="primary">
            {MONTHS[diff1Month.getMonth()]}, {diff1Month.getFullYear()}
          </Typography>
          <Calendar selected={diff1Month} compact elevation={0} />
          <Typography color="primary">
            {MONTHS[diff2Month.getMonth()]}, {diff2Month.getFullYear()}
          </Typography>
          <Calendar selected={diff2Month} compact elevation={0} />
          <Typography color="primary">
            {MONTHS[diff3Month.getMonth()]}, {diff3Month.getFullYear()}
          </Typography>
          <Calendar selected={diff3Month} compact elevation={0} />
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
