import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit";
import { TEvent, TEventNew, TEventOnly } from '../../utils/types';
import { mockEvent, mockEventOnly } from '../../utils/const';
import { v4 as uuidv4 } from 'uuid';

interface EventState {
  events: TEvent[];
  eventsOnly: TEventOnly[];
}

const initialState: EventState = {
  events: [mockEvent],
  eventsOnly: mockEventOnly,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEventOnly: {
      reducer: (state, action: PayloadAction<TEventOnly>) => {
        state.eventsOnly.push(action.payload);
      },
      prepare: (eventUnic) => ({
        payload: { ...eventUnic, id: uuidv4() }
      })
    },
    addEvent: {
      reducer: (state, action: PayloadAction<TEventNew>) => {
        state.events.push(action.payload);
      },
      prepare: (eventUnic) => ({
        payload: { ...eventUnic, id: uuidv4() }
      })
    },
    // setServices: (state, action: PayloadAction<TServices[]>) => {
    //   state.services = action.payload;
    // },
    // setSubscriptions: (state, action: PayloadAction<TSubscriptions[]>) => {
    //   state.subscriptions = action.payload;
    // },
    // resetPromocode: (state) => {
    //   state.promocode = {
    //     code: '',
    //     date: '',
    //   };
    // },
  },
  selectors: {},
  // extraReducers: (builder) => {
    
  // },
});

export default eventsSlice.reducer;
export const { addEventOnly, addEvent } = eventsSlice.actions;