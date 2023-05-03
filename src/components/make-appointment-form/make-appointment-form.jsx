/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState } from "react";
import PropTypes from "prop-types";
import styles from "./make-appointment-form.module.css";

// make sure to add prop-types for all props of each component
function AppointmentForm({ doctor, hour, date }) {
  const [name, setName] = useState("");
  const [procedure, setProcedure] = useState("");
  const [phone, setPhone] = useState("");
  // eslint-disable-next-line func-names
  const submitFormAndMakeAnAppointment = async function (e) {
    e.preventDefault();
    await fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // if key and value has the same name you can use it as a value like this

        // {doctorId: doctor, name, phone,....  }
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
    <div className={styles.form}>
      <form>
        <label>
          Name:
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="please enter your name"
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            placeholder="Please enter your phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <select onChange={(e) => setProcedure(e.target.value)}>
          <option value="none">Please chose a procedure</option>
          <option value="Cholecystectomy">Cholecystectomy</option>

          <option value="Cleft Palate Repair">Cleft Palate Repair</option>
          <option value="Colonoscopy">Colonoscopy</option>
          <option value="Cryptorchid Neuter">Cryptorchid Neuter</option>
          <option value="Cholecystectomy">CT Scan</option>
        </select>
        <button
          type="submit"
          value="submit"
          // This can be just
          // onClick={submitFormAndMakeAnAppointment}
          onClick={(e) => submitFormAndMakeAnAppointment(e)}
        >
          Submit
        </button>
      </form>
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
