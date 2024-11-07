import { createBrowserRouter } from "react-router-dom";
import GetBooks from "../pages/Admin/GetBooks/GetBooks";
import Layout from "../layout/Admin/Layout";
import AddItemForm from "../components/molecules/Form/AddItemForm/AddItemForm";
import Test from "../pages/Admin/test";
// A medida que tengamos las pages hechas, se añaden en element en su correspondiente path

export const router = createBrowserRouter([
    // path for testing
    {
        path: "/",
        element: <Test />
    },
    {
        path: "/app",
        element:<Layout />,
        children: [
            {
                path: "books",
                element: <GetBooks />
            },
            {
                path: "new-book",
                element: <AddItemForm />
            }
        ]
    }
]);