const { createAction } = require('@reduxjs/toolkit');

export const fetchContactsLoading = createAction('contact/fetch/loading');
export const fetchContactsSuccess = createAction('contact/fetch/success');
export const fetchContactsError = createAction('contact/fetch/error');

export const addContactLoading = createAction('contact/add/loading');
export const addContactSuccess = createAction('contact/add/success');
export const addContactError = createAction('contact/add/error');

export const deleteContactLoading = createAction('contact/delete/loading');
export const deleteContactSuccess = createAction('contact/delete/success');
export const deleteContactError = createAction('contact/delete/error');
