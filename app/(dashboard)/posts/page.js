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

const events = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2023, 3, 0),
    end: new Date(2023, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2023, 3, 7),
    end: new Date(2023, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2023, 2, 13, 0, 0, 0),
    end: new Date(2023, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2023, 10, 6, 0, 0, 0),
    end: new Date(2023, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2023, 3, 9, 0, 0, 0),
    end: new Date(2023, 3, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2023, 3, 11),
    end: new Date(2023, 3, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2023, 3, 12, 10, 30, 0, 0),
    end: new Date(2023, 3, 112, 2, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2023, 3, 112, 2, 0, 0, 0),
    end: new Date(2023, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2023, 3, 12, 14, 0, 0, 0),
    end: new Date(2023, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2023, 3, 12, 17, 0, 0, 0),
    end: new Date(2023, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2023, 3, 12, 20, 0, 0, 0),
    end: new Date(2023, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Planning Meeting with Paige',
    start: new Date(2023, 3, 13, 8, 0, 0),
    end: new Date(2023, 3, 13, 10, 30, 0),
  },
  {
    id: 11.1,
    title: 'Inconvenient Conference Call',
    start: new Date(2023, 3, 13, 9, 30, 0),
    end: new Date(2023, 3, 13, 12, 0, 0),
  },
  {
    id: 11.2,
    title: "Project Kickoff - Lou's Shoes",
    start: new Date(2023, 3, 13, 11, 30, 0),
    end: new Date(2023, 3, 112, 10, 0, 0),
  },
  {
    id: 11.3,
    title: 'Quote Follow-up - Tea by Tina',
    start: new Date(2023, 3, 13, 15, 30, 0),
    end: new Date(2023, 3, 13, 16, 0, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2023, 3, 17, 19, 30, 0),
    end: new Date(2023, 3, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2023, 3, 17, 19, 30, 0),
    end: new Date(2023, 3, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2023, 3, 20, 19, 30, 0),
    end: new Date(2023, 3, 22, 2, 0, 0),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: now,
    end: now,
  },
  {
    id: 16,
    title: 'Video Record',
    start: new Date(2023, 12, 10, 15, 30, 0),
    end: new Date(2023, 12, 10, 19, 0, 0),
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    start: new Date(2023, 12, 10, 16, 30, 0),
    end: new Date(2023, 12, 10, 20, 0, 0),
  },
  {
    id: 18,
    title: 'Itaewon Meeting',
    start: new Date(2023, 12, 10, 16, 30, 0),
    end: new Date(2023, 12, 10, 17, 30, 0),
  },
  {
    id: 19,
    title: 'Online Coding Test',
    start: new Date(2023, 12, 10, 17, 30, 0),
    end: new Date(2023, 12, 10, 20, 30, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2023, 12, 10, 17, 0, 0),
    end: new Date(2023, 12, 10, 18, 30, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2023, 12, 10, 17, 0, 0),
    end: new Date(2023, 12, 10, 18, 30, 0),
  },
  {
    id: 22,
    title: 'Cooking Class',
    start: new Date(2023, 12, 10, 17, 30, 0),
    end: new Date(2023, 12, 10, 19, 0, 0),
  },
  {
    id: 23,
    title: 'Go to the gym',
    start: new Date(2023, 12, 10, 18, 30, 0),
    end: new Date(2023, 12, 10, 20, 0, 0),
  },
  {
    id: 24,
    title: 'DST ends on this day (Europe)',
    start: new Date(2022, 9, 30, 0, 0, 0),
    end: new Date(2022, 9, 30, 4, 30, 0),
  },
  {
    id: 25,
    title: 'DST ends on this day (America)',
    start: new Date(2022, 10, 6, 0, 0, 0),
    end: new Date(2022, 10, 6, 4, 30, 0),
  },
  {
    id: 26,
    title: 'DST starts on this day (America)',
    start: new Date(2023, 12, 2, 0, 0, 0),
    end: new Date(2023, 12, 2, 4, 30, 0),
  },
  {
    id: 27,
    title: 'DST starts on this day (Europe)',
    start: new Date(2023, 12, 25, 0, 0, 0),
    end: new Date(2023, 12, 25, 4, 30, 0),
  },
]

export default function Posts () {

  const { defaultDate } = useMemo(() => ({
    defaultDate: new Date()
  }), [])

  const scrollToTime = defaultDate.setHours(defaultDate.getHours(), 0, 0);

  return (
    <div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
      <div className="text-xl font-semibold inline-block">
        My Notes
      </div>
      <div className="divider mt-2">
      </div>
      <div className="h-full w-full flex justify-between pb-6 bg-base-100">
        <div>
          Posts
        </div>
        <div>
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
        </div>
      </div>
    </div>
  )
}