import React from "react";
import PropTypes from "prop-types";
import styles from "./Contacts.module.scss";

const Filter = ({ filter, onChange }) => (
  <div>
    <label>Find contacts</label>
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      className={styles["filter-input"]}
    />
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
