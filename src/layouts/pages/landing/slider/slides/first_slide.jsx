import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStethoscope,
    faCookieBite,
    faHeart,
    faShieldCat,
} from '@fortawesome/free-solid-svg-icons';

import styles from './slides.module.css';
import buildingImg from '../../../../../assets/building.png';

function FirstSlide() {
    return (
        <div
            className={[
                styles.container_slide,
                styles.container_slide_first,
            ].join(' ')}
        >
            <div className={styles.pic_container_first_slide}>
                <img
                    className={styles.first_slide_pic}
                    src={buildingImg}
                    alt="VetPet building"
                />
            </div>
            <div className={styles.info_container}>
                <p className={styles.heading}>
                    <FormattedMessage
                        id="firstSliderHeading"
                        defaultMessage="About us"
                    />
                </p>
                <div className={styles.text}>
                    <FormattedMessage
                        id="firstSliderInfo"
                        defaultMessage="Welcome to UmVet! We've been providing our clients with
                    the best vet service since 2010!"
                    />

                    <ul>
                        <FormattedMessage
                            id="firstSliderUl"
                            defaultMessage="In our clinic we provide you with:"
                        />

                        <li>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faStethoscope}
                            />
                            <FormattedMessage
                                id="firstSliderLi1"
                                defaultMessage="Best veterinary care"
                            />
                        </li>
                        <li>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faCookieBite}
                            />
                            <FormattedMessage
                                id="firstSliderLi2"
                                defaultMessage=" Treat jar"
                            />
                        </li>
                        <li>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faHeart}
                            />
                            <FormattedMessage
                                id="firstSliderLi3"
                                defaultMessage="Friendly staff"
                            />
                        </li>
                        <li>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faShieldCat}
                            />
                            <FormattedMessage
                                id="firstSliderLi4"
                                defaultMessage="Seperate waiting rooms for cats and dogs"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FirstSlide;
