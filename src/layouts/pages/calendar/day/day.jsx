import React from 'react';
import Hour from '../hour/hour';
import styles from './day.module.css';
import { workingHours } from '../../../../utils';
import PropTypes from 'prop-types';

function Day({ day, doctor, locale }) {
    return (
        <div key={day} className={styles.dateContainer}>
            <div className={styles.day}>{day.toDateString().slice(3, -4)}</div>
            <div className={styles.hoursContainer}>
                {workingHours.map((h) => (
                    <Hour
                        locale={locale}
                        h={h}
                        day={day}
                        doctor={doctor}
                        key={h + day}
                    />
                ))}
            </div>
        </div>
    );
}

Day.propTypes = {
    day: PropTypes.object.isRequired,
    doctor: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
};
export default Day;
