// import { useState, useEffect } from 'react';
// import Notiflix from 'notiflix';
import FormPhonebook from 'components/FormPhonebook';
import Contact from 'components/ContactCard/ContactCard';
import Filter from 'components/Filter';
import {
  Section,
  Container,
  Title,
  TitleContacts,
  DiPhonegapSvg,
} from './App.styled';
import { useSelector } from 'react-redux';
// import { addContact, deleteContact } from 'redux/contactsSlice';
// import { setFilter } from 'redux/filterSlice';

export function App() {
  const contacts = useSelector(state => state.contacts);
  console.log('contacts:', contacts);
  // const filterText = useSelector(state => state.filter);
  // const dispatch = useDispatch();

  // const [filterText, setFilter] = useState('');
  // let filteredContacts = contacts;

  // const deleteItem = contactId => {
  //   setContacts(prevState => {
  //     return prevState.filter(contact => contact.id !== contactId);
  //   });
  // };

  // const searchFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // if (filterText) {
  //   const normalizedFilter = filterText.toLowerCase();
  //   filteredContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // }

  return (
    <>
      <Section>
        <Container>
          <Title>
            <DiPhonegapSvg />
            Phonebook
          </Title>
          <FormPhonebook />
          {contacts.length === 0 ? null : (
            <>
              <TitleContacts>Contacts</TitleContacts>
              <Filter />
              <Contact />
            </>
          )}
        </Container>
      </Section>
    </>
  );
}
