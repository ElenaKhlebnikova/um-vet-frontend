import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo.png';
function Header() {
    const [menuSmallHidden, setMenuSmallHidden] = useState(false);
    const screenWidth = window.screen.width;

    const handleNav = () => {
        if (screenWidth < 700) {
            setMenuSmallHidden(true);
        } else return;
    };
    return (
        <>
            {menuSmallHidden && (
                <div className={styles.headerSmall}>
                    <button
                        className={styles.navBtn}
                        onClick={() => setMenuSmallHidden(false)}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            )}
            <div
                className={
                    menuSmallHidden ? styles.hidden : styles.header_container
                }
            >
                {screenWidth < 700 && (
                    <button className={styles.navBtn} onClick={handleNav}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}

                <Link to="/" onClick={handleNav}>
                    <div className={styles.logo_container}>
                        <img
                            className={styles.logo}
                            src={Logo}
                            alt="UmVet logo"
                        />
                    </div>
                </Link>
                <Link to="/appointments" onClick={handleNav}>
                    <div className={styles.menu_item_container}>
                        Make an appointment
                    </div>
                </Link>
                <Link to="/service-and-price" onClick={handleNav}>
                    <div className={styles.menu_item_container}>
                        Service and price
                    </div>
                </Link>
                <Link to="/blog" onClick={handleNav}>
                    <div className={styles.menu_item_container}>
                        For patients
                    </div>
                </Link>
                <Link to="/our-team" onClick={handleNav}>
                    <div className={styles.menu_item_container}>Our team</div>
                </Link>
                <Link to="/contacts" onClick={handleNav}>
                    <div className={styles.menu_item_container}>Contacts</div>
                </Link>
            </div>
        </>
    );
}

export default Header;
