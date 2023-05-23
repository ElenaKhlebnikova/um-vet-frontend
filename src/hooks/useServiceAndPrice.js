import { useEffect, useState } from 'react';
import { getServiceAndPrice } from '../api';

const useServiceAndPrice = () => {
    const [data, setData] = useState([]);
    const fetchData = () => {
        getServiceAndPrice()
            .then((res) => res.json())
            .then((resp) => setData(resp.data.service));
    };

    useEffect(() => {
        fetchData();
    }, []);
    return data;
};

export default useServiceAndPrice;
