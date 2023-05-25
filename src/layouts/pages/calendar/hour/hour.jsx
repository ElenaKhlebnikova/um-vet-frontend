import React, { useState } from 'react';
import styles from './hour.module.css';
import PropTypes from 'prop-types';
import useAppointments from '../../../../hooks/use-appointments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import AppointmentForm from '../make-appointment-form/make-appointment-form';

function Hour({ h, day, doctor }) {
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [shown, setShown] = useState(false);
    const { data } = useAppointments(doctor);

    const checkUnavailability = (day, h, firstWeek) => {
        if (firstWeek === true) {
            const appointment = data
                .filter((date) => date.date === day[0].toDateString())
                .filter((date) => date.startTime === h).length;
            return appointment;
        }

        if (firstWeek === false) {
            const appointment = data
                .filter((date) => date.date === day.toDateString())
                .filter((date) => date.startTime === h).length;
            return appointment;
        }
    };

    return (
        <>
            <>
                {shown && (
                    <>
                        <button
                            type="button"
                            className={styles.close}
                            onClick={() => setShown(false)}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <AppointmentForm
                            doctor={doctor}
                            hour={hour}
                            date={date}
                        />
                    </>
                )}

                <button
                    key={h + day}
                    disabled={checkUnavailability(day, h, false) && true}
                    type="button"
                    className={
                        !checkUnavailability(day, h, false)
                            ? styles.available
                            : styles.notAvailable
                    }
                    onClick={() => {
                        setShown(true);
                        setDate(day.toDateString());
                        setHour(h);
                    }}
                >
                    {h}
                </button>
            </>
        </>
    );
}

Hour.propTypes = {
    day: PropTypes.string.isRequired,
    h: PropTypes.string.isRequired,
    doctor: PropTypes.string.isRequired,
};

export default Hour;
