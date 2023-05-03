import React from "react";
import styles from "./landing.module.css";
import landingImg from "../../assets/pictures/MainPicture.jpeg";
import Button from "../../components/reusable_components/button/button";
import Slider from "../../components/slider/slider";
import Header from "../header/header";

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
            <Button text="Book an appointment" />
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
    </>
  );
}

export default Landing;
