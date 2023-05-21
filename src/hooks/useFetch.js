/* eslint-disable comma-dangle */
import { useState, useEffect } from 'react';

// use arrow functions instead of regular functions everywhere in frontend and as well as backend

// rename to useFetcher
const useFetch = function (route, queryName, query) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchFunction = async function () {
            if (query) {
                await fetch(
                    `http://localhost:5000/${route}?${queryName}=${query}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
                    .then((res) => res.json())
                    .then((resp) => {
                        if (resp.data !== undefined && resp.data !== []) {
                            setData(resp.data);
                        }
                    });
            } else {
                await fetch(`http://localhost:5000/${route}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((res) => res.json())
                    .then((resp) => {
                        setData(resp.data);
                    });
            }
        };

        fetchFunction();
    }, [route, queryName, query]);

    return data;
};

export default useFetch;
