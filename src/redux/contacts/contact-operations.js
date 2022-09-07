import * as api from 'helpers/api';
import * as actions from './actions';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchContactsLoading());
      const contacts = await api.getContacts();
      dispatch(actions.fetchContactsSuccess(contacts));
    } catch (error) {
      dispatch(actions.fetchContactsError(error.message));
    }
  };
  return func;
};

export const addContact = contact => {
  const func = async dispatch => {
    try {
      dispatch(actions.addContactLoading());
      const result = await api.postContact(contact);
      dispatch(actions.addContactSuccess(result));
    } catch (error) {
      dispatch(actions.addContactError(error.message));
    }
  };
  return func;
};

export const deleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.deleteContactLoading());
      await api.deleteContact(id);
      dispatch(actions.deleteContactSuccess(id));
    } catch (error) {
      dispatch(actions.deleteContactError(error.message));
    }
  };
  return func;
};
