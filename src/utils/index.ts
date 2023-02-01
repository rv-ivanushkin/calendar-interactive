import { months } from 'src/components/Calendar/constants'

export const dateHumanFormat = (date: Date) =>
  `${date.getFullYear()} / ${months[date.getMonth()]}`
