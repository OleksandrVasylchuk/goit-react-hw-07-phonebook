import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import Section from "./Components/Section/Section";
import { fetchContacts } from './redux/operations';
import { getLoading } from './redux/selector';

export default function App() {
  const loadingContacts = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

   return (
      <>
       <Section>
        <h1>Phonebook</h1>
        <ContactForm/>

         {loadingContacts && <p>Loading...</p>}
        <h2>Contacts</h2>
         <Filter />
         
        <ContactList/>
      </Section>
      </>
    );
}


// function useLocalStorage(key, defaultValue) {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// }


// export default function App() {
 
 
//   const [contacts, setContacts] = useLocalStorage('contacts', [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);

//   const [filter, setFilter] = useState('');

//   const addContact = (name, number) => {
//     const item = {
//       id: uuid(),
//       name,
//       number,
//     };

//     const includeName = contacts.reduce(
//       (acc, contact) => [...acc, contact.name],
//       [],
//     );
//     const includeNumber = contacts.reduce(
//       (acc, contact) => [...acc, contact.number],
//       [],
//     );

//     if (name === '' || number === '') {
//       alert('Please enter all fields!');
//       return;
//     }

//     if (includeName.includes(name)) {
//       alert(`${name} is already in contacts`);
//       return;
//     } else if (includeNumber.includes(number)) {
//       alert(`${number} is already in contacts`);
//     } else {
//       setContacts(contacts => [item, ...contacts]);
//     }
//   };

//   const getVisibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   const deleteContact = contactId => {
//     setContacts(prevState =>
//       prevState.filter(contact => contact.id !== contactId),
//     );
//   };

//   const changeFilter = event => {
//     setFilter(event.currentTarget.value);
//   };  
  
// }


