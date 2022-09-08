import * as api from 'helpers/api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  const response = await api.getContacts();
  return response;
});

export const addContact = createAsyncThunk('contacts/add', async contact => {
  const result = await api.postContact(contact);
  return result;
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  await api.deleteContact(id);
  return id;
});

// export const fetchContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.fetchContactsLoading());
//       const contacts = await api.getContacts();
//       dispatch(actions.fetchContactsSuccess(contacts));
//     } catch (error) {
//       dispatch(actions.fetchContactsError(error.message));
//     }
//   };
//   return func;
// };

// export const addContact = contact => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.addContactLoading());
//       const result = await api.postContact(contact);
//       dispatch(actions.addContactSuccess(result));
//       toast.success('Contact is added');
//     } catch (error) {
//       dispatch(actions.addContactError(error.message));
//     }
//   };
//   return func;
// };

// export const deleteContact = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.deleteContactLoading());
//       await api.deleteContact(id);
//       dispatch(actions.deleteContactSuccess(id));
//       toast.success('Contact was deleted');
//     } catch (error) {
//       dispatch(actions.deleteContactError(error.message));
//     }
//   };
//   return func;
// };
