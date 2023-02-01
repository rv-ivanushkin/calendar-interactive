import { IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { useActionCreators, useAppSelector } from 'src/hooks'
import { months } from 'src/components/Calendar/constants'
import { IconButtonGroup, ToggleMonthStyled } from './style'
import { dateSlice, selectDate } from './slice'

export const ToggleMonth = () => {
  const dispatch = useActionCreators(dateSlice.actions)
  const dateSelect = useAppSelector(selectDate)

  const [date, setDate] = useState(dateSelect)

  const month = months[date.getMonth()]
  const fullYear = date.getFullYear()

  const handlePrevMonth = () =>
    dispatch.setDate(new Date(date.getFullYear(), date.getMonth() - 1))
  const handleNextMonth = () =>
    dispatch.setDate(new Date(date.getFullYear(), date.getMonth() + 1))

  useEffect(() => {
    setDate(dateSelect)
  }, [dateSelect])

  return (
    <ToggleMonthStyled>
      <IconButtonGroup>
        <IconButton size="small" color="primary" onClick={handlePrevMonth}>
          <KeyboardArrowLeftOutlinedIcon fontSize="large" />
        </IconButton>
        <IconButton size="small" color="primary" onClick={handleNextMonth}>
          <KeyboardArrowRightOutlinedIcon fontSize="large" />
        </IconButton>
      </IconButtonGroup>
      <Typography variant="h6" color="primary">
        {month} {fullYear}
      </Typography>
    </ToggleMonthStyled>
  )
}
