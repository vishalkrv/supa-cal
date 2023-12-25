'use client';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';

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

const myEventsList = [
	{
		id: 0,
		title: 'All Day Event very long title',
		allDay: true,
		start: new Date(2023, 12, 0),
		end: new Date(2023, 12, 1),
	},
	{
		id: 1,
		title: 'Long Event',
		start: new Date(2023, 12, 7),
		end: new Date(2023, 12, 10),
	},

	{
		id: 2,
		title: 'DTS STARTS',
		start: new Date(2016, 2, 13, 0, 0, 0),
		end: new Date(2016, 2, 20, 0, 0, 0),
	},

	{
		id: 3,
		title: 'DTS ENDS',
		start: new Date(2016, 10, 6, 0, 0, 0),
		end: new Date(2016, 10, 13, 0, 0, 0),
	},

	{
		id: 4,
		title: 'Some Event',
		start: new Date(2023, 12, 9, 0, 0, 0),
		end: new Date(2023, 12, 10, 0, 0, 0),
	},
	{
		id: 5,
		title: 'Conference',
		start: new Date(2023, 12, 11),
		end: new Date(2023, 12, 13),
		desc: 'Big conference for important people',
	},
	{
		id: 6,
		title: 'Meeting',
		start: new Date(2023, 12, 12, 10, 30, 0, 0),
		end: new Date(2023, 12, 12, 12, 30, 0, 0),
		desc: 'Pre-meeting meeting, to prepare for the meeting',
	},
	{
		id: 7,
		title: 'Lunch',
		start: new Date(2023, 12, 12, 12, 0, 0, 0),
		end: new Date(2023, 12, 12, 13, 0, 0, 0),
		desc: 'Power lunch',
	},
	{
		id: 8,
		title: 'Meeting',
		start: new Date(2023, 12, 12, 14, 0, 0, 0),
		end: new Date(2023, 12, 12, 15, 0, 0, 0),
	},
	{
		id: 9,
		title: 'Happy Hour',
		start: new Date(2023, 12, 12, 17, 0, 0, 0),
		end: new Date(2023, 12, 12, 17, 30, 0, 0),
		desc: 'Most important meal of the day',
	},
	{
		id: 10,
		title: 'Dinner',
		start: new Date(2023, 12, 12, 20, 0, 0, 0),
		end: new Date(2023, 12, 12, 21, 0, 0, 0),
	},
	{
		id: 11,
		title: 'Birthday Party',
		start: new Date(2023, 12, 13, 7, 0, 0),
		end: new Date(2023, 12, 13, 10, 30, 0),
	},
	{
		id: 12,
		title: 'Late Night Event',
		start: new Date(2023, 12, 17, 19, 30, 0),
		end: new Date(2023, 12, 18, 2, 0, 0),
	},
	{
		id: 12.5,
		title: 'Late Same Night Event',
		start: new Date(2023, 12, 17, 19, 30, 0),
		end: new Date(2023, 12, 17, 23, 30, 0),
	},
	{
		id: 13,
		title: 'Multi-day Event',
		start: new Date(2023, 12, 20, 19, 30, 0),
		end: new Date(2023, 12, 22, 2, 0, 0),
	},
	{
		id: 14,
		title: 'Today',
		start: new Date(new Date().setHours(new Date().getHours() - 3)),
		end: new Date(new Date().setHours(new Date().getHours() + 3)),
	},
	{
		id: 16,
		title: 'Video Record',
		start: new Date(2023, 12, 14, 15, 30, 0),
		end: new Date(2023, 12, 14, 19, 0, 0),
	},
	{
		id: 17,
		title: 'Dutch Song Producing',
		start: new Date(2023, 12, 14, 16, 30, 0),
		end: new Date(2023, 12, 14, 20, 0, 0),
	},
	{
		id: 18,
		title: 'Itaewon Halloween Meeting',
		start: new Date(2023, 12, 14, 16, 30, 0),
		end: new Date(2023, 12, 14, 17, 30, 0),
	},
	{
		id: 19,
		title: 'Online Coding Test',
		start: new Date(2023, 12, 14, 17, 30, 0),
		end: new Date(2023, 12, 14, 20, 30, 0),
	},
	{
		id: 20,
		title: 'An overlapped Event',
		start: new Date(2023, 12, 14, 17, 0, 0),
		end: new Date(2023, 12, 14, 18, 30, 0),
	},
	{
		id: 21,
		title: 'Phone Interview',
		start: new Date(2023, 12, 14, 17, 0, 0),
		end: new Date(2023, 12, 14, 18, 30, 0),
	},
	{
		id: 22,
		title: 'Cooking Class',
		start: new Date(2023, 12, 24, 17, 30, 0),
		end: new Date(2023, 12, 24, 19, 0, 0),
	},
	{
		id: 23,
		title: 'Go to the gym',
		start: new Date(2023, 12, 25, 18, 30, 0),
		end: new Date(2023, 12, 25, 20, 0, 0),
	},
]

const RightSidebar = () => {
  return (
    <aside className="col-span-4 hidden bg-purple-300 md:block">
      <div className="sticky top-16">
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </aside>
  )
}

export default RightSidebar
