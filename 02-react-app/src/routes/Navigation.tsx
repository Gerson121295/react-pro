import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router"

import logo from '../assets/react.svg'

//debido a que dentro de carpeta pages se encuentra el archivo index.ts el cual exporta todos los archivos de carpeta pages por lo que se puede seleccionar los archivos a importar
//import {  LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"

import { routes } from "./routes"
import { Suspense } from "react"

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span>}> {/* Suspense indica a react estoy cargando modulo, espera pero mientras carga haz lo siguiente  */}
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(
                (
                  { to, name } // route => (  //sin desestructurar el route
                ) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) => isActive ? "nav-active" : "" }
                    >
                      {name}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>

          <Routes>
            {/* <Route path="/" element={<App />} /> */}
            {routes.map(
              (
                { path, Component } //route => (
              ) => (
                <Route key={path} path={path} element={<Component />} />
              )
            )}

            {/* //Si la ruta ingresada no existe redirija al home(primer ruta de routes.ts), y con replace definimos que no pueda regresar */}
             <Route path="/*" element={<Navigate to={routes[0].to} replace />} />    {/*   to={routes[0].to}     to={routes[0].to.concat('lazy1')}*/}
             
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

