'use client';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { useMemo } from 'react';

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const now = new Date()

export default function DayCalendar ({ events }) {
  const { defaultDate } = useMemo(() => ({
    defaultDate: new Date()
  }), [])

  const scrollToTime = defaultDate.setHours(defaultDate.getHours(), 0, 0);
  return (
    <Calendar
      localizer={ localizer }
      defaultDate={ defaultDate }
      defaultView='day'
      views={ ['day'] }
      events={ events }
      startAccessor="start"
      endAccessor="end"
      scrollToTime={ scrollToTime }
      style={ { height: 500 } }
    />
  )
}

