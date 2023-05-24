import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
        element: (
            <>
                <Header />
                <Landing />,
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/our-team',
        element: (
            <>
                <Header />
                <OurTeam />,
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/:doctorId/appointments',
        element: (
            <>
                <Header />
                <Calendar />,
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/:doctorId/comments',
        element: (
            <>
                <Header />
                <CommentsPage />,
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/appointments',
        element: (
            <>
                <Header />
                <Calendar />,
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/service-and-price',
        element: (
            <>
                <Header />
                <ServiceAndPrice />,
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/contacts',
        element: (
            <>
                <Header />
                <Contact />,
                <Footer />
            </>
        ),
        errorElement: <ErrorPage />,
    },
    {
        path: '/blog',
        element: (
            <>
                <Header />
                <Blog />,
                <Footer />
            </>
        ),
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
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
