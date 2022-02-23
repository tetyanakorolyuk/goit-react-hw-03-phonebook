import React from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, onDelete }) {
return (
  <ul className={s.list}>
    {contacts.map( contact => (
      <ContactListItem
        key={contact.id}
        id={contact.id}
        name={contact.name}
        number={contact.number}
        onDelete={onDelete}
      />
    ))}
  </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
  }),
  ),
}

export default ContactList;
