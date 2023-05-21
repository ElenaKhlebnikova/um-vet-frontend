/* eslint-disable linebreak-style */
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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/our-team',
        element: <OurTeam />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/:doctorId/appointments',
        element: <Calendar />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/:doctorId/comments',
        element: <CommentsPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/appointments',
        element: <Calendar />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/service-and-price',
        element: <ServiceAndPrice />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/contacts',
        element: <Contact />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/blog',
        element: <Blog />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/blog/:postId',
        element: <Post />,
        errorElement: <ErrorPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
