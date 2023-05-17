/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-one-expression-per-line */
// import useValidate from "../../../hooks/useValidate";

// eslint-disable-next-line object-curly-newline
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ErrorMesssage({ name, comment, phone, rating, field }) {
  const [messageName, setMessageName] = useState("");
  const [messageComment, setMessageComment] = useState("");
  const [messagePhone, setMessagePhone] = useState("");
  const [messageRating, setMessageRating] = useState("");

  const validate = function (nameValue, commentValue, phoneValue, ratingValue) {
    nameValue !== undefined &&
      nameValue.length < 3 &&
      setMessageName("Name should be at least 3 characters long");

    nameValue !== undefined &&
      nameValue.length < 100 &&
      nameValue.length >= 3 &&
      setMessageName("");

    nameValue !== undefined &&
      nameValue.length > 100 &&
      setMessageName("Name should be less than 100 characters long");

    commentValue !== undefined &&
      commentValue.length < 10 &&
      setMessageComment("Comment should be at least 10 characters long");

    commentValue !== undefined &&
      commentValue.length >= 10 &&
      commentValue.length < 1000 &&
      setMessageComment("");

    commentValue !== undefined &&
      commentValue.length > 1000 &&
      setMessageComment("Comment should be less than 1000 characters");

    ratingValue === 0
      ? setMessageRating("Please rate the doctor from 1 to 5")
      : setMessageRating("");

    phoneValue < 10000000000 || phoneValue > 99999999999
      ? setMessagePhone("Phone number should be 11 characters long")
      : setMessagePhone("");
  };

  useEffect(() => {
    validate(name, comment, phone, rating);
  }, [name, comment, phone, rating]);

  return (
    <>
      {field === "name" && (
        <span style={{ color: "#f57f95", fontSize: "1.5rem" }}>
          {messageName}
        </span>
      )}
      {field === "comment" && (
        <span style={{ color: "#f57f95", fontSize: "1.5rem" }}>
          {messageComment}
        </span>
      )}
      {field === "phone" && (
        <span style={{ color: "#f57f95", fontSize: "1.5rem" }}>
          {messagePhone}
        </span>
      )}
      {field === "rating" && (
        <span style={{ color: "#f57f95", fontSize: "1.5rem" }}>
          {messageRating}
        </span>
      )}
    </>
  );
}

ErrorMesssage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  field: PropTypes.string.isRequired,
};

export default ErrorMesssage;
