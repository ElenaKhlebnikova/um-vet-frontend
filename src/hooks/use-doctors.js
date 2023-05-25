import { useEffect, useState } from 'react';
import { getDoctors } from '../api';

const useDoctors = (id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = (doctorId) => {
        if (doctorId) {
            getDoctors(doctorId)
                .then((res) => res.json())
                .then((resp) => {
                    setData(resp.data.doctors[0]);
                    setLoading(false);
                });
        } else {
            getDoctors()
                .then((res) => res.json())
                .then((resp) => {
                    setLoading(false);
                    setData(resp.data.doctors);
                });
        }
    };

    useEffect(() => {
        fetchData(id);
    }, []);
    return { data, loading };
};

export default useDoctors;
