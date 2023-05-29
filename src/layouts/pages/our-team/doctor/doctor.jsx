import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './doctor.module.css';
import { FormattedMessage } from 'react-intl';
function Doctor({ doctor }) {
    return (
        <div key={doctor._id} className={styles.doctorsContainer}>
            <img src={doctor.img} alt={doctor.name} />
            <div className={styles.doctorsInfo}>
                <div className={styles.doctorName}>{doctor.name}</div>
                <div>{doctor.specialization}</div>
                <div>
                    <button type="button" className={styles.btn}>
                        <Link to={`/${doctor._id}/appointments`}>
                            <FormattedMessage
                                id="appointmentBtn"
                                defaultMessage="Make an appointment"
                            />
                        </Link>
                    </button>
                </div>
                <div className={styles.btnLearnMore}>
                    <button type="button">
                        <Link to={`/${doctor._id}/comments`}>
                            <FormattedMessage
                                id="learnMoreBtn"
                                defaultMessage="Learn More &rarr;"
                            />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

Doctor.propTypes = {
    doctor: PropTypes.object.isRequired,
};

export default Doctor;
