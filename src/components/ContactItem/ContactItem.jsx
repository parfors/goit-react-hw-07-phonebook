import {
  ParagraphStyled,
  ButtonDeleteStyled,
  ListItem,
  CheckBoxInput,
} from 'components';
import PropTypes from 'prop-types';
import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contact-operations';

const ContactItemTest = ({ name, number, id }) => {
  const [agreement, setAgreement] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <ListItem>
        <ParagraphStyled>Name: {name}</ParagraphStyled>
        <ParagraphStyled>Number: {number}</ParagraphStyled>
        <CheckBoxInput onChange={() => setAgreement(!agreement)} />
        <ButtonDeleteStyled
          disabled={!agreement}
          onClick={() => dispatch(deleteContact(id))}
          type="button"
        >
          Delete
        </ButtonDeleteStyled>
      </ListItem>
    </>
  );
};

export const ContactItem = memo(ContactItemTest);

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onBtnDelete: PropTypes.func,
};
