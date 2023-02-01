import { Paper, styled } from '@mui/material'

export const CalendarStyled = styled('div')`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);

  & div {
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
    border-right: 1px solid ${({ theme }) => theme.palette.divider};
  }
  & div:nth-child(7n) {
    border-right: none;
  }

  & div:nth-child(7n-1),
  div:nth-child(7n) {
    background: ${({ theme }) => theme.palette.action.hover};
  }
`

export const DaysInWeekContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.palette.divider};
  background: ${({ theme }) => theme.palette.background.paper};
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`

export const CalendarWithTopPanel = styled(Paper)`
  display: grid;
  grid-template-rows: auto 1fr;
`

export const CalendarNodeStyled = styled('div')<{ compact?: boolean }>`
  display: grid;
  justify-items: ${({ compact = false }) => (compact ? 'center' : 'auto')};
  padding: ${({ compact = false }) =>
    compact ? '5px' : '15px 10px 10px 15px'};
`
