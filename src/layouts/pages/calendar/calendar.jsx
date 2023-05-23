import { React, useState } from 'react';
import { useParams } from 'react-router';

import styles from './calendar.module.css';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import useDoctors from '../../../hooks/useDoctors';
import FirstWeek from './first-week/first-week';
import NextWeeks from './next-weeks/next-weeks';

function App() {
    const [doctor, setDoctor] = useState('');
    const { doctorId } = useParams();
    const doctors = useDoctors();

    return (
        <>
            <Header />

            <div className={styles.calendarMainContainer}>
                <div className={styles.selectContainer}>
                    <span className={styles.spanDoctor}>Doctor: </span>
                    <select
                        className={styles.select}
                        onChange={(e) => {
                            setDoctor(e.target.value);
                        }}
                    >
                        <option className={styles.options} value="">
                            Chose a doctor
                        </option>
                        {doctors !== undefined &&
                            doctors.map((doctor) => (
                                <option
                                    key={doctor._id}
                                    className={styles.options}
                                    selected={doctorId === doctor._id}
                                    value={doctor._id}
                                >
                                    {doctor.name}
                                </option>
                            ))}
                    </select>
                </div>

                {doctor !== '' && (
                    <div>
                        <div className={styles.headOfTheTable}>
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                        </div>
                        <FirstWeek doctor={doctor} />
                        <NextWeeks doctor={doctor} />
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
export default App;
