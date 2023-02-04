export const DAYS_IN_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export const DAYS_IN_WEEK_COMPACT = DAYS_IN_WEEK.map((name) => name.slice(0, 3))

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
export const MONTHS_COMPACT = MONTHS.map((name) => name.slice(0, 3))

export const CALENDAR_GRID = 42

export const FORECAST_QUERY_PARAMS = {
  latitude: 40.38,
  longitude: 49.89,
  daily: [
    'temperature_2m_max',
    'temperature_2m_min',
    'sunrise',
    'sunset',
    'windspeed_10m_max',
  ],
  timezone: 'auto',
  timeformat: 'unixtime',
}
