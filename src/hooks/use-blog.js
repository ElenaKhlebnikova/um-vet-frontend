import { useEffect, useState } from 'react';
import { getBlog } from '../api';

const useBlog = (id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = (postId) => {
        if (postId) {
            getBlog(postId)
                .then((res) => res.json())
                .then((resp) => {
                    setData(resp.data.posts[0]);
                    setLoading(false);
                });
        } else {
            getBlog()
                .then((res) => res.json())
                .then((resp) => {
                    setLoading(false);
                    setData(resp.data.posts);
                });
        }
    };

    useEffect(() => {
        fetchData(id);
    }, [id]);
    return { loading, data };
};

export default useBlog;
