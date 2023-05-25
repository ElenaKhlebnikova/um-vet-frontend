import { useEffect, useState } from 'react';
import { getAppointments, createAppointment } from '../api';

const useAppointments = (id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = (doctorId) => {
        if (doctorId) {
            getAppointments(doctorId)
                .then((res) => res.json())
                .then((resp) => {
                    setData(resp.data.doctorsAppointments);
                    setLoading(false);
                });
        } else {
            getAppointments()
                .then((res) => res.json())
                .then((resp) => {
                    setData(resp.data.doctorsAppointments);
                    setLoading(false);
                });
        }
    };

    useEffect(() => {
        fetchData(id);
    }, [id]);
    return { data, loading, createAppointment };
};

export default useAppointments;
