import React from "react";

const ContactListItem = ({ name, id, number, onRemove }) => {
  return (
    <li key={id}>
      <span>{name}:</span>
      <span>{number}</span>

      <section className="TaskList-actions">
        <button type="button" className="TaskList-button" onClick={onRemove}>
          Удалить
        </button>
      </section>
    </li>
  );
};

export default ContactListItem;
