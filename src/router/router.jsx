import { createBrowserRouter } from "react-router-dom";
import CreateBook from "../pages/CreateBook/CreateBook";
import Books from "../pages/Books/Books";
import Layout from "../layout/Layout";
// A medida que tengamos las pages hechas, se añaden en element en su correspondiente path

export const router = createBrowserRouter([
    // Primero el path para cliente admin
    {
        path: "/app",
        element:<Layout />,
        children: [
            {
                path: "/app/books",
                element: <Books />
            },
            {
                path: "/app/new-book",
                element: <CreateBook />
            }
        ]
    },
    // Segundo el path para usuario
    {
        path: "/",
        element: "",
        children: [
            {
                path: "/home",
                element: ""
            },
            {
                path: "/books",
                element: "",
                children: [
                    {
                        path: "/books:id",
                        element: ""
                    }
                ]
            }
        ]
    }
]);