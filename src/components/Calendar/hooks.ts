import { useEffect, useState } from 'react'
import { BaseNodeWithForecast } from './types'
import { getDates, getEndDateForForecast } from './utils'

export const useDateWithForecast = (selected: Date) => {
  const [dates, setDates] = useState<BaseNodeWithForecast[]>([])
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  useEffect(() => {
    const { datesBefore, datesInMoth, datesAfter } = getDates(selected)
    const datesConcat = datesBefore.concat(datesInMoth).concat(datesAfter)
    setStartDate(datesConcat[0].dateObject)
    setEndDate(
      getEndDateForForecast(datesConcat[datesConcat.length - 1].dateObject)
    )
    setDates(datesConcat)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return { dates, startDate, endDate }
}
