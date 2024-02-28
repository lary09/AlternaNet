import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import{App} from "./Componentes/Rutas";
import "./Index.css";
//Routers.

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={App}/>
  </React.StrictMode>,
);
