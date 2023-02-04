import { CALENDAR_GRID, MONTHS, MONTHS_COMPACT } from './constants'
import { BaseNode } from './types'

export const compareDate = (left: Date, right: Date) => {
  const parseLeft = new Date(left.toJSON().slice(0, 10))
  const parseRight = new Date(right.toJSON().slice(0, 10))

  return parseLeft.getTime() === parseRight.getTime()
}

export const getMonthByDate = (date: Date, short = false): string => {
  if (short) {
    return MONTHS_COMPACT[date.getMonth()]
  }
  return MONTHS[date.getMonth()]
}

export const shiftSunday = (day: number) => (day === 0 ? 6 : day - 1)

export const generateDatesInMonth = (currentDate: Date) => {
  const dates: BaseNode[] = []
  const fullYear = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const lastDayOfMonth = new Date(fullYear, month + 1, 1, -1).getDate()

  let count = 1

  while (count <= lastDayOfMonth) {
    const dateObject = new Date(fullYear, month, count)
    dates.push({
      date: dateObject.getDate(),
      day: shiftSunday(dateObject.getDay()),
      dateObject,
    })
    count += 1
  }
  return dates
}

export const generateDatesBeforeDate = (currentDate: Date) => {
  const dates: BaseNode[] = []
  const fullYear = currentDate.getFullYear()
  const month = currentDate.getMonth()

  let count = shiftSunday(currentDate.getDay())

  while (count >= 0) {
    const dateObject = new Date(fullYear, month, -count)
    dates.push({
      date: dateObject.getDate(),
      day: shiftSunday(dateObject.getDay()),
      dateObject,
    })
    count -= 1
  }
  return dates
}

export const generateAfterDate = (currentDate: Date, diff: number) => {
  const dates: BaseNode[] = []
  const fullYear = currentDate.getFullYear()
  const month = currentDate.getMonth()

  let count = diff
  while (count > 0) {
    const dateObject = new Date(fullYear, month + 1, count)
    dates.push({
      date: dateObject.getDate(),
      day: shiftSunday(dateObject.getDay()),
      dateObject,
    })
    count -= 1
  }
  return dates.reverse()
}

export const getDates = (date: Date) => {
  const datesInMoth = generateDatesInMonth(date)
  const [firstDate, lastDate] = [
    datesInMoth.at(0) as BaseNode,
    datesInMoth.at(-1) as BaseNode,
  ]
  const datesBefore = generateDatesBeforeDate(firstDate.dateObject)
  const datesAfter = generateAfterDate(
    lastDate?.dateObject,
    CALENDAR_GRID - (datesInMoth.length + datesBefore.length)
  )

  return { datesBefore, datesInMoth, datesAfter }
}

export const generateRow = <T>(items: T[], countInRow = 7): T[][] => {
  const rows: T[][] = []
  let count = 0
  while (count < items.length) {
    rows.push(items.slice(count, count + countInRow))
    count += countInRow
  }
  return rows
}
