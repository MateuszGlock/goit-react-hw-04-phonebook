import React, { useState, useEffect } from "react";
import ContactForm from "./contacts/contactForm";
import ContactList from "./contacts/contactList";
import Filter from "./contacts/filter";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    if (storedContacts.length) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    const isDuplicate = contacts.some(
      (existingContact) =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase(),
    );

    if (isDuplicate) {
      alert(`${contact.name} is already in the contact list.`);
      return;
    }

    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId),
    );
  };

  const handleFilterChange = (ev) => {
    setFilter(ev.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
