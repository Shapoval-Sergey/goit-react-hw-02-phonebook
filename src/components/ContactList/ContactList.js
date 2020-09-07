import React from "react";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts }) => (
  <ul className="TaskList">
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        // onRemove={() => onRemoveTask(id)}
        // onUpdate={() => onUpdateTask(id)}
      />
    ))}
  </ul>
);

export default ContactList;
