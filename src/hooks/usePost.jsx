/* eslint-disable comma-dangle */

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
