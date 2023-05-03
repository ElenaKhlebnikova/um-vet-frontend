/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
// /* eslint-disable no-lone-blocks */
// // /* eslint-disable no-lone-blocks */
import { React, useEffect, useState } from "react";
import {
  nextWeeks,
  firstWeek,
  workingHours,
} from "../../../utils/working-time";
import styles from "./calendar.module.css";
import AppointmentForm from "../../../components/make-appointment-form/make-appointment-form";
import Header from "../../header/header";

const mon = firstWeek.filter((day) => day.toDateString().startsWith("Mon"));
const tue = firstWeek.filter((day) => day.toDateString().startsWith("Tue"));
const wed = firstWeek.filter((day) => day.toDateString().startsWith("Wed"));
const thu = firstWeek.filter((day) => day.toDateString().startsWith("Thu"));
const fri = firstWeek.filter((day) => day.toDateString().startsWith("Fri"));

function App() {
  const [shown, setShown] = useState(false);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [doctor, setDoctor] = useState("");
  const [data, setData] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchFunction = async function () {
      await fetch(`http://localhost:5000/appointments?doctorId=${doctor}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data !== undefined) {
            setData(data.data.doctorsAppointments);
          }
        });
    };

    fetchFunction();
  }, [doctor]);

  useEffect(() => {
    const fetchFunction = async function () {
      await fetch(`http://localhost:5000/doctors`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.data !== undefined) {
            setDoctors(data.data.doctors);
          }
        });
    };

    fetchFunction();
  }, []);
  return (
    <>
      <Header />
      {shown && (
        <>
          <button
            type="button"
            className={styles.close}
            onClick={() => setShown(false)}
          >
            Close
          </button>
          <AppointmentForm doctor={doctor} hour={hour} date={date} />
        </>
      )}

      <select
        onChange={(e) => {
          setDoctor(e.target.value);
        }}
      >
        {/* I know you are planning on fixing this, but this is just a meow reminder
                    You should not have IDs like this defined here,
                    you need to fetch all the doctors and use their IDs and not hardcoded IDs
                */}
        <option value="">Chose a doctor</option>
        {doctors.map((doctor) => (
          <option value={doctor._id}>{doctor.name}</option>
        ))}
      </select>

      <div className={styles.calendarMainContainer}>
        <div className={styles.headOfTheTable}>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
        </div>

        {/*  This repetition is a bit of a problem as you said,
    maybe before moving forward you can try to find a way to avoid this

    I think the solution could be to rewrite the function which gives you the values for the dates
*/}
        <div className={styles.bodyOfTheTable}>
          <div>
            <div>{mon.length !== 0 ? mon[0].toDateString() : ""}</div>
            <div className={styles.hoursContainer}>
              {mon.length !== 0 &&
                workingHours.map((h) => (
                  <button
                    type="button"
                    className={
                      data
                        .filter((date) => date.date === mon[0].toDateString())
                        .filter((date) => date.startTime === h).length === 0
                        ? `${styles.available}`
                        : `${styles.notAvailable}`
                    }
                    onClick={() => {
                      setShown(true);
                      setDate(mon[0].toDateString());
                      setHour(h);
                    }}
                  >
                    {h}
                  </button>
                ))}
            </div>
          </div>
          <div>
            <div>{tue.length !== 0 ? tue[0].toDateString() : ""}</div>
            <div className={styles.hoursContainer}>
              {tue.length !== 0 &&
                workingHours.map((h) => (
                  <button
                    type="button"
                    className={
                      data
                        .filter((date) => date.date === tue[0].toDateString())
                        .filter((date) => date.startTime === h).length === 0
                        ? `${styles.available}`
                        : `${styles.notAvailable}`
                    }
                    onClick={() => {
                      setShown(true);
                      setHour(h);
                      setDate(tue[0].toDateString());
                    }}
                  >
                    {h}
                  </button>
                ))}
            </div>
          </div>
          <div>
            <div>{wed.length ? wed[0].toDateString() : ""}</div>
            <div className={styles.hoursContainer}>
              {wed.length !== 0 &&
                workingHours.map((h) => (
                  <button
                    type="button"
                    className={
                      data
                        .filter((date) => date.date === wed[0].toDateString())
                        .filter((date) => date.startTime === h).length === 0
                        ? `${styles.available}`
                        : `${styles.notAvailable}`
                    }
                    value={h}
                    onClick={() => {
                      setShown(true);
                      setHour(h);
                      setDate(wed[0].toDateString());
                    }}
                  >
                    {h}
                  </button>
                ))}
            </div>
          </div>
          <div>
            <div>{thu.length ? thu[0].toDateString() : ""}</div>
            <div className={styles.hoursContainer}>
              {thu.length !== 0 &&
                workingHours.map((h) => (
                  <button
                    type="button"
                    className={
                      data
                        .filter((date) => date.date === thu[0].toDateString())
                        .filter((date) => date.startTime === h).length === 0
                        ? `${styles.available}`
                        : `${styles.notAvailable}`
                    }
                    value={h}
                    onClick={() => {
                      setShown(true);
                      setHour(h);
                      setDate(thu[0].toDateString());
                    }}
                  >
                    {h}
                  </button>
                ))}
            </div>
          </div>
          <div>
            <div>{fri.length ? fri[0].toDateString() : " "}</div>
            <div className={styles.hoursContainer}>
              {fri.length !== 0 &&
                workingHours.map((h) => (
                  <button
                    type="button"
                    className={
                      data
                        .filter((date) => date.date === fri[0].toDateString())
                        .filter((date) => date.startTime === h).length === 0
                        ? `${styles.available}`
                        : `${styles.notAvailable}`
                    }
                    onClick={() => {
                      setShown(true);
                      setHour(h);
                      setDate(fri[0].toDateString());
                    }}
                  >
                    {h}
                  </button>
                ))}
            </div>
          </div>

          {nextWeeks.map((day) => (
            <div>
              <div>{day.toDateString()}</div>
              <div className={styles.hoursContainer}>
                {workingHours.map((h) => (
                  <button
                    type="button"
                    className={
                      data
                        .filter((date) => date.date === day.toDateString())
                        .filter((date) => date.startTime === h).length === 0
                        ? `${styles.available}`
                        : `${styles.notAvailable}`
                    }
                    onClick={() => {
                      setShown(true);

                      setDate(day);
                      setHour(h);
                    }}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
