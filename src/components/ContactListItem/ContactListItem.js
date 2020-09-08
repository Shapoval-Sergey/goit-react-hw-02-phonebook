import React from "react";

import s from "./ContactListItem.module.css";

const ContactListItem = ({ name, id, number, onRemove }) => {
  return (
    <li key={id} className={s.item}>
      <span>{name}:</span>
      <span>{number}</span>

      <section className={s.btn}>
        <button type="button" className="TaskList-button" onClick={onRemove}>
          Delete
        </button>
      </section>
    </li>
  );
};

export default ContactListItem;
