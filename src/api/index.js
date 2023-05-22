const URL = 'http://localhost:5000';

const headers = {
    'Content-Type': 'application/json',
};

// All GET REQUESTS
const getServiceAndPrice = () =>
    fetch(`${URL}/service-and-prices`, { method: 'GET', headers });

const getComments = (id) =>
    fetch(`${URL}/comments?doctorId=${id}`, { method: 'GET', headers });

const getDoctors = (id) => {
    if (!id) {
        return fetch(`${URL}/doctors`, { method: 'GET', headers });
    } else {
        return fetch(`${URL}/doctors?doctorId=${id}`, {
            method: 'GET',
            headers,
        });
    }
};

const getAppointments = (id) => {
    if (!id) {
        return fetch(`${URL}/appointments`, { method: 'GET', headers });
    } else {
        return fetch(`${URL}/appointments?doctorId=${id}`, {
            method: 'GET',
            headers,
        });
    }
};

const getBlog = (id) => {
    if (!id) {
        return fetch(`${URL}/blog`, { method: 'GET', headers });
    } else {
        return fetch(`${URL}/blog?postId=${id}`, { method: 'GET', headers });
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
