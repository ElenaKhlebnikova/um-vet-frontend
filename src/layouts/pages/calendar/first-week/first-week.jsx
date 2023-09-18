import React from 'react';
import { firstWeek } from '../../../../utils';
import Day from '../day/day';
import styles from './first-week.module.css';
import PropTypes from 'prop-types';

function FirstWeek({ doctor, locale }) {
    const mon = firstWeek.filter((day) => day.toDateString().startsWith('Mon'));
    const tue = firstWeek.filter((day) => day.toDateString().startsWith('Tue'));
    const wed = firstWeek.filter((day) => day.toDateString().startsWith('Wed'));
    const thu = firstWeek.filter((day) => day.toDateString().startsWith('Thu'));
    const fri = firstWeek.filter((day) => day.toDateString().startsWith('Fri'));
    return (
        <div className={styles.bodyOfTheTable}>
            {' '}
            {mon.length !== 0 && (
                <div className={styles.mon}>
                    <Day
                        locale={locale}
                        day={mon[0]}
                        doctor={doctor}
                        key={mon[0]}
                    />
                </div>
            )}
            {tue.length !== 0 && (
                <div className={styles.tue}>
                    <Day
                        locale={locale}
                        day={tue[0]}
                        doctor={doctor}
                        key={tue[0]}
                    />
                </div>
            )}
            {wed.length !== 0 && (
                <div className={styles.wed}>
                    <Day
                        locale={locale}
                        day={wed[0]}
                        doctor={doctor}
                        key={wed[0]}
                    />
                </div>
            )}
            {thu.length !== 0 && (
                <div className={styles.thu}>
                    <Day
                        locale={locale}
                        day={thu[0]}
                        doctor={doctor}
                        key={thu[0]}
                    />
                </div>
            )}
            {fri.length !== 0 && (
                <div className={styles.fri}>
                    <Day
                        locale={locale}
                        day={fri[0]}
                        doctor={doctor}
                        key={fri[0]}
                    />
                </div>
            )}
        </div>
    );
}

FirstWeek.propTypes = {
    doctor: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
};
export default FirstWeek;
