import { createSlice, nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { contactsInitialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const normalizedNameFilter = action.payload.name.toLowerCase();
        const isFoundName = !state.find(contact =>
          contact.name.toLowerCase().includes(normalizedNameFilter)
        );
        const isFoundNumber = !state.find(contact =>
          contact.number.includes(action.payload.number)
        );
        const isFound = isFoundName && isFoundNumber;

        if (isFound) {
          state.push(action.payload);
        } else {
          Notiflix.Notify.failure(
            `This contact is already in your contact list.`
          );
        }
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
