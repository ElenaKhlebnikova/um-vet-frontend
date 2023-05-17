/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Dropdown from "../../components/reusable_components/dropdown/dropdown";
import Logo from "../../assets/pictures/logo.png";

function Header() {
  const languages = [
    { name: "EN", value: "English" },
    { name: "DE", value: "German" },
  ];

  return (
    <div className={styles.header_container}>
      <Link to="/">
        <div className={styles.logo_container}>
          <img className={styles.logo} src={Logo} alt="UmVet logo" />
        </div>
      </Link>
      <Link to="/appointments">
        <div className={styles.menu_item_container}>Make an appointment</div>
      </Link>
      <Link to="/service-and-price">
        <div className={styles.menu_item_container}>Service and price</div>
      </Link>
      <Link to="/blog">
        <div className={styles.menu_item_container}>For patients</div>
      </Link>
      <Link to="/our-team">
        <div className={styles.menu_item_container}>Our team</div>
      </Link>
      <Link to="/contacts">
        <div className={styles.menu_item_container}>Contacts</div>
      </Link>
      <div className={styles.btn_and_user_container}>
        <Dropdown options={languages} />
      </div>
    </div>
  );
}

export default Header;
