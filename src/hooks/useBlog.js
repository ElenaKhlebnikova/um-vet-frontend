import { useEffect, useState } from 'react';
import { getBlog } from '../api';

const useBlog = function (id) {
    const [data, setData] = useState([]);
    const fetchData = (postId) => {
        if (postId) {
            getBlog(postId)
                .then((res) => res.json())
                .then((resp) => setData(resp.data.posts[0]));
        } else {
            getBlog()
                .then((res) => res.json())
                .then((resp) => setData(resp.data.posts));
        }
    };

    useEffect(() => {
        fetchData(id);
    }, [id]);
    return data;
};

export default useBlog;
