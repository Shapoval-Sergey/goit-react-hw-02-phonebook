import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        {/* <Filter /> */}

        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}
