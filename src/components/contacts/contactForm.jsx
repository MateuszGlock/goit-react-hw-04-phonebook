import React, { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import styles from "./Contacts.module.scss";

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    if (name === "name") setName(value);
    if (name === "number") setNumber(value);
  };

  const validateInput = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const numberRegex = /^\d+$/;

    if (!nameRegex.test(name)) {
      alert("Name must contain only letters and spaces.");
      return false;
    }

    if (!numberRegex.test(number)) {
      alert("Phone number must contain only digits.");
      return false;
    }

    return true;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validateInput()) return;

    onAddContact({ id: nanoid(), name, number });
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        required
        value={name}
        onChange={handleChange}
      />
      <label>Phone number</label>
      <input
        type="tel"
        name="number"
        required
        value={number}
        onChange={handleChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
