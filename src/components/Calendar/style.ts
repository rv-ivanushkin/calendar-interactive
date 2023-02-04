import { Paper, styled } from '@mui/material'

export const CalendarContainer = styled(Paper)`
  display: grid;
  grid-template-rows: auto 1fr;
  border: 1px solid ${({ theme }) => theme.palette.divider};
`
export const CalendarHeaderStyled = styled('div')<{ compact: boolean }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  padding: ${({ compact }) => (compact ? 'auto' : '15px')};
  border-top-left-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border-top-right-radius: ${({ theme }) => theme.shape.borderRadius}px;

  background: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey[200]
      : theme.palette.grey[800]};
`

export const CalendarBodyStyled = styled('div')`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
`

export const CalendarRowStyled = styled('div')`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

  &:nth-of-type(6n) {
    border-bottom: 0;
  }

  &:nth-of-type(1n) :nth-of-type(7n) {
    border-right: 0;
  }

  &:nth-of-type(1n) :nth-of-type(7n),
  &:nth-of-type(1n) :nth-of-type(6n) {
    background: ${({ theme }) =>
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800]};
  }

  &:nth-of-type(6n) :nth-of-type(7n),
  &:nth-of-type(7n) :nth-of-type(6n) {
    border-bottom-right-radius: ${({ theme }) => theme.shape.borderRadius}px;
  }
`

export const CalendarCellStyled = styled('div')<{ compact: boolean }>`
  display: grid;
  padding: ${({ compact }) => (compact ? 'auto' : '6px')};
  border-right: 1px solid ${({ theme }) => theme.palette.divider};

  & button {
    position: relative;
    border-radius: ${({ compact, theme }) =>
      compact ? 'inherit' : `${theme.shape.borderRadius}px`};
    min-width: auto;
    display: grid;
    align-items: ${({ compact }) => (compact ? 'center' : 'start')};
    justify-content: ${({ compact }) => (compact ? 'center' : 'start')};
  }
`
export const ForecastStyled = styled('div')`
  display: grid;
  width: auto;
  position: absolute;
  right: 10px;
  bottom: 10px;
  justify-items: center;
  align-items: start;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`

export const ForecastThermostatStyled = styled('div')`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`

export const ForecastWithToParamsStyled = styled('div')`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.grey[500]};
`
