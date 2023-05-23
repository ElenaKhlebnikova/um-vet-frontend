// look into fort awesome icons, probably don't need to install that many packages

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
import Header from './layouts/header/header';
import Footer from './layouts/footer/footer';

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

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>;
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
