import React from 'react';
import { Link } from 'react-router-dom';
import styles from './landing.module.css';
import landingImg from '../../../assets/MainPicture.jpeg';
import { FormattedMessage } from 'react-intl';
import Slider from './slider/slider';

function Landing() {
    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.info_and_btn_container}>
                    <div className={styles.info_container}>
                        <FormattedMessage
                            id="slogan"
                            defaultMessage="Welcome to UmVet where pets meet compassionate care!"
                        />
                    </div>
                    <div className={styles.btn_container}>
                        <Link to="/appointments">
                            <button type="button" className={styles.btn}>
                                <FormattedMessage
                                    id="appointmentBtn"
                                    defaultMessage="Make an appointment"
                                />
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
        </>
    );
}

export default Landing;
