export type Event = []

export interface CalendarNode {
  day: number
  date: number
  nativeDate: Date
  events?: Event[]
}

export interface CalendarProps {
  selected: Date
  compact?: boolean
}
