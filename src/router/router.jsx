import { createBrowserRouter } from "react-router-dom";
import GetBooks from "../pages/Admin/GetBooks/GetBooks";
import Layout from "../layout/Admin/Layout";
import AddItemForm from "../components/molecules/Form/AddItemForm/AddItemForm";
import Card from '../components/molecules/Card';
// A medida que tengamos las pages hechas, se añaden en element en su correspondiente path

export const router = createBrowserRouter([
    // Primero el path para cliente admin
    {
        path: "/app",
        element:<Layout />,
        children: [
            {
                path: "/app/new-book",
                element: <AddItemForm />
            },
            {
                path: "/app/books",
                element: <GetBooks />
            }
            {
                path: "/home",
                element: <Card />
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