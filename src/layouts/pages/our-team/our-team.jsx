import React from 'react';
import Doctor from './doctor/doctor';

import useDoctors from './../../../hooks/use-doctors';
import styles from './our-team.module.css';
import Loader from '../../../components/loader';
function OurTeam() {
    const doctors = useDoctors().data;
    const loading = useDoctors().loading;
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className={styles.mainContainer}>
                        {doctors !== [] &&
                            doctors.map((doctor) => (
                                <Doctor doctor={doctor} key={doctor._id} />
                            ))}
                    </div>
                </>
            )}
        </>
    );
}

export default OurTeam;
