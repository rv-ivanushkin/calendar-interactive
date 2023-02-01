import React from 'react'
import { Button, Typography } from '@mui/material'
import { useActionCreators } from 'src/hooks'
import { dateSlice } from '../ToggleMonth'

export const ButtonToday = () => {
  const dispatch = useActionCreators(dateSlice.actions)

  const handleClick = () => dispatch.setDate(new Date())

  return (
    <Button color="primary" size="large" onClick={handleClick}>
      <Typography variant="h6">Today</Typography>
    </Button>
  )
}
