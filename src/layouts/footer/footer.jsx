import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import footerLogo from '../../assets/footerLogo.png';
import styles from './footer.module.css';

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
                    <Link to="/appointments">
                        <li className={styles.li}>
                            <FormattedMessage
                                id="book"
                                defaultMessage="Make an appointment"
                            />
                        </li>
                    </Link>
                    <Link to="/service-and-price">
                        <li className={styles.li}>
                            <FormattedMessage
                                id="service"
                                defaultMessage="Services and prices"
                            />
                        </li>
                    </Link>

                    <Link to="/blog">
                        <li className={styles.li}>
                            <FormattedMessage
                                id="blog"
                                defaultMessage="For patients"
                            />
                        </li>
                    </Link>

                    <Link to="/our-team">
                        <li className={styles.li}>
                            <FormattedMessage
                                id="team"
                                defaultMessage="Our team"
                            />
                        </li>
                    </Link>

                    <Link to="/contacts">
                        <li className={styles.li}>
                            <FormattedMessage
                                id="contact"
                                defaultMessage="Contact us"
                            />
                        </li>
                    </Link>
                </ul>
            </div>
            <div className={styles.externalLinksContainer}>
                <div className={styles.nameContainer}>
                    <div>
                        <FormattedMessage
                            id="footerMsg1"
                            defaultMessage="Made with &nbsp;"
                        />
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{ color: '#f5f5f5' }}
                        />
                        <FormattedMessage
                            id="footerMsg2"
                            defaultMessage=" &nbsp; by Elena Khlebnikova"
                        />
                    </div>
                </div>
                <div className={styles.iconLinksContainer}>
                    <a
                        href=" https://github.com/ElenaKhlebnikova"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faGithub}
                            style={{ color: '#f5f5f5' }}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/elena-khlebnikova-197686278"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faLinkedin}
                            style={{ color: '#f5f5f5' }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
