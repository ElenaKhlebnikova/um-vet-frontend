import { useEffect, useState } from 'react';
import { getAppointments, createAppointment } from '../api';

const useAppointments = function (id) {
    const [data, setData] = useState([]);
    const fetchData = (doctorId) => {
        if (doctorId) {
            getAppointments(doctorId)
                .then((res) => res.json())
                .then((resp) => setData(resp.data.doctorsAppointments));
        } else {
            getAppointments()
                .then((res) => res.json())
                .then((resp) => setData(resp.data.doctorsAppointments));
        }
    };

    useEffect(() => {
        fetchData(id);
    }, [id]);
    return { data, createAppointment };
};

export default useAppointments;
