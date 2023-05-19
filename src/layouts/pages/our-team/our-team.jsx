/* eslint-disable prefer-destructuring */
/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/no-useless-path-segments */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import styles from "./our-team.module.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import useFetch from "../../../hooks/useFetch";

function OurTeam() {
  const fetchedDoctors = useFetch("doctors");
  const doctors = fetchedDoctors.doctors;

  return (
    <>
      <Header />
      {doctors !== [] && doctors !== undefined && (
        <div className={styles.mainContainer}>
          {doctors.map((doctor) => (
            <div className={styles.doctorsContainer}>
              <img src={doctor.img} alt={doctor.name} />
              <div className={styles.doctorsInfo}>
                <div className={styles.doctorName}>{doctor.name}</div>
                <div>{doctor.specialization}</div>
                <div>
                  <button type="button" className={styles.btn}>
                    <Link to={`/${doctor._id}/appointments`}>
                      Book an appointment
                    </Link>
                  </button>
                </div>
                <div className={styles.btnLearnMore}>
                  <button type="button">
                    <Link to={`/${doctor._id}/comments`}>
                      Learn More &rarr;
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}

export default OurTeam;
