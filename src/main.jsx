import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import './index.css'
import Store from './component/Store/Store';
import Welcome from './component/Welcome/Welcome';
import Product from './component/Product/Product';
import ShoppingCart from './component/ShoppingCart/ShoppingCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "store/:productId",
        element: <Product />,
      },
      {
        path: "cart",
        element: <ShoppingCart />
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
