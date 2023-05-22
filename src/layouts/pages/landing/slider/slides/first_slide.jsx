import React from 'react';
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
        <div className={styles.container_slide}>
            <div className={styles.pic_container_first_slide}>
                <img
                    className={styles.first_slide_pic}
                    src={buildingImg}
                    alt="VetPet building"
                />
            </div>
            <div className={styles.info_container}>
                <p className={styles.heading}>About us</p>
                <p className={styles.text}>
                    Welcome to UmVet! We&apos;ve been providing our clients with
                    the best vet service since 2010!
                    <ul>
                        In our clinic we provide you with:
                        <li>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faStethoscope}
                            />
                            Best veterinary care
                        </li>
                        <li>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faCookieBite}
                            />
                            Treat jar
                        </li>
                        <li>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faHeart}
                            />
                            Friendly staff
                        </li>
                        <li>
                            <FontAwesomeIcon
                                className={styles.icon}
                                icon={faShieldCat}
                            />
                            Seperate waiting rooms for cats and dogs
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default FirstSlide;
