import React from 'react';
import styles from './next-weeks.module.css';
import PropTypes from 'prop-types';
import { nextWeeks } from '../../../../utils';
import Day from '../day/day';

function NextWeeks({ doctor }) {
    return (
        <div className={styles.bodyOfTheTable}>
            {nextWeeks.map((day) => (
                <Day day={day} doctor={doctor} key={day} />
            ))}
        </div>
    );
}

NextWeeks.propTypes = {
    doctor: PropTypes.string.isRequired,
};
export default NextWeeks;
