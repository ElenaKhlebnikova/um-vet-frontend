import { React, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './make-appointment-form.module.css';
import useValidateAppointmentForm from '../../../../hooks/use-validate-appointment-form';
import useServiceAndPrice from '../../../../hooks/use-service-and-price';
import useAppointments from '../../../../hooks/use-appointments';
import Loader from '../../../../components/loader';
import { FormattedMessage, useIntl } from 'react-intl';

function AppointmentForm({ doctor, hour, date, locale }) {
    const [name, setName] = useState('');
    const [procedure, setProcedure] = useState('Routine check up');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [shown, setShown] = useState(true);

    console.log(locale);
    const intl = useIntl();
    const { errorName, errorPhone, invalid } = useValidateAppointmentForm(
        name,
        phone
    );

    const serviceAndPrice = useServiceAndPrice(locale).data;
    const { loading } = useServiceAndPrice(locale);

    const { createAppointment } = useAppointments();
    const submitFormAndMakeAnAppointment = async (e) => {
        e.preventDefault();
        createAppointment({
            doctorId: doctor,
            name,
            phone,
            procedure,
            date,
            startTime: hour,
        }).then((res) => {
            if (res.status === 200) {
                setMessage('Thank you for your appointment! 🐶');
                setShown(false);
            } else {
                setMessage('Something went wrong...😿');
                setShown(false);
            }
        });
    };

    return (
        <div className={styles.formContainer}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className={styles.form}>
                        {!shown ? (
                            <div className={styles.msg}>{message}</div>
                        ) : (
                            <form>
                                <h3>
                                    <FormattedMessage
                                        id="book"
                                        defaultMessage="Book an appointment"
                                    />
                                </h3>
                                <div className={styles.formItem}>
                                    <label>
                                        <FormattedMessage
                                            id="name"
                                            defaultMessage="Name"
                                        />
                                        <input
                                            type="text"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            placeholder={intl.formatMessage({
                                                defaultMessage:
                                                    'Please enter your name',
                                                id: 'namePlaceholder',
                                            })}
                                        />
                                    </label>
                                    <span className={styles.errorMessage}>
                                        {errorName}
                                    </span>
                                </div>
                                <div className={styles.formItem}>
                                    <label>
                                        <FormattedMessage
                                            id="phone"
                                            defaultMessage="Phone"
                                        />
                                        <input
                                            type="text"
                                            placeholder={intl.formatMessage({
                                                defaultMessage:
                                                    'Please enter your phone',
                                                id: 'namePlaceholder',
                                            })}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                        />
                                        <span className={styles.errorMessage}>
                                            {errorPhone}
                                        </span>
                                    </label>
                                </div>
                                <div className={styles.formItem}>
                                    <select
                                        className={styles.select}
                                        onChange={(e) =>
                                            setProcedure(e.target.value)
                                        }
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
                                        invalid
                                            ? styles.btnSendInvalid
                                            : styles.btnSend
                                    }
                                    disabled={invalid}
                                    onClick={(e) =>
                                        submitFormAndMakeAnAppointment(e)
                                    }
                                >
                                    <FormattedMessage
                                        id="confirmBtn"
                                        defaultMessage="confirm"
                                    />
                                </button>
                            </form>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

AppointmentForm.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    doctor: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
};

export default AppointmentForm;
