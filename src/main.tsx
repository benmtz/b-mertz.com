import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, redirectDocument,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root.tsx";
import Experiences from './routes/Experiences.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    loader: () => {
      if (location.pathname === "/") {
        return redirectDocument("/experiences")
      }
      return null
    },
    children: [
      {
        path: "experiences",
        element: <Experiences/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
