import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, redirectDocument,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root.tsx";
import Experiences from './routes/Experiences.tsx';
import Projects from './routes/Projects.tsx';

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
      },
      {
        path: "projects",
        element: <Projects/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
