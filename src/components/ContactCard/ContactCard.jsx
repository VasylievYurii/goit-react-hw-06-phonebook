import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ContactList,
  ContactCard,
  ContactName,
  ContactNumber,
  RiDeleteBinLineSvg,
  ContactUl,
} from './ContactCard.styled';
import { getContacts, getStatusFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const getVisibleContacts = (contacts, statusFilter) => {
  if (statusFilter) {
    const normalizedFilter = statusFilter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  } else {
    return contacts;
  }
};

const Contact = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ContactUl>
      {visibleContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <ContactList key={id}>
            <ContactCard href="#" onClick={e => e.preventDefault()}>
              <ContactName>{name}</ContactName>
              <ContactNumber>{number}</ContactNumber>
              <RiDeleteBinLineSvg onClick={() => handleDelete(id)} />
            </ContactCard>
          </ContactList>
        );
      })}
    </ContactUl>
  );
};

export default Contact;
