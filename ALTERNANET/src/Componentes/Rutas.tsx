import React from "react";
import { createBrowserRouter, useRouteError } from "react-router-dom";
import "../Index.css";


//Ruta De Inicio.

const Login: React.FC = () => {


  const enviar = (event: React.FormEvent) => {
    event.preventDefault();
    type Datos = {
      nombre: string;
      contraseña: string;
    }
    const Name: string = (document.getElementById("campo_1") as HTMLInputElement).value;
    const Password: string = (document.getElementById("campo_2") as HTMLInputElement).value;
    const newUsers: Datos = { nombre: Name, contraseña: Password };
    const json_user = JSON.stringify(newUsers);
    console.log(json_user);
  };
  return (
    <div className="fondo_formulario">

      <div className='formulario'>

        <form action="/Login">
          <label htmlFor="campo">  👤 Nombre:</label>
          <input type='text' id='campo_1' placeholder='Nombre' autoComplete="off"/>
          <label htmlFor="campo">🔑 Contraseña:</label>
          <input type='password' id='campo_2' placeholder='Contraseña' autoComplete="off"/>
          <input type='submit' className='botton_press' onClick={enviar}/>
        </form>
      </div>
    </div>
  );

};



//Ruta Error.

const Errorpage: React.FC = () => {
  const error: { statusText: string; message: string } = useRouteError();
  console.error(error);
  return (
    <div id='error-page'>
      <h1>OOPS!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>

        <i>{error.statusText || error.message}</i>
      </p>
    </div>

  );
};


export const App = createBrowserRouter([{
  path: "/login",
  element: <Login />,
  errorElement: <Errorpage />

}]);




