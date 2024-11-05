import { createBrowserRouter } from "react-router-dom";
// A medida que tengamos las pages hechas, se añaden en element en su correspondiente path

export const router = createBrowserRouter([
    // Primero el path para cliente admin
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/home",
                element: ""
            },
            {
                path: "/new-book",
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