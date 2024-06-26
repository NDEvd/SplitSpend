import { TEvent, TFriend, TExpense } from "./types";


export const mockEventOnly: TEvent[] = [
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

export const mockFriendsOnly: TFriend[] = [
  {
    id: '11',
    name: 'Оля',
    idEvent: '1',
  },
  {
    id: '12',
    name: 'Маша',
    idEvent: '1',
  },
  {
    id: '21',
    name: 'Оля',
    idEvent: '2',
  },
  {
    id: '22',
    name: 'Петя',
    idEvent: '2',
  },
  {
    id: '23',
    name: 'Саша',
    idEvent: '2',
  },
  {
    id: '24',
    name: 'Ира',
    idEvent: '2',
  },
]

export const mockExpensesOnly: TExpense[] = [
  {
    id: '111',
    idEvent: '1',
    title: 'Авиабилеты',
    sum: 20000,
    date: '20.05.24',
    idWhoPaid: '12',
    equally: true,
    datails: [
      {
        idFriend: '11',
        participated: true,
        sum: 10000,
      },
      {
        idFriend: '12',
        participated: true,
        sum: 10000,
      },
    ]
  },
  {
    id: '112',
    idEvent: '1',
    title: 'Апартаменты',
    sum: 30000,
    date: '20.05.24',
    idWhoPaid: '11',
    equally: true,
    datails: [
      {
        idFriend: '11',
        participated: true,
        sum: 15000,
      },
      {
        idFriend: '12',
        participated: true,
        sum: 15000,
      },
    ],
  },
  {
    id: '211',
    idEvent: '1',
    title: 'Ужин',
    sum: 4000,
    date: '06.07.24',
    idWhoPaid: '21',
    equally: false,
    datails: [
      {
        idFriend: '11',
        participated: true,
        sum: 4000,
      },
      {
        idFriend: '12',
        participated: false,
        sum: 0,
      },
    ],
  },
  {
    id: '211',
    idEvent: '2',
    title: 'Рест',
    sum: 10000,
    date: '06.07.24',
    idWhoPaid: '21',
    equally: false,
    datails: [
      {
        idFriend: '21',
        participated: true,
        sum: 5000,
      },
      {
        idFriend: '22',
        participated: true,
        sum: 3000,
      },
      {
        idFriend: '23',
        participated: true,
        sum: 2000,
      },
      {
        idFriend: '24',
        participated: false,
        sum: 0,
      },
    ],
  }
]