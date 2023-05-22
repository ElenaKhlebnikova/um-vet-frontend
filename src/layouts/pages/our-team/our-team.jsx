import React from 'react';
import { Link } from 'react-router-dom';
import styles from './our-team.module.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import useDoctors from '../../../hooks/useDoctors';

function OurTeam() {
    const doctors = useDoctors();

    return (
        <>
            <Header />
            {doctors !== [] && doctors !== undefined && (
                <div className={styles.mainContainer}>
                    {doctors.map((doctor) => (
                        <div
                            key={doctor._id}
                            className={styles.doctorsContainer}
                        >
                            <img src={doctor.img} alt={doctor.name} />
                            <div className={styles.doctorsInfo}>
                                <div className={styles.doctorName}>
                                    {doctor.name}
                                </div>
                                <div>{doctor.specialization}</div>
                                <div>
                                    <button
                                        type="button"
                                        className={styles.btn}
                                    >
                                        <Link
                                            to={`/${doctor._id}/appointments`}
                                        >
                                            Book an appointment
                                        </Link>
                                    </button>
                                </div>
                                <div className={styles.btnLearnMore}>
                                    <button type="button">
                                        <Link to={`/${doctor._id}/comments`}>
                                            Learn More &rarr;
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <Footer />
        </>
    );
}

export default OurTeam;
