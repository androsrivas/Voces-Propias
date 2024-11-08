import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Admin/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />
    }
]);