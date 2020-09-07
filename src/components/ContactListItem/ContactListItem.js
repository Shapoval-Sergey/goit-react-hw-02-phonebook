import React from "react";

const ContactListItem = ({ name, id, number }) => {
  return (
    <li key={id}>
      <span>{name}</span>
      <span>{number}</span>
    </li>
  );
};

export default ContactListItem;
