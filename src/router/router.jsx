import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Admin/Layout";
import GetBooks from "../pages/Admin/GetBooks/GetBooks";
import CreateBook from "../pages/Admin/CreateBook/CreateBook";
import LayoutUser from "../layout/User/LayoutUser";
import ProductListView from "../pages/User/ProductListView/ProductListView";


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
    },
    {
        path: "/app",
        element: <LayoutUser />, 
        children: [
            {
                path: "books",
                element: <ProductListView />, 
            },
           
        ]
    }
]);
