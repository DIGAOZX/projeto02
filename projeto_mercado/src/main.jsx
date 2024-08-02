import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from"react-router-dom"

import Ainicio from "./routes/Ainicio.jsx"
import Bmeio from "./routes/Bmeio.jsx"
import Cfim from "./routes/Cfim.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ainicio />
  },
  {
    path: "/meio",
    element: <Bmeio />
  },
  {
    path: "/final",
    element: <Cfim />
  }
]);

export default router;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
