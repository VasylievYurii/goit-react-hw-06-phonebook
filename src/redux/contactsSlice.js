import { createSlice, nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

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
