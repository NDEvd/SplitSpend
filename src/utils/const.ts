import { TEvent, TEventOnly } from "./types";


export const mockEventOnly: TEventOnly[] = [
  {
    id: '1',
    title: 'Поездка в Мадрид',
    dateFrom: '01.06.24',
    dateTo: '01.07.24',
  },
  {
    id: '2',
    title: 'Выходные',
    dateFrom: '06.07.24',
  },
  {
    id: '3',
    title: 'Армения',
    dateFrom: '01.08.24',
    dateTo: '07.08.24',
  },
]


export const mockEvent: TEvent = {
  id: '1',
  title: 'Поездка в Мадрид',
  dateFrom: '01.06.24',
  dateTo: '01.07.24',
  friends: [
    {
      id: '11',
      name: 'Оля',
    },
    {
      id: '12',
      name: 'Маша',
    },
    {
      id: '13',
      name: 'Петя',
    },
  ],
  totalSum: 50000,
  expenses: [
    {
      id: '111',
      title: 'Авиабилеты',
      sum: 30000,
      date: '20.05.24',
      whoPaid: {
        id: '13',
        name: 'Петя',
      },
      equally: true,
      datails: [
        {
          id: '11',
          name: 'Оля',
          participated: true,
          sum: 10000,
        },
        {
          id: '12',
          name: 'Маша',
          participated: true,
          sum: 10000,
        },
        {
          id: '13',
          name: 'Петя',
          participated: true,
          sum: 10000,
        },
      ],
    },
    {
      id: '112',
      title: 'Апартаменты',
      sum: 45000,
      date: '20.05.24',
      whoPaid: {
        id: '13',
        name: 'Петя',
      },
      equally: true,
      datails: [
        {
          id: '11',
          name: 'Оля',
          participated: true,
          sum: 15000,
        },
        {
          id: '12',
          name: 'Маша',
          participated: true,
          sum: 15000,
        },
        {
          id: '13',
          name: 'Петя',
          participated: true,
          sum: 15000,
        },
      ],
    }

  ],
}