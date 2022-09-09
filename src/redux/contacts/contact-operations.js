import * as api from 'helpers/api';
import { toast } from 'react-toastify';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await api.getContacts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const result = await api.postContact(contact);
      toast.success('Contact is added');

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      await api.deleteContact(id);
      toast.success('Contact was deleted');
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

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
