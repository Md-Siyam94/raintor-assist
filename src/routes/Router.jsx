import { Children } from "react";


import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../components/home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
       children: [
            {
                path: "/",
                element: <Home></Home>
            },

        ]
    },
]);

export default router