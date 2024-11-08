import { createBrowserRouter } from "react-router-dom";
import GetBooks from "../pages/Admin/GetBooks/GetBooks";
import Layout from "../layout/Admin/Layout";
import AddItemForm from "../components/molecules/Form/AddItemForm/AddItemForm";

export const router = createBrowserRouter([
    
    {
        path: "/",
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