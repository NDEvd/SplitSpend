export type TEvent = {
  id?: string;
  title: string;
  dateFrom: string;
  dateTo?: string;
}

export type TFriend = {
  id: string;
  name: string;
  idEvent: string;
}

export type TExpenseDatails = {
  idFriend: string;
  participated: boolean;
  sum: number;
}

export type TExpense = {
  id: string;
  idEvent: string;
  title: string;
  sum: number;
  date: string;
  idWhoPaid: string;
  equally: boolean;
  datails: TExpenseDatails[];
}

