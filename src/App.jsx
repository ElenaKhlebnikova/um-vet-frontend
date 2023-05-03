/* eslint-disable linebreak-style */
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";

import Landing from "./layouts/landing/landing";
import Calendar from "./layouts/pages/calendar/calendar";
import OurTeam from "./layouts/pages/our-team/our-team";
import ErrorPage from "./components/reusable_components/error-page/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/our-team",
    element: <OurTeam />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/appointments",
    element: <Calendar />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
