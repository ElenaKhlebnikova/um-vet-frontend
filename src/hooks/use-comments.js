import { useEffect, useState } from 'react';
import { getComments, createComment } from '../api';

const useComments = (id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (id) {
            fetchData(id);
        }
    }, [id]);

    const fetchData = (doctorId) => {
        getComments(doctorId)
            .then((res) => res.json())
            .then((resp) => {
                setData(resp.data.comments);
                setLoading(false);
            });
    };

    return { comments: data, createComment, loading };
};

export default useComments;
