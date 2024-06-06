export type TFriend = {
  id: string;
  name: string;
  participated?: boolean;
  sum?: number;
}

// export type TFriends = {
//   friends: TFriend[];
// }

// export type TExpenseDatails = {
  
// }

export type TExpense = {
  id: string;
  title: string;
  sum: number;
  date: string;
  whoPaid: TFriend;
  equally: boolean;
  datails: TFriend[];
}

export type TEvent = {
  id: string;
  title: string;
  dateFrom: string;
  dateTo?: string;
  friends?: TFriend[];
  totalSum?: number;
  expenses?: TExpense[];
}

export type TEventNew = {
  id: string;
  title: string;
  dateFrom: string;
  dateTo?: string;
}

// export type TEvents = {
//   events: TEvent[];
// }

export type TEventOnly = {
  id: string;
  title: string;
  dateFrom: string;
  dateTo?: string;
}