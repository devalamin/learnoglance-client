import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/Courses/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Checkout from "../components/pages/Checkout/Checkout";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import Login from "../components/shared/Login/Login";
import Registration from "../components/shared/Registration/Registration";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/courses',
                element: <Courses></Courses>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/course-details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://learno-glance-server.vercel.app/course-details/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learno-glance-server.vercel.app/checkout/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])