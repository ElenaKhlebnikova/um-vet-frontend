/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
import { useState, useEffect } from "react";

const useValidate = function (name, comment, phone, rating) {
  const [messageName, setMessageName] = useState("");
  const [messageComment, setMessageComment] = useState("");
  const [messagePhone, setMessagePhone] = useState("");
  const [messageRating, setMessageRating] = useState("");
  const [invalid, setInvalid] = useState(true);

  const validate = function (nameValue, commentValue, phoneValue, ratingValue) {
    // validating fields

    nameValue.length < 3 &&
      setMessageName("Name should be at least 3 characters long");

    nameValue.length < 100 && nameValue.length >= 3 && setMessageName("");

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

    // validating the comment form
    if (phoneValue === 0) {
      nameValue !== undefined &&
      nameValue.length < 100 &&
      nameValue.length >= 3 &&
      commentValue !== undefined &&
      commentValue.length >= 10 &&
      commentValue.length < 1000 &&
      ratingValue > 0
        ? setInvalid(false)
        : setInvalid(true);
    } else {
      // validating the appointment form
      nameValue !== undefined &&
      nameValue.length < 100 &&
      nameValue.length >= 3 &&
      phoneValue > 10000000000 &&
      phoneValue < 99999999999
        ? setInvalid(false)
        : setInvalid(true);
    }

    return [messageName, messageComment, messagePhone, messageRating, invalid];
  };

  useEffect(() => {
    validate(name, comment, phone, rating);
  }, [name, comment, phone, rating]);

  return { messageName, messageComment, messagePhone, messageRating, invalid };
};
export default useValidate;
