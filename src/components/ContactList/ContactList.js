import React from "react";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        onRemove={() => onRemoveContact(id)}
        // onUpdate={() => onUpdateTask(id)}
      />
    ))}
  </ul>
);

export default ContactList;
