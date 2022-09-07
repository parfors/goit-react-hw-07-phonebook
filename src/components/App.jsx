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
import { fetchContacts } from 'redux/contacts/contact-operations';
import { addContact } from 'redux/contacts/contact-operations';
import { setFilter } from 'redux/filter/filter-Slice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const color = useSelector(state => state.contacts.color);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formSubmitHandler = data => {
    const normalizedData = data.name.toLowerCase();
    if (contacts.some(el => el.name.toLowerCase() === normalizedData)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    dispatch(addContact(data));
  };

  const radioOptions = ['green', 'red', 'grey'];
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <SectionStyled style={{ backgroundColor: color }}>
        <TitleStyled>Phonebook</TitleStyled>
        <Form onSubmit={formSubmitHandler} />
        <TitleStyled>Contacts</TitleStyled>
        <Filter
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
        <ContactsList contacts={visibleContacts} />
        <RadioInput radioOptions={radioOptions} />
      </SectionStyled>
    </>
  );
};
