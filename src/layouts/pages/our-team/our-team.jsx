import React from 'react';
import Doctor from './doctor/doctor';

import useDoctors from './../../../hooks/useDoctors';
import styles from './our-team.module.css';
function OurTeam() {
    const doctors = useDoctors();
    return (
        <>
            <div className={styles.mainContainer}>
                {doctors !== [] &&
                    doctors.map((doctor) => (
                        <Doctor doctor={doctor} key={doctor._id} />
                    ))}
            </div>
        </>
    );
}

export default OurTeam;
