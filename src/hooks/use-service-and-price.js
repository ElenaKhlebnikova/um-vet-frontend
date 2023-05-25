import { useEffect, useState } from 'react';
import { getServiceAndPrice } from '../api';

const useServiceAndPrice = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = () => {
        getServiceAndPrice()
            .then((res) => res.json())
            .then((resp) => {
                setData(resp.data.service);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);
    return { data, loading };
};

export default useServiceAndPrice;
