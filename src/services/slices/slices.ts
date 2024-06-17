import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";
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
    addFriend: {
      reducer: (state, action: PayloadAction<TFriend>) => {
        state.friends.push(action.payload);

      },
      prepare: (friendUnic) => ({
        payload: { ...friendUnic, id: uuidv4() }
      })
    },
    deleteFriend: (state, action: PayloadAction<string>) => {
      state.friends = state.friends.filter((item) => item.id !== action.payload);
    },
    updateFriendName: (state, action: PayloadAction<TFriend>) => {
      const { id, name } = action.payload;
      const item = state.friends.find(item => item.id === id);
      if (item) {
        item.name = name;
      }
    },
    changeSelectedEvent: (state, action: PayloadAction<string>) => {
      state.selectedEvent = state.events.filter(item => item.id === action.payload)[0];
    },
  },
  selectors: {},
  // extraReducers: (builder) => {
    
  // },
});

export default eventsSlice.reducer;
export const { addEvent, addFriend, deleteFriend, changeSelectedEvent } = eventsSlice.actions;