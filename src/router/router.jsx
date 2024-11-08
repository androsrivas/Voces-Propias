import { createBrowserRouter } from "react-router-dom";
import GetBooks from "../pages/Admin/GetBooks/GetBooks";
import LayoutAdmin from "../layout/LayoutAdmin/LayoutAdmin";
import AddItemForm from "../components/molecules/Form/AddItemForm/AddItemForm";
import ProductListView from "../pages/User/ProductListView/ProductListView";

// A medida que tengamos las pages hechas, se añaden en element en su correspondiente path
export const router = createBrowserRouter([
    // Primero el path para cliente admin
    {
        path: "/app",
        element: <LayoutAdmin />,
        children: [
            {
                path: "/app/new-book",
                element: <AddItemForm />
            },
            {
                path: "/app/books",
                element: <GetBooks />
            },
        ]
    },
    // Segundo el path para usuario
    {
        path: "/",
        element: "",
        children: [
            {
                path: "/books",
                element: <ProductListView />,
            },
            {
                path: "/books/:id",  
                element: "", 
            }
        ]
    }
]);