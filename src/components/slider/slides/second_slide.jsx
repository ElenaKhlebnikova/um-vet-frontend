/* eslint-disable react/style-prop-object */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import styles from "./slides.module.css";
import teamImg from "../../../assets/pictures/team.jpg";
import Button from "../../reusable_components/button/button";

function SecondSlide() {
  return (
    <div className={styles.container_slide}>
      <div className={styles.info_container}>
        <p className={styles.heading}>Our team</p>
        <p className={styles.text}>
          Meet our well-trained pet-obsessed team and book an appointment now!
        </p>
        <div className={styles.btn}>
          <Button text="Meet the team" style="blue" />
        </div>
      </div>
      <div className={styles.pic_container_second_slide}>
        <img
          className={styles.second_slide_pic}
          src={teamImg}
          alt="VetPet team"
        />
      </div>
    </div>
  );
}

export default SecondSlide;
