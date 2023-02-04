import React from 'react'

export const CalendarContext = React.createContext<{ compact: boolean }>({
  compact: false,
})
