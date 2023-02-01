import { calendarGrid, months, monthsShort } from './constants'
import { CalendarNode } from './types'

export const getMonthByDate = (date: Date, short = false): string => {
  if (short) {
    return monthsShort[date.getMonth()]
  }
  return months[date.getMonth()]
}

export const shiftSunday = (day: number) => (day === 0 ? 6 : day - 1)

export const generateDatesInMonth = (currentDate: Date) => {
  const dates: CalendarNode[] = []
  const fullYear = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const lastDayOfMonth = new Date(fullYear, month + 1, 1, -1).getDate()

  let count = 1

  while (count <= lastDayOfMonth) {
    const current = new Date(fullYear, month, count)
    dates.push({
      date: current.getDate(),
      day: shiftSunday(current.getDay()),
      nativeDate: current,
    })
    count += 1
  }
  return dates
}

export const generateDatesBeforeDate = (currentDate: Date) => {
  const dates: CalendarNode[] = []
  const fullYear = currentDate.getFullYear()
  const month = currentDate.getMonth()

  let count = shiftSunday(currentDate.getDay())

  while (count >= 0) {
    const current = new Date(fullYear, month, -count)
    dates.push({
      date: current.getDate(),
      day: shiftSunday(current.getDay()),
      nativeDate: current,
    })
    count -= 1
  }
  return dates
}

export const generateAfterDate = (currentDate: Date, diff: number) => {
  const dates: CalendarNode[] = []
  const fullYear = currentDate.getFullYear()
  const month = currentDate.getMonth()

  let count = diff
  while (count > 0) {
    const current = new Date(fullYear, month + 1, count)
    dates.push({
      date: current.getDate(),
      day: shiftSunday(current.getDay()),
      nativeDate: current,
    })
    count -= 1
  }
  return dates.reverse()
}

export const getDates = (date: Date): CalendarNode[][] => {
  const datesInMoth = generateDatesInMonth(date)
  const [firstDate, lastDate] = [
    datesInMoth.at(0) as CalendarNode,
    datesInMoth.at(-1) as CalendarNode,
  ]
  const datesBefore = generateDatesBeforeDate(firstDate.nativeDate)
  const datesAfter = generateAfterDate(
    lastDate?.nativeDate,
    calendarGrid - (datesInMoth.length + datesBefore.length)
  )

  return [datesBefore, datesInMoth, datesAfter]
}
