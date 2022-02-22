import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contacts, onDelete}) {
return (
<ul className={s.list}>
  {contacts.map(({ name, number, id}) => (
    <li key={id} className={s.item}>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" className={s.buttonDelete} onClick={() => onDelete(id)}>
       Delete
      </button>
    </li>
  ))}
  </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
  }),
  ),
  onDelete: PropTypes.func.isRequired,
}

export default ContactList;
