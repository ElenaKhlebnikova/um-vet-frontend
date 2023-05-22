import { React, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './make-appointment-form.module.css';
import useValidate from '../../../../hooks/useValidate';
import useServiceAndPrice from '../../../../hooks/useServiceAndPrice';
import useAppointments from '../../../../hooks/useAppointments';

function AppointmentForm({ doctor, hour, date }) {
    const [name, setName] = useState('');
    const [procedure, setProcedure] = useState('Routine check up');
    const [phone, setPhone] = useState(0);

    // eslint-disable-next-line func-names
    const { messageName, messagePhone, invalid } = useValidate(
        name,
        '',
        phone,
        0
    );

    const serviceAndPrice = useServiceAndPrice();
    const { createAppointment } = useAppointments();
    const submitFormAndMakeAnAppointment = async function (e) {
        e.preventDefault();
        createAppointment({
            doctorId: doctor,
            name,
            phone,
            procedure,
            date,
            startTime: hour,
        });
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.form}>
                <form>
                    <h3>Book an appointment</h3>
                    <div className={styles.formItem}>
                        <label>
                            Name:
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Please enter your name"
                            />
                        </label>
                        <span style={{ color: '#f57f95', fontSize: '1.5rem' }}>
                            {messageName}
                        </span>
                    </div>
                    <div className={styles.formItem}>
                        <label>
                            Phone:
                            <input
                                type="text"
                                placeholder="Please enter your phone"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <span
                                style={{ color: '#f57f95', fontSize: '1.5rem' }}
                            >
                                {messagePhone}
                            </span>
                        </label>
                    </div>
                    <div className={styles.formItem}>
                        <select
                            className={styles.select}
                            onChange={(e) => setProcedure(e.target.value)}
                            defaultValue={
                                serviceAndPrice !== undefined &&
                                serviceAndPrice.length !== 0 &&
                                serviceAndPrice[0].service
                            }
                        >
                            {serviceAndPrice !== undefined &&
                                serviceAndPrice.length !== 0 &&
                                serviceAndPrice.map((i) => (
                                    <option
                                        key={i._id}
                                        className={styles.option}
                                        value={i.service}
                                    >
                                        {i.service}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        value="submit"
                        className={
                            invalid ? styles.btnSendInvalid : styles.btnSend
                        }
                        disabled={invalid}
                        onClick={(e) => submitFormAndMakeAnAppointment(e)}
                    >
                        Confirm
                    </button>
                </form>
            </div>
        </div>
    );
}

AppointmentForm.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    doctor: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default AppointmentForm;
