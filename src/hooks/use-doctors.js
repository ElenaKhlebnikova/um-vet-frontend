import { useEffect, useState } from 'react';
import { getDoctors } from '../api';

const useDoctors = (locale, id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = (lang, doctorId) => {
        if (doctorId) {
            getDoctors(lang, doctorId)
                .then((res) => res.json())
                .then((resp) => {
                    setData(resp.data.data[0]);
                    setLoading(false);
                });
        } else {
            getDoctors(lang)
                .then((res) => res.json())
                .then((resp) => {
                    setLoading(false);
                    setData(resp.data.data);
                });
        }
    };

    useEffect(() => {
        fetchData(locale, id);
    }, [locale]);
    return { data, loading };
};

export default useDoctors;
