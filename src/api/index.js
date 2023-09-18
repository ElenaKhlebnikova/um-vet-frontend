const URL = 'https://nodejs-production-ee89.up.railway.app';
const headers = {
    'Content-Type': 'application/json',
};

// All GET REQUESTS
const getServiceAndPrice = (lang) =>
    fetch(`${URL}/service-and-prices?lang=${lang}`, { method: 'GET', headers });

const getComments = (id) =>
    fetch(`${URL}/comments/${id}`, { method: 'GET', headers });

const getDoctors = (lang, id) => {
    if (!id) {
        return fetch(`${URL}/doctors?lang=${lang}`, { method: 'GET', headers });
    } else {
        return fetch(`${URL}/doctors/${id}?lang=${lang}`, {
            method: 'GET',
            headers,
        });
    }
};

const getAppointments = (id) => {
    if (!id) {
        return fetch(`${URL}/appointments`, { method: 'GET', headers });
    } else {
        return fetch(`${URL}/appointments/${id}`, {
            method: 'GET',
            headers,
        });
    }
};

const getBlog = (lang, id) => {
    if (!id) {
        console.log(lang);
        return fetch(`${URL}/blog?lang=${lang}`, { method: 'GET', headers });
    } else {
        return fetch(`${URL}/blog/${id}?lang=${lang}`, {
            method: 'GET',
            headers,
        });
    }
};

// All POST requests

const createComment = (data) =>
    fetch(`${URL}/comments`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    });

const createAppointment = (data) =>
    fetch(`${URL}/appointments`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    });

export {
    getDoctors,
    getServiceAndPrice,
    getAppointments,
    getBlog,
    getComments,
    createComment,
    createAppointment,
};
