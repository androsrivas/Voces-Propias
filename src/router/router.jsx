import { createBrowserRouter } from "react-router-dom";
import GetBooks from "../pages/Admin/GetBooks/GetBooks";
import LayoutAdmin from "../layout/Admin/LayoutAdmin";
import AddItemForm from "../components/molecules/Form/AddItemForm/AddItemForm";
import ProductListView from "../pages/User/ProductListView/ProductListView";

// A medida que tengamos las pages hechas, se añaden en element en su correspondiente path

export const router = createBrowserRouter([
    // path for testing
    {
        path: "/",
        element: <Test />
    },
    {
        path: "/app",
        element:<LayoutAdmin />,
        children: [
            {
                path: "books",
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
                children: [
                    {
                        path: "/books:id",
                        element: <ProductListView /> //no existe aún 
                    }
                ]
            }
        ]
    }
]);