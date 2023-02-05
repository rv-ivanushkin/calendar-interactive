import { useContext, useEffect, useMemo, useState } from 'react'
import { useAppDispatch } from 'src/hooks'
import { CalendarContext } from './context'
import { useGetForecastQuery, weatherForecastApi } from './service'
import { BaseNode, BaseNodeWithForecast } from './types'
import {
  dateFormat,
  dateFormat,
  getDates,
  getEndDateForForecast,
} from './utils'

export const useDateWithoutForecast = (selected: Date) => {
  const { datesBefore, datesInMoth, datesAfter } = useMemo(
    () => getDates(selected),
    [selected]
  )

  const dates = datesBefore.concat(datesInMoth).concat(datesAfter)
  const startDate = dates[0].dateObject
  const endDate = dates[dates.length - 1].dateObject

  return { dates, startDate, endDate }
}

export interface UseDateWithForecastProps {
  dates: BaseNode[]
  startDate: Date
  endDate: Date
}

export const useDateWithForecast = ({
  dates,
  startDate,
  endDate,
}: UseDateWithForecastProps) => {
  const now = new Date(new Date().toJSON().slice(0, 10))
  const { compact } = useContext(CalendarContext)
  const [skip, setSkip] = useState(true)

  const [datesWithForecast, setDatesWithForecast] = useState<
    BaseNodeWithForecast[]
  >([])

  const {
    data: forecast,
    isError,
    isFetching,
  } = useGetForecastQuery(
    {
      start_date:
        (startDate && dateFormat(getEndDateForForecast(startDate))) || '',
      end_date: (endDate && dateFormat(getEndDateForForecast(endDate))) || '',
    },
    {
      skip,
    }
  )

  useEffect(() => {
    setSkip(
      compact && Boolean(endDate) && Boolean(startDate) && startDate < now
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [compact, startDate, endDate])

  useEffect(() => {
    if (!isFetching && isError) {
      setDatesWithForecast(dates)
    } else if (!isFetching && !isError && forecast) {
      setDatesWithForecast(
        dates.map((date, index) =>
          index <= forecast.length ? { ...date, ...forecast[index] } : date
        )
      )
    } else {
      setDatesWithForecast(dates)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, isError, forecast])

  return { datesWithForecast }
}
