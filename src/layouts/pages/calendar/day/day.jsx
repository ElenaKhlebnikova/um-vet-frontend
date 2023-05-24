import React from 'react';
import Hour from '../hour/hour';
import styles from './day.module.css';
import { workingHours } from '../../../../utils';
import PropTypes from 'prop-types';

function Day({ day, doctor }) {
    console.log(day);
    return (
        <div key={day} className={styles.dateContainer}>
            <div>{day.toDateString().slice(3, -4)}</div>
            <div className={styles.hoursContainer}>
                {workingHours.map((h) => (
                    <Hour h={h} day={day} doctor={doctor} key={h + day} />
                ))}
            </div>
        </div>
    );
}

Day.propTypes = {
    day: PropTypes.object.isRequired,
    doctor: PropTypes.string.isRequired,
};
export default Day;
