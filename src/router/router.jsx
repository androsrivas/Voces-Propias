import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Admin/Layout";
import GetBooks from "../pages/Admin/GetBooks/GetBooks";
import CreateBook from "../pages/Admin/CreateBook/CreateBook";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/app/new-book",
                element: <AddItemForm />
            },
            {
                path: "/app/books",
                element: <GetBooks />
            },
            {
                path: "new-book",
                element: <CreateBook />
            }
        ]
    }
]);
