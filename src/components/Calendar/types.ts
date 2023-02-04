export interface BaseNode {
  /** day of week */
  day: number
  /** date of month */
  date: number
  /** native Date object */
  dateObject: Date
}

export interface GetForecastParams {
  start_date?: string
  end_date?: string
}

export interface GetForecastResponse {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  daily_units: DailyUnits
  daily: Daily
}

export interface DailyUnits {
  time: string
  temperature_2m_max: string
  temperature_2m_min: string
  sunrise: string
  sunset: string
  windspeed_10m_max: string
}

export type ForecastWithDate = Record<keyof DailyUnits, number>

export type BaseNodeWithForecast = BaseNode & Partial<ForecastWithDate>
export interface Daily {
  time: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  sunrise: number[]
  sunset: number[]
  windspeed_10m_max: number[]
}
