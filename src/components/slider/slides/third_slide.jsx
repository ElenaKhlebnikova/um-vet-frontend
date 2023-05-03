/* eslint-disable react/style-prop-object */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Button from "../../reusable_components/button/button";
import styles from "./slides.module.css";
import catImg from "../../../assets/pictures/cat_third_slide.jpg";

function ThirdSlide() {
  return (
    <div className={styles.container_slide}>
      <div className={styles.pic_container_third_slide}>
        <img
          className={styles.third_slide_pic}
          src={catImg}
          alt="VetPet building"
        />
      </div>
      <div className={styles.info_container_third}>
        <p className={styles.heading}>Our blog</p>
        <p className={styles.text}>
          Have any questions about taking care of your pet? Read out blog to
          find the answers!
        </p>
        <div className={styles.btn_third_slide}>
          <Button text="Visit our blog" style="blue" />
        </div>
      </div>
    </div>
  );
}

export default ThirdSlide;
