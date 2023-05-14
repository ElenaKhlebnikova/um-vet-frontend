/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-trailing-spaces */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line import/no-extraneous-dependencies
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import footerLogo from "../../assets/pictures/footerLogo.png";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footerMainContainer}>
      <div className={styles.internalLinks}>
        <img
          className={styles.footerLogo}
          src={footerLogo}
          alt="Footer UmVet logo"
        />
        <ul>
          <li className={styles.li}>Make an appointment</li>
          <li className={styles.li}>Service and price</li>
          <li className={styles.li}>For patients</li>
          <li className={styles.li}>Our team</li>
          <li className={styles.li}>Contacts</li>
        </ul>
      </div>
      <div className={styles.externalLinksContainer}>
        <div className={styles.nameContainer}>
          <div>
            Made with &nbsp;
            <FontAwesomeIcon icon={faHeart} style={{ color: "#f5f5f5" }} />{" "}
            &nbsp; by Elena Khlebnikova
          </div>
        </div>

        <div className={styles.iconLinksContainer}>
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#f5f5f5", height: "10rem" }}
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#f5f5f5", height: "10rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
