import { useEffect, useState } from 'react';
import { getServiceAndPrice } from '../api';

const useServiceAndPrice = (locale) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        getServiceAndPrice(locale)
            .then((res) => res.json())
            .then((resp) => {
                setData(resp.data.data);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData(locale);
    }, [locale]);
    return { data, loading };
};

export default useServiceAndPrice;
