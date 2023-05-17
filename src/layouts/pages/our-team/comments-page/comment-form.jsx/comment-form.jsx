/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import styles from "./comment-form.module.css";
import ErrorMesssage from "../../../../../components/reusable_components/error-message/error-message";

function CommentForm() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const doctorId = useParams();
  const date = new Date(Date.now()).toDateString();

  const submitAComment = async function (e) {
    e.preventDefault();

    await fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        doctorId: doctorId.doctorId,
        name,
        date,
        comment,
        rating,
      }),
    });
  };
  return (
    <div className={styles.commentContainer}>
      <form className={styles.form}>
        <h3 style={{ marginBottom: "0rem" }}>Comments</h3>
        <div className={styles.formItem}>
          <label>
            Name:
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Please enter your name"
            />
          </label>
          <ErrorMesssage
            name={name}
            comment={comment}
            rating={rating}
            field="name"
          />
        </div>
        <div className={styles.formItem}>
          <label>
            Your comment:
            <textarea
              type="text"
              placeholder="Please enter your comment"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </label>
          <ErrorMesssage
            name={name}
            comment={comment}
            rating={rating}
            field="comment"
          />
        </div>
        <div className={styles.rating}>
          <div>
            <button type="button" onClick={() => setRating(1)}>
              <FontAwesomeIcon
                className={
                  rating >= 1 ? styles.starIconActive : styles.starIconInactive
                }
                icon={faStar}
              />
            </button>
            <button type="button" onClick={() => setRating(2)}>
              <FontAwesomeIcon
                className={
                  rating >= 2 ? styles.starIconActive : styles.starIconInactive
                }
                icon={faStar}
              />
            </button>
            <button type="button" onClick={() => setRating(3)}>
              <FontAwesomeIcon
                className={
                  rating >= 3 ? styles.starIconActive : styles.starIconInactive
                }
                icon={faStar}
              />
            </button>
            <button type="button" onClick={() => setRating(4)}>
              <FontAwesomeIcon
                className={
                  rating >= 4 ? styles.starIconActive : styles.starIconInactive
                }
                icon={faStar}
              />
            </button>
            <button type="button" onClick={() => setRating(5)}>
              <FontAwesomeIcon
                className={
                  rating >= 5 ? styles.starIconActive : styles.starIconInactive
                }
                icon={faStar}
              />
            </button>
          </div>
          <div style={{ margin: "2rem 2rem" }}>
            <ErrorMesssage
              name={name}
              comment={comment}
              rating={rating}
              field="rating"
            />
          </div>
        </div>

        <button
          className={styles.btnSend}
          // disabled={}
          type="submit"
          value="submit"
          onClick={(e) => submitAComment(e)}
        >
          Confirm
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
