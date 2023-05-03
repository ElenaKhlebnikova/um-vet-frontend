import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import styles from "./dropdown.module.css";

function Dropdown({ options }) {
  return (
    <div className={styles.dropdown_container}>
      <select className={styles.select}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array.isRequired,
};
export default Dropdown;
