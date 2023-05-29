import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo.png';

// eslint-disable-next-line react/prop-types
function Header({ setLocale }) {
    const [menuSmallHidden, setMenuSmallHidden] = useState(true);
    const screenWidth = window.screen.width;

    const handleNav = () => {
        if (screenWidth < 700) {
            setMenuSmallHidden(true);
        }
    };

    return (
        <>
            {' '}
            {(screenWidth <= 700) & menuSmallHidden && (
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
                    screenWidth <= 700 && menuSmallHidden
                        ? styles.hidden
                        : styles.header_container
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
                        <FormattedMessage
                            id="book"
                            defaultMessage="Make an appointment"
                        />
                    </div>
                </Link>
                <Link to="/service-and-price" onClick={handleNav}>
                    <div className={styles.menu_item_container}>
                        <FormattedMessage
                            id="service"
                            defaultMessage="Services and prices"
                        />
                    </div>
                </Link>
                <Link to="/blog" onClick={handleNav}>
                    <div className={styles.menu_item_container}>
                        <FormattedMessage
                            id="blog"
                            defaultMessage="For patients"
                        />
                    </div>
                </Link>
                <Link to="/our-team" onClick={handleNav}>
                    <div className={styles.menu_item_container}>
                        <FormattedMessage id="team" defaultMessage="Our team" />
                    </div>
                </Link>
                <Link to="/contacts" onClick={handleNav}>
                    <div className={styles.menu_item_container}>
                        <FormattedMessage
                            id="contact"
                            defaultMessage="Contact us"
                        />
                    </div>
                </Link>

                <button
                    value="en"
                    onClick={() => {
                        setLocale('en');
                    }}
                >
                    EN
                </button>
                <button
                    value="de"
                    onClick={() => {
                        setLocale('de');
                    }}
                >
                    DE
                </button>
            </div>
        </>
    );
}

export default Header;
