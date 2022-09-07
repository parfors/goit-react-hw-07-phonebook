import * as actions from './actions';

const { createReducer } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
  loading: false,
  error: true,
};

const contactsReducer = createReducer(initialState, {
  [actions.fetchContactsLoading]: state => {
    state.loading = true;
    state.error = null;
  },
  [actions.fetchContactsSuccess]: (state, { payload }) => {
    state.contacts = payload;
    state.loading = false;
  },
  [actions.fetchContactsError]: (state, { payload }) => {
    state.error = payload;
  },
  [actions.addContactLoading]: state => {
    state.loading = true;
    state.error = false;
  },
  [actions.addContactSuccess]: (state, { payload }) => {
    state.contacts.push(payload);
  },
  [actions.addContactError]: (state, { payload }) => {
    state.error = payload;
    state.loading = false;
  },
});

export default contactsReducer;
