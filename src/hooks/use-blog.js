import { useEffect, useState } from 'react';
import { getBlog } from '../api';

const useBlog = (locale, id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = (lang, postId) => {
        if (postId) {
            getBlog(lang, postId)
                .then((res) => res.json())
                .then((resp) => {
                    setData(resp.data.data[0]);
                    setLoading(false);
                });
        } else {
            getBlog(lang)
                .then((res) => res.json())
                .then((resp) => {
                    setLoading(false);
                    setData(resp.data.data);
                });
        }
    };

    useEffect(() => {
        fetchData(locale, id);
    }, [id, locale]);
    return { loading, data };
};

export default useBlog;
