import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Catalog from "./pages/catalog/Catalog";
import About from "./pages/About/About";
import Contact from './pages/contact/Contact';
import Admin from './pages/admin/Admin';

export const Routes = () => {
    const PublicRoute = [
        {
            children: [
                { path: "/", element: <Home /> },
                { path: "/Catalog", element: <Catalog /> },
                { path: "/about", element: <About /> },
                { path: "/Contact", element: <Contact /> },
                { path: "/admin", element: <Admin /> },
            ],
        },
    ];

    return useRoutes(PublicRoute);
};
