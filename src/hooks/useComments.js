import { useEffect, useState } from 'react';
import { getComments, createComment } from '../api';

const useComments = (id) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (id) {
            fetchData(id);
        }
    }, [id]);

    const fetchData = (doctorId) => {
        getComments(doctorId)
            .then((res) => res.json())
            .then((resp) => setData(resp.data.comments));
    };

    return { comments: data, createComment };
};

export default useComments;
