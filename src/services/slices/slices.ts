import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit";
import { TEvent, TFriend, TExpense } from '../../utils/types';
import { mockEventOnly, mockFriendsOnly, mockExpensesOnly } from '../../utils/const';
import { v4 as uuidv4 } from 'uuid';

interface EventState {
  events: TEvent[];
  friends: TFriend[];
  expenses: TExpense[];
  selectedEvent: TEvent;
}

const initialState: EventState = {
  events: mockEventOnly,
  friends: mockFriendsOnly,
  expenses: mockExpensesOnly,
  selectedEvent: {
    id: '',
    title: '',
    dateFrom: '',
    dateTo: '',
  },
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {

    addEvent: {
      reducer: (state, action: PayloadAction<TEvent>) => {
        state.events.push(action.payload);
        state.selectedEvent = action.payload;
      },
      prepare: (eventUnic) => ({
        payload: { ...eventUnic, id: uuidv4() }
      })
    },
  },
  selectors: {},
  // extraReducers: (builder) => {
    
  // },
});

export default eventsSlice.reducer;
export const { addEvent } = eventsSlice.actions;