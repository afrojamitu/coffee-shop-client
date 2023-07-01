import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import NotFound from './Components/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound></NotFound>
  },
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffee-shop-server-psi.vercel.app/coffee')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://coffee-shop-server-psi.vercel.app/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
