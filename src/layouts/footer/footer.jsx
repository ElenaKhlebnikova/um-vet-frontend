import React from 'react';
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
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{ color: '#f5f5f5' }}
                        />
                        &nbsp; by Elena Khlebnikova
                    </div>
                </div>
                <div className={styles.iconLinksContainer}>
                    <FontAwesomeIcon
                        className={styles.icon}
                        icon={faGithub}
                        style={{ color: '#f5f5f5' }}
                    />
                    <FontAwesomeIcon
                        className={styles.icon}
                        icon={faLinkedin}
                        style={{ color: '#f5f5f5' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;
