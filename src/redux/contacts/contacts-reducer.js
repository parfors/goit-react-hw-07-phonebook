import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addContact, deleteContact, fetchContacts } from './contact-operations';

const initialState = {
  contacts: [],
  loading: false,
  error: true,
};

const contactsReducer = createReducer(initialState, {
  [fetchContacts.pending]: state => {
    state.loading = true;
    state.error = null;
  },
  [fetchContacts.fulfilled]: (state, { payload }) => {
    state.contacts = payload;
    state.loading = false;
  },
  [fetchContacts.rejected]: (state, { payload }) => {
    state.error = payload;
    state.loading = false;
  },
  [addContact.pending]: state => {
    state.loading = true;
    state.error = false;
  },
  [addContact.fulfilled]: (state, { payload }) => {
    state.contacts.push(payload);
    state.loading = false;
    toast.success('Contact is added');
  },
  [addContact.rejected]: (state, { payload }) => {
    state.error = payload;
    state.loading = false;
  },
  [deleteContact.pending]: state => {
    state.loading = true;
    state.error = false;
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    state.loading = false;
    state.contacts = state.contacts.filter(el => el.id !== payload);
    toast.success('Contact was deleted');
  },
  [deleteContact.rejected]: (state, { payload }) => {
    state.error = payload;
    state.error = false;
  },
});

export default contactsReducer;
