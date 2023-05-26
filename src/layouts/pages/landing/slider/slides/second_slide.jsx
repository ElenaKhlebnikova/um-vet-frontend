import React from 'react';
import { Link } from 'react-router-dom';
import styles from './slides.module.css';
import teamImg from '../../../../../assets/team.jpg';
import { FormattedMessage } from 'react-intl';
function SecondSlide() {
    return (
        <div
            className={[
                styles.container_slide,
                styles.container_slide_second,
            ].join(' ')}
        >
            <div className={styles.info_container}>
                <p className={styles.heading}>
                    <FormattedMessage
                        id="secondSliderHeading"
                        defaultMessage="Our team"
                    />
                </p>
                <p className={styles.text}>
                    <FormattedMessage
                        id="secondSliderInfo"
                        defaultMessage="    With a focus on building lasting relationships with both
                    pets and their owners, we strive to create a welcoming and
                    comforting environment, where your pets feel safe and loved.
                    Trust our knowledgeable team to provide exceptional
                    veterinary care and support for the health and happiness of
                    your cherished companions."
                    />
                </p>
                <div className={styles.btn}>
                    <Link to="/our-team">
                        <button type="button" className={styles.btn}>
                            <FormattedMessage
                                id="secondSliderBtn"
                                defaultMessage="Meet the team!"
                            />
                        </button>
                    </Link>
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
