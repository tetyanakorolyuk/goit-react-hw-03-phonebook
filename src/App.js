import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { nanoid } from 'nanoid';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  componentDidCount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

getVisibleContacts = () => {
  const { filter, contacts} = this.state;
  const normalizeFilter = filter.toLowerCase();

return contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(normalizeFilter));
};

addContact = data => {
const contact = {
  id: nanoid(),
  name: data.name,
  number: data.number,
}
if (this.state.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
  alert(`${data.name} already in contacts.`);
  return;
}
  this.setState(({ contacts }) => ({
    contacts: [contact, ...contacts],
  }));
};

changeFilter = e => {
  this.setState({ filter: e.currentTarget.value });
};

deleteContact = (contactId) => {
this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== contactId),
}));
};

render() {
  const { filter } = this.state;
  const filterContacts = this.getVisibleContacts();

return (
  <div className={s.section}>
    <h1>Phonebook</h1>
    <ContactForm onSubmit={this.addContact} />
    <h2>Contacts</h2>
    <Filter value={filter} onChange={this.changeFilter} />
    <ContactList
      contacts={filterContacts}
      onDelete={this.deleteContact} />
  </div>
);
}
}

export default App;
