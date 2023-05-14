/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-useless-path-segments */
import React, { useEffect, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import styles from "./our-team.module.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";

function OurTeam() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line func-names
    const fetchFunction = async function () {
      await fetch("http://localhost:5000/doctors", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data !== undefined) {
            setDoctors(data.data.doctors);
          }
        });
    };

    fetchFunction();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        {doctors.map((doctor) => (
          <div className={styles.doctorsContainer}>
            <img
              src={`data:image/jpeg;base64,${doctor.img}`}
              alt={doctor.name}
            />
            <div className={styles.doctorsInfo}>
              <ul>
                <li style={{ fontWeight: 700 }}>{doctor.name}</li>
                <li>
                  <span style={{ fontWeight: 700 }}>Education:</span>
                  {doctor.education}
                </li>
                <li>
                  <span style={{ fontWeight: 700 }}>Specialization:</span>
                  {doctor.specialization}
                </li>
              </ul>
              <button type="button" className={styles.btn}>
                <Link to={`/${doctor._id}/appointments`}>
                  Book an appointment
                </Link>
              </button>
              <button type="button" className={styles.btnLearnMore}>
                <Link to={`/${doctor._id}/comments`}>Learn More &rarr;</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default OurTeam;
