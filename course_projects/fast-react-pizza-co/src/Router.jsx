// Required router v6

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader} from "./features/menu/Menu";
import Cart from './features/cart/Cart';
import Order, { loader as orderLoader} from './features/order/Order';
import CreateOrder from './features/order/CreateOrder'
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
                loader: menuLoader
            },
            {
                 path: '/cart',
                 element: <Cart />
            },
            {
                 path: '/order',
                //  element: <Order />,
                 children:[
                    { path: 'new', element: <CreateOrder /> },
                    { path: ':orderId', element: <Order />, loader: orderLoader }
                ]
            }
        ]
    }
    
]);

export default function RouterAplication(){
    return <RouterProvider router={router} />
}
