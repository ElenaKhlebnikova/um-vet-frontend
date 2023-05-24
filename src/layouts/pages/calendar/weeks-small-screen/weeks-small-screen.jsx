import { days } from '../../../../utils';
import styles from './weeks-small-screen.module.css';
import React, { useState } from 'react';
import Day from './../day/day';
import PropTypes from 'prop-types';
function WeeksSmallScreen({ doctor }) {
    const [day, setDay] = useState('');
    console.log(day);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.selectContainer}>
                <span className={styles.spanDate}>Date: </span>
                <select
                    className={styles.select}
                    onChange={(e) => {
                        setDay(new Date(e.target.value));
                    }}
                >
                    <option className={styles.options} value="">
                        Select a date
                    </option>
                    {days !== undefined &&
                        days.map((day) => (
                            <option
                                key={day}
                                className={styles.options}
                                value={day.toDateString()}
                            >
                                {day.toDateString()}
                            </option>
                        ))}
                </select>
            </div>
            <div>{day !== '' && <Day day={day} doctor={doctor} />}</div>
        </div>
    );
}

WeeksSmallScreen.propTypes = {
    doctor: PropTypes.string.isRequired,
};

export default WeeksSmallScreen;
