import React from "react";
import { Link } from "react-router-dom";
import styles from "./landing.module.css";
import landingImg from "../../../assets/pictures/MainPicture.jpeg";
import Slider from "../../../components/slider/slider";
import Header from "../../header/header";
import Footer from "../../footer/footer";

function Landing() {
  return (
    <>
      <Header />
      <div className={styles.main_container}>
        <div className={styles.info_and_btn_container}>
          <div className={styles.info_container}>
            Welcome to UmVet where pets meet compassionate care!
          </div>
          <div className={styles.btn_container}>
            <Link to="/appointments">
              <button type="button" className={styles.btn}>
                Make an appointment
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.pic_container}>
          <img
            className={styles.pic}
            src={landingImg}
            alt="A cat wearing a stethoscope on a landing page"
          />
        </div>
      </div>
      <Slider />
      <Footer />
    </>
  );
}

export default Landing;
