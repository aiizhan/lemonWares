import { createBrowserRouter } from "react-router-dom";
import Layout from "../../features/Layout/Layout";
import ErrorPage from "../../features/ErrorPage/ErrorPage";
import Home from "../../features/Home/Home";
import OurServices from "../../features/OurServices/OurServices";
import Pricing from "../../features/Prising/Prising";


const router =createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: 'prising',
                        element:<Pricing/>
                    }
                ]
            }
        ]
    },
    {
        path: 'ourservices',
        element: <OurServices/>,
        errorElement: <ErrorPage />,
    }
])

export default router