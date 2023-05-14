/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./make-appointment-form.module.css";

// make sure to add prop-types for all props of each component
function AppointmentForm({ doctor, hour, date }) {
  const [name, setName] = useState("");
  const [procedure, setProcedure] = useState("");
  const [phone, setPhone] = useState("");

  // eslint-disable-next-line func-names
  const [serviceAndPrice, setServiceAndPrice] = useState([]);
  useEffect(() => {
    const fetchFunction = async function () {
      await fetch("http://localhost:5000/service-and-prices", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data !== undefined) {
            setServiceAndPrice(data.data.service);
          }
        });
    };

    fetchFunction();
  }, []);

  const submitFormAndMakeAnAppointment = async function (e) {
    e.preventDefault();
    await fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        doctorId: doctor,
        name,
        phone,
        procedure,
        date,
        startTime: hour,
      }),
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
          </div>
          <div className={styles.formItem}>
            <label>
              Phone:
              <input
                type="text"
                placeholder="Please enter your phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.formItem}>
            <select
              className={styles.select}
              onChange={(e) => setProcedure(e.target.value)}
            >
              {serviceAndPrice.map((i) => (
                <option className={styles.option} value={i.service}>
                  {i.service}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            value="submit"
            className={styles.btn}
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
