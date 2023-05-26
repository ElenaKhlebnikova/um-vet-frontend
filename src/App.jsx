import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './layouts/pages/landing/landing';
import Calendar from './layouts/pages/calendar/calendar';
import OurTeam from './layouts/pages/our-team/our-team';
import ErrorPage from './layouts/pages/error-page/error-page';
import ServiceAndPrice from './layouts/pages/service-and-prices/service-and-prices';
import CommentsPage from './layouts/pages/our-team/comments-page/comments-page';
import Contact from './layouts/pages/contact/contact';
import Blog from './layouts/pages/blog/blog';
import Post from './layouts/pages/blog/post';
import Layout from './layouts/layout/layout';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout props={<Landing />} />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/our-team',
            element: <Layout props={<OurTeam />} />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/:doctorId/appointments',
            element: <Layout props={<Calendar />} />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/:doctorId/comments',
            element: <Layout props={<CommentsPage />} />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/appointments',
            element: <Layout props={<Calendar />} />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/service-and-price',
            element: <Layout props={<ServiceAndPrice />} />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/contacts',
            element: <Layout props={<Contact />} />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/blog',
            element: <Layout props={<Blog />} />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/blog/:postId',
            element: <Post />,
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
