import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router"

import logo from '../assets/react.svg'

//debido a que dentro de carpeta pages se encuentra el archivo index.ts el cual exporta todos los archivos de carpeta pages por lo que se puede seleccionar los archivos a importar
import {  LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"

export const Navigation = () => {
  return (
    <BrowserRouter>
      
      <div className="main-layout">
        <nav>
            <img src={logo} alt="React Logo" />
            <ul>
                <li>
                    {/* desestructura isActive y valida si es true le agrega el estilo CSS 'nav-active' sino no agrega nada, regresa un string vacio '' */}
                    <NavLink to={"/lazy1"} className={ ({isActive}) => isActive ? 'nav-active' : '' }>Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to={"/lazy2"} className={ ({isActive}) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to={"/lazy3"} className={ ({isActive}) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                </li>
            </ul>
        </nav>
    
        <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="lazy1" element={ <LazyPage1 /> } />  {/* <h1>lazy1</h1> */}
            <Route path="lazy2" element={ <LazyPage2 /> } />
            <Route path="lazy3" element={ <LazyPage3 /> } />

            {/* //Si la ruta ingresada no existe redirija al home, y con replace definimos que no pueda regresar */}
            <Route path="/*" element={ <Navigate to="/lazy1" replace/> } />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

