import { Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import AirIcon from '@mui/icons-material/Air'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { CalendarContext } from './context'
import {
  CalendarCellStyled,
  ForecastStyled,
  ForecastWithToParamsStyled,
} from './style'
import { BaseNodeWithForecast } from './types'

export interface CalendarCellProps {
  cell: BaseNodeWithForecast
}

export const CalendarCell = ({ cell }: CalendarCellProps) => {
  const { compact } = useContext(CalendarContext)
  const color = compact ? 'inherit' : undefined
  const typographyVariant = compact ? 'caption' : 'h6'
  const {
    date,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    temperature_2m_max,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    temperature_2m_min,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    windspeed_10m_max,
    sunrise,
    sunset,
  } = cell

  return (
    <CalendarCellStyled compact={compact}>
      <Button color={color}>
        <Typography variant={typographyVariant}>{date}</Typography>
        <ForecastStyled>
          {sunrise && (
            <ForecastWithToParamsStyled>
              <WbSunnyIcon fontSize="small" />
              <Typography variant="caption">
                {new Date(Number(sunrise) * 1000).getHours()}
              </Typography>
            </ForecastWithToParamsStyled>
          )}
          {sunset && (
            <ForecastWithToParamsStyled>
              <DarkModeIcon fontSize="small" />
              <Typography variant="caption">
                {new Date(Number(sunset) * 1000).getHours()}
              </Typography>
            </ForecastWithToParamsStyled>
          )}
          {windspeed_10m_max && (
            <ForecastWithToParamsStyled>
              <AirIcon fontSize="small" />
              <Typography variant="caption">{windspeed_10m_max}</Typography>
            </ForecastWithToParamsStyled>
          )}
          {temperature_2m_max && (
            <ForecastWithToParamsStyled>
              <ThermostatIcon fontSize="small" />
              <Typography variant="caption">{temperature_2m_max} C</Typography>
            </ForecastWithToParamsStyled>
          )}
        </ForecastStyled>
      </Button>
    </CalendarCellStyled>
  )
}
