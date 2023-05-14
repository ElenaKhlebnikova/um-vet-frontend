/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable comma-dangle */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Header from "../../../header/header";
import Footer from "../../../footer/footer";
import styles from "./comments-page.module.css";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const doctorId = useParams();
  const date = new Date(Date.now()).toDateString();
  console.log(comment);
  useEffect(() => {
    // eslint-disable-next-line func-names
    const fetchFunction = async function () {
      await fetch(
        `http://localhost:5000/comments?doctorId=${doctorId.doctorId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setComments(data.data.comments);
        });
    };
    fetchFunction();

    const fetchDoctor = async function () {
      await fetch(
        `http://localhost:5000/doctors?doctorId=${doctorId.doctorId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setDoctor(data.data.doctor[0]);
        });
    };
    fetchDoctor();
  }, []);

  // eslint-disable-next-line func-names
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
    }).then((res) => {
      console.log(res.status, res.data);
    });
  };

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div>
          <img
            className={styles.img}
            src={`data:image/jpeg;base64,${doctor.img}`}
            alt={doctor.name}
          />
        </div>
        <div className={styles.doctorsInfo}>
          <ul>
            <li style={{ fontWeight: 700, fontSize: "5rem" }}>{doctor.name}</li>
            <li>
              <span className={styles.span}>Education:</span>
              {doctor.education}
            </li>
            <li>
              <span className={styles.span}>Specialization:</span>
              {doctor.specialization}
            </li>
            <li>
              <span className={styles.span}>E-mail:</span>
              {doctor.email}
            </li>
          </ul>
        </div>
        <div className={styles.about}>{doctor.about}</div>
      </div>

      <div className={styles.commentContainer}>
        <form className={styles.form}>
          <h3>Comments</h3>
          <div className={styles.formItem}>
            <label>
              Name:
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Please enter your name"
              />
            </label>
          </div>
          <div className={styles.formItem}>
            <label>
              Your comment:
              <input
                style={{ height: "10rem" }}
                type="text"
                placeholder="Please enter your comment"
                onChange={(e) => setComment(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.rating}>
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
          <button
            className={styles.btn}
            type="submit"
            value="submit"
            onClick={(e) => submitAComment(e)}
          >
            Confirm
          </button>
        </form>

        <div>
          {comments.map((com) => (
            <div>
              <div className={styles.comment}>
                <p style={{ fontWeight: 700 }}>{com.name}</p>

                <p>{com.comment}</p>
                <div className={styles.ratingOnComment}>
                  <FontAwesomeIcon
                    className={
                      com.rating >= 1
                        ? styles.starIconActive
                        : styles.starIconInactive
                    }
                    style={{ fontSize: "2.5rem" }}
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className={
                      com.rating >= 2
                        ? styles.starIconActive
                        : styles.starIconInactive
                    }
                    style={{ fontSize: "2.5rem" }}
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className={
                      com.rating >= 3
                        ? styles.starIconActive
                        : styles.starIconInactive
                    }
                    style={{ fontSize: "2.5rem" }}
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className={
                      com.rating >= 4
                        ? styles.starIconActive
                        : styles.starIconInactive
                    }
                    style={{ fontSize: "2.5rem" }}
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className={
                      com.rating >= 5
                        ? styles.starIconActive
                        : styles.starIconInactive
                    }
                    style={{ fontSize: "2.5rem" }}
                    icon={faStar}
                  />
                </div>
                <p style={{ fontSize: "1.5rem" }}>Published on: {com.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CommentsPage;
