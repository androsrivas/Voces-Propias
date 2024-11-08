import { createBrowserRouter } from "react-router-dom";
// import CreateBook from "../pages/CreateBook/CreateBook";
import Books from "../pages/Books/Books";
import Layout from "../layout/Layout";


export const router = createBrowserRouter([

    {
        path: "/",
        element:<Layout />,
        children: [
            {
                path: "books",
                element: <Books />
            },
            {
                path: "new-book",
                element: ""
            }
        ]
    }
]);