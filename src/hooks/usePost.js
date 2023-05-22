/* eslint-disable comma-dangle */

// This should not be a hook since it's not using any React hooks inside it, it should be a function

// Maybe, create a folder called API which contains a file called index.js
// and this file export calls to the `Fetch` API for fetching data and creating data

// useCreator
const usePost = async function (route, data) {
    await fetch(`http://localhost:5000/${route}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data,
        }),
    });
};

export default usePost;
