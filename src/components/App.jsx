import { useEffect, useState } from 'react';
import Form from './Form/Form';
import ListContact from './ListContact/ListContact';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('product')) ?? []
  );
  const [filter, setFilter] = useState('');
  useEffect(() => {
    localStorage.setItem('product', JSON.stringify(contacts));
  }, [contacts]);

  const filterChange = evt => {
    setFilter(evt.target.value);
  };
  const onDelete = id => {
    setContacts(prev => prev.filter(user => user.id !== id));
  };
  const onFilter = evt => {
    return contacts.filter(
      user =>
        user.name.includes(filter) || user.name.toLowerCase().includes(filter)
    );
  };
  const addContact = info => {
    const result = contacts.find(
      ({ name }) => name.toLowerCase() === info.name.toLowerCase()
    );
    if (!result) {
      const contact = {
        id: nanoid(),
        name: info.name,
        number: info.number,
      };
      setContacts(prev => [...prev, contact]);
    } else {
      return alert(`${info.name} is already in contacts`);
    }
  };
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Form contacts={contacts} addContact={addContact}></Form>

      <Filter filterChange={filterChange} filter={filter}></Filter>
      <ListContact productFilter={onFilter()} onDelete={onDelete}></ListContact>
    </div>
  );
};
export default App;
