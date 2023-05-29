import { React, useState } from 'react';
import { useParams } from 'react-router';
import styles from './calendar.module.css';
import useDoctors from '../../../hooks/use-doctors';
import FirstWeek from './first-week/first-week';
import NextWeeks from './next-weeks/next-weeks';
import WeeksSmallScreen from './weeks-small-screen/weeks-small-screen';
import Loader from '../../../components/loader';
import { FormattedMessage } from 'react-intl';
function Calendar() {
    const [doctor, setDoctor] = useState('');
    const { doctorId } = useParams();
    const doctors = useDoctors('en').data;
    const { loading } = useDoctors();
    const screenWidth = window.screen.width;

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className={styles.calendarMainContainer}>
                        <div className={styles.selectContainer}>
                            <span className={styles.spanDoctor}>
                                <FormattedMessage
                                    id="doctor"
                                    defaultMessage="Doctor"
                                />
                            </span>
                            <select
                                className={styles.select}
                                onChange={(e) => {
                                    setDoctor(e.target.value);
                                }}
                            >
                                <option className={styles.options} value="">
                                    <FormattedMessage
                                        id="doctorChoose"
                                        defaultMessage="Choose a doctor"
                                    />
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
                                {screenWidth > 900 ? (
                                    <>
                                        <div className={styles.headOfTheTable}>
                                            <div>
                                                <FormattedMessage
                                                    id="mon"
                                                    defaultMessage="Mon"
                                                />
                                            </div>
                                            <div>
                                                <FormattedMessage
                                                    id="tue"
                                                    defaultMessage="Tue"
                                                />
                                            </div>
                                            <div>
                                                <FormattedMessage
                                                    id="wed"
                                                    defaultMessage="Wed"
                                                />
                                            </div>
                                            <div>
                                                <FormattedMessage
                                                    id="thu"
                                                    defaultMessage="Thu"
                                                />
                                            </div>
                                            <div>
                                                <FormattedMessage
                                                    id="fri"
                                                    defaultMessage="Fri"
                                                />
                                            </div>
                                        </div>

                                        <FirstWeek doctor={doctor} />
                                        <NextWeeks doctor={doctor} />
                                    </>
                                ) : (
                                    <WeeksSmallScreen doctor={doctor} />
                                )}
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
}
export default Calendar;
