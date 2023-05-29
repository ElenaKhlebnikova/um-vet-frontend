import React, { useState } from 'react';
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
    const [locale, setLocale] = useState('en');

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <Layout
                    setLocale={setLocale}
                    locale={locale}
                    props={<Landing locale={locale} />}
                />
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: '/our-team',
            element: (
                <Layout
                    setLocale={setLocale}
                    locale={locale}
                    props={<OurTeam locale={locale} />}
                />
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: '/:doctorId/appointments',
            element: (
                <Layout
                    setLocale={setLocale}
                    locale={locale}
                    props={<Calendar locale={locale} />}
                />
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: '/:doctorId/comments',
            element: (
                <Layout
                    setLocale={setLocale}
                    locale={locale}
                    props={<CommentsPage locale={locale} />}
                />
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: '/appointments',
            element: (
                <Layout
                    setLocale={setLocale}
                    locale={locale}
                    props={<Calendar locale={locale} />}
                />
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: '/service-and-price',
            element: (
                <Layout
                    setLocale={setLocale}
                    locale={locale}
                    props={<ServiceAndPrice locale={locale} />}
                />
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: '/contacts',
            element: (
                <Layout
                    setLocale={setLocale}
                    locale={locale}
                    props={<Contact locale={locale} />}
                />
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: '/blog',
            element: (
                <Layout
                    setLocale={setLocale}
                    locale={locale}
                    props={<Blog locale={locale} />}
                />
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: '/blog/:postId',
            element: (
                <Layout
                    setLocale={setLocale}
                    locale={locale}
                    props={<Post locale={locale} />}
                />
            ),
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
