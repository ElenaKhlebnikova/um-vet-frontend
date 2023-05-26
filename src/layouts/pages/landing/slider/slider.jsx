import React, { useState } from 'react';
import {
    faAngleLeft,
    faAngleRight,
    faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './slider.module.css';
import FirstSlide from './slides/first_slide';
import SecondSlide from './slides/second_slide';
import ThirdSlide from './slides/third_slide';

function Slider() {
    const [touchPosition, setTouchPosition] = useState(null);
    const [slide, setSlide] = useState(1);

    const DIRECTIONS = {
        INC: 1,
        DEC: -1,
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };
    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            if (slide === 3) {
                setSlide(1);
            } else setSlide(slide + 1);
        }

        if (diff < -5) {
            if (slide === 1) {
                setSlide(3);
            } else setSlide(slide - 1);
        }

        setTouchPosition(null);
    };

    const handleSlides = (direction) => {
        if (slide === 3 && direction === DIRECTIONS.INC) {
            setSlide(1);
        } else if (slide === 1 && direction === DIRECTIONS.DEC) {
            setSlide(3);
        } else {
            setSlide(slide + direction);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.btn}>
                <button
                    type="button"
                    onClick={() => handleSlides(DIRECTIONS.DEC)}
                >
                    <FontAwesomeIcon
                        className={
                            slide === 1
                                ? styles.icon_blue_dark
                                : slide === 2
                                ? styles.icon_blue_mid
                                : styles.icon_blue_light
                        }
                        icon={faAngleLeft}
                    />
                </button>
            </div>
            <div>
                {slide === 1 && (
                    <FirstSlide
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    />
                )}
                {slide === 2 && (
                    <SecondSlide
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    />
                )}
                {slide === 3 && (
                    <ThirdSlide
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    />
                )}
            </div>
            <button type="button" onClick={() => handleSlides(DIRECTIONS.INC)}>
                <div className={styles.btn}>
                    <FontAwesomeIcon
                        className={
                            slide === 1
                                ? styles.icon_blue_dark
                                : slide === 2
                                ? styles.icon_blue_mid
                                : styles.icon_blue_light
                        }
                        icon={faAngleRight}
                    />
                </div>
            </button>
            <div className={styles.dots}>
                <FontAwesomeIcon
                    className={
                        slide === 1
                            ? styles.icon_dot_blue_light
                            : styles.icon_dot_blue_dark
                    }
                    icon={faCircle}
                    onClick={() => setSlide(1)}
                />
                <FontAwesomeIcon
                    className={
                        slide === 2
                            ? styles.icon_dot_blue_light
                            : styles.icon_dot_blue_dark
                    }
                    icon={faCircle}
                    onClick={() => setSlide(2)}
                />
                <FontAwesomeIcon
                    className={
                        slide === 3
                            ? styles.icon_dot_blue_light
                            : styles.icon_dot_blue_dark
                    }
                    icon={faCircle}
                    onClick={() => setSlide(3)}
                />
            </div>
        </div>
    );
}

export default Slider;
