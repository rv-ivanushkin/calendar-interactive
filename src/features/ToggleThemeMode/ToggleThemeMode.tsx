import React, { MouseEvent } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useActionCreators, useAppSelector } from 'src/hooks'
import { Mode } from 'src/types'
import { selectThemeMode, themeModeSlice } from './slice'

export const ToggleThemeMode = () => {
  const dispatch = useActionCreators(themeModeSlice.actions)
  const themeModeSelect = useAppSelector(selectThemeMode)

  const handleChange = (event: MouseEvent<HTMLElement>, value: Mode) => {
    if (value) dispatch.setMode(value)
  }

  return (
    <ToggleButtonGroup
      value={themeModeSelect}
      exclusive
      size="small"
      onChange={handleChange}
    >
      <ToggleButton value="light">
        <LightModeIcon fontSize="small" />
      </ToggleButton>
      <ToggleButton value="dark">
        <DarkModeOutlinedIcon fontSize="small" />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
