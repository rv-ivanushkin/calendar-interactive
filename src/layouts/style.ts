import { Box, styled } from '@mui/material'

export const LayoutsStyled = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 5fr;
  background: ${({ theme }) => theme.palette.background.default};
  padding: 10px;
  gap: 20px;
`
