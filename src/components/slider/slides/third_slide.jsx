/* eslint-disable react/style-prop-object */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './slides.module.css';
import catImg from '../../../assets/pictures/cat_third_slide.jpg';

function ThirdSlide() {
    return (
        <div className={styles.container_slide}>
            <div className={styles.pic_container_third_slide}>
                <img
                    className={styles.third_slide_pic}
                    src={catImg}
                    alt="VetPet building"
                />
            </div>
            <div className={styles.info_container_third}>
                <div>
                    <p className={styles.heading}>Our blog</p>
                    <p className={styles.text}>
                        Welcome to our vet blog, where we share insightful
                        articles and expert advice to help you navigate the
                        world of pet care. From tips on preventative medicine
                        and nutrition to guidance on common health issues, our
                        blog is a trusted resource for all pet owners. We are
                        passionate about promoting the well-being of pets and
                        fostering the human-animal bond. Whether you&apos;re a
                        new pet owner or a seasoned enthusiast, our blog is here
                        to empower you with the knowledge and tools you need to
                        give your pets the best care possible.
                    </p>
                </div>
                <div className={styles.btnContainer}>
                    <Link to="/blog">
                        <button className={styles.btn} type="button">
                            Visit our blog
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ThirdSlide;
