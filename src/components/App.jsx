import {
  ContactsList,
  Filter,
  Form,
  RadioInput,
  SectionStyled,
  TitleStyled,
} from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contacts/contact-operations';
import { setFilter } from 'redux/filter/filter-Slice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const color = useSelector(state => state.contacts.color);
  const loading = useSelector(state => state.contacts.items.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formSubmitHandler = data => {
    // const normalizedData = data.name.toLowerCase();
    // if (contacts.some(el => el.name.toLowerCase() === normalizedData)) {
    //   alert(`${data.name} is already in contacts`);
    //   return;
    // }
    dispatch(addContact(data));
  };

  const radioOptions = ['green', 'red', 'grey'];
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <ToastContainer />

      <SectionStyled style={{ backgroundColor: color }}>
        <TitleStyled>Phonebook</TitleStyled>
        <Form onSubmit={formSubmitHandler} />
        <TitleStyled>Contacts</TitleStyled>
        <Filter
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
        {loading ? (
          <TitleStyled>Loading...</TitleStyled>
        ) : (
          <ContactsList contacts={visibleContacts} />
        )}
        <RadioInput radioOptions={radioOptions} />
      </SectionStyled>
    </>
  );
};
