import React from 'react';
import { Link } from 'react-router-dom';
import styles from './slides.module.css';
import catImg from '../../../../../assets/cat_third_slide.jpg';
import { FormattedMessage } from 'react-intl';
function ThirdSlide() {
    return (
        <div
            className={[
                styles.container_slide,
                styles.container_slide_third,
            ].join(' ')}
        >
            <div className={styles.pic_container_third_slide}>
                <img
                    className={styles.third_slide_pic}
                    src={catImg}
                    alt="VetPet building"
                />
            </div>
            <div className={styles.info_container_third}>
                <div>
                    <p className={styles.heading}>
                        <FormattedMessage
                            id="thirdSliderHeading"
                            defaultMessage="Our blog"
                        />
                    </p>
                    <p className={styles.text}>
                        <FormattedMessage
                            id="thirdSliderInfo"
                            defaultMessage="  Welcome to our vet blog, where we share insightful
                        articles and expert advice to help you navigate the
                        world of pet care. From tips on preventative medicine
                        and nutrition to guidance on common health issues, our
                        blog is a trusted resource for all pet owners. We are
                        passionate about promoting the well-being of pets and
                        fostering the human-animal bond. Whether you're a
                        new pet owner or a seasoned enthusiast, our blog is here
                        to empower you with the knowledge and tools you need to
                        give your pets the best care possible."
                        />
                    </p>
                </div>
                <div className={styles.btnContainer}>
                    <Link to="/blog">
                        <button className={styles.btn} type="button">
                            <FormattedMessage
                                id="thirdSliderBtn"
                                defaultMessage="   Visit our blog"
                            />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ThirdSlide;
