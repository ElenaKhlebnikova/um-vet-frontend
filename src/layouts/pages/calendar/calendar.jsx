/* eslint-disable operator-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
// /* eslint-disable no-lone-blocks */
// // /* eslint-disable no-lone-blocks */
import { React, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import {
  nextWeeks,
  firstWeek,
  workingHours,
} from "../../../utils/working-time";
import styles from "./calendar.module.css";
import AppointmentForm from "../../../components/make-appointment-form/make-appointment-form";
import Header from "../../header/header";
import Footer from "../../footer/footer";

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
  const { doctorId } = useParams();

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
  }, [doctor, doctorId]);

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
    if (doctorId) {
      setDoctor(doctorId);
    }
    fetchFunction();
  }, []);

  const checkUnavailability = function (day, h, firstWeek) {
    if (firstWeek === true) {
      const appointment = data
        .filter((date) => date.date === day[0].toDateString())
        .filter((date) => date.startTime === h).length;
      return appointment;
    }
    const appointment = data
      .filter((date) => date.date === day.toDateString())
      .filter((date) => date.startTime === h).length;

    return appointment;
  };
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
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "#01b2c1", height: "5rem", marginTop: "2rem" }}
            />
          </button>
          <AppointmentForm doctor={doctor} hour={hour} date={date} />
        </>
      )}

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
            {doctors.map((doctor) => (
              <option
                className={styles.options}
                selected={doctorId === doctor._id}
                value={doctor._id}
              >
                {doctor.name}
              </option>
            ))}
          </select>
        </div>

        {doctor !== "" && !shown && (
          <div>
            <div className={styles.headOfTheTable}>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
            </div>

            <div className={styles.bodyOfTheTable}>
              <div className={mon.length !== 0 && styles.dateContainer}>
                <div>
                  {mon.length !== 0 ? mon[0].toDateString().slice(3, -4) : ""}
                </div>
                <div className={styles.hoursContainer}>
                  {mon.length !== 0 &&
                    workingHours.map((h) => (
                      <button
                        disabled={checkUnavailability(mon, h, true) && true}
                        type="button"
                        className={
                          !checkUnavailability(mon, h, true)
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
              <div className={tue.length !== 0 && styles.dateContainer}>
                <div>
                  {tue.length !== 0 ? tue[0].toDateString().slice(3, -4) : ""}
                </div>
                <div className={styles.hoursContainer}>
                  {tue.length !== 0 &&
                    workingHours.map((h) => (
                      <button
                        disabled={checkUnavailability(thu, h, true) && true}
                        type="button"
                        className={
                          !checkUnavailability(tue, h, true)
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
              <div className={wed.length !== 0 && styles.dateContainer}>
                <div>
                  {wed.length ? wed[0].toDateString().slice(3, -4) : ""}
                </div>
                <div className={styles.hoursContainer}>
                  {wed.length !== 0 &&
                    workingHours.map((h) => (
                      <button
                        disabled={checkUnavailability(wed, h, true) && true}
                        type="button"
                        className={
                          !checkUnavailability(wed, h, true)
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
              <div className={thu.length !== 0 && styles.dateContainer}>
                <div>
                  {thu.length ? thu[0].toDateString().slice(3, -4) : ""}
                </div>
                <div className={styles.hoursContainer}>
                  {thu.length !== 0 &&
                    workingHours.map((h) => (
                      <button
                        disabled={checkUnavailability(thu, h, true) && true}
                        type="button"
                        className={
                          !checkUnavailability(thu, h, true)
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
              <div className={fri.length !== 0 && styles.dateContainer}>
                <div>
                  {fri.length ? fri[0].toDateString().slice(3, -4) : " "}
                </div>
                <div className={styles.hoursContainer}>
                  {fri.length !== 0 &&
                    workingHours.map((h) => (
                      <button
                        disabled={checkUnavailability(fri, h, true) && true}
                        type="button"
                        className={
                          !checkUnavailability(fri, h, true)
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
                <div className={styles.dateContainer}>
                  <div>{day.toDateString().slice(3, -4)}</div>
                  <div className={styles.hoursContainer}>
                    {workingHours.map((h) => (
                      <button
                        disabled={checkUnavailability(day, h, false) && true}
                        type="button"
                        className={
                          !checkUnavailability(day, h, false)
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
        )}
      </div>
      <Footer />
    </>
  );
}
export default App;
