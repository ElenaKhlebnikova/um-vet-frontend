/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable comma-dangle */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faGlasses,
  faEnvelope,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "../../../header/header";
import Footer from "../../../footer/footer";
import styles from "./comments-page.module.css";
import CommentForm from "./comment-form.jsx/comment-form";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const doctorId = useParams();

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
          setDoctor(data.data.doctors[0]);
        });
    };
    fetchDoctor();
  }, []);

  // eslint-disable-next-line func-names

  // eslint-disable-next-line no-return-assign
  return (
    <>
      <Header />
      <Link to="/our-team">
        <button className={styles.backBtn} type="button">
          &larr; Go back{" "}
        </button>
      </Link>

      <div className={styles.mainContainer}>
        <div>
          <img className={styles.img} src={doctor.img} alt={doctor.name} />
        </div>
        <div className={styles.doctorsInfo}>
          <ul className={styles.generalInfo}>
            <li style={{ fontWeight: 700, fontSize: "5rem" }}>{doctor.name}</li>
            <li>
              <span className={styles.span}>
                <FontAwesomeIcon icon={faGraduationCap} />
              </span>
              {doctor.education}
            </li>
            <li>
              <span className={styles.span}>
                <FontAwesomeIcon icon={faGlasses} />
              </span>
              {doctor.specialization}
            </li>
            <li>
              <span className={styles.span}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              {doctor.email}
            </li>
          </ul>
        </div>
        <div className={styles.about}>
          <div>{doctor.about}</div>
          <button type="button" className={styles.btn}>
            <Link to={`/${doctor.id}/appointments`}>Book an appointment</Link>
          </button>
        </div>
      </div>

      <div>
        <CommentForm />
        {comments.map((com) => (
          <div className={styles.commentContainer}>
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

      <Footer />
    </>
  );
}

export default CommentsPage;
