import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Admin/Layout";
import GetBooks from "../pages/Admin/GetBooks/GetBooks";
import CreateBook from "../pages/Admin/CreateBook/CreateBook";
import LayoutUser from "../layout/User/LayoutUser";


export const router = createBrowserRouter([
    {
        path: "/",
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
        path: "/",
        element: <LayoutUser />, 
        children: [
            {
                path: "/",  
                element: <ProductListView />
            },
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
