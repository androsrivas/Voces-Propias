import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Admin/Layout";
import GetBooks from "../pages/Admin/GetBooks/GetBooks";
import CreateBook from "../pages/Admin/CreateBook/CreateBook";

export const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <Layout />,
        children: [
            {
                path: "new-book",
                element: <CreateBook />
            },
            {
                path: "books",
                element: <GetBooks />
            }
        ]
    }
]);
