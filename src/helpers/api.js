import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6318692af6b281877c6b73c0.mockapi.io/api/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/', {
    params: {},
  });
  return data;
};

export const postContact = async contact => {
  const response = await instance.post('/', contact);
  return response.data;
};

export const deleteContact = async id => {
  await instance.delete(`/${id}`);
};
