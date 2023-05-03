import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

function Button({ text, style }) {
  return (
    <button
      type="button"
      className={
        style === "orange" || !style ? styles.btn_orange : styles.btn_blue
      }
    >
      {text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};
