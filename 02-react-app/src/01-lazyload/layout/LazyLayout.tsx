
import { Navigate, NavLink, Route, Routes } from "react-router";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

const LazyLayout = () => {

  return (
    <div>
      <h1>LazyLayout Page</h1>

      {/* Rutas hijas */}
      <ul>
        <li>
            <NavLink 
                to="/lazyload/lazy1"
                className={({ isActive }) => isActive ? "nav-active" : "" } 
            > 
                Lazy 1 
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/lazyload/lazy2"
                className={({ isActive }) => isActive ? "nav-active" : "" } 
            > 
                Lazy 2 
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/lazyload/lazy3"
                className={({ isActive }) => isActive ? "nav-active" : "" } 
            > 
                Lazy 3 
            </NavLink>
        </li>
      </ul>
 

      <Routes>
        <Route path="lazy1" element={<LazyPage1 />} />
        <Route path="lazy2" element={<LazyPage2 />} />
        <Route path="lazy3" element={<LazyPage3 />} /> 

        {/* //comodin ruta por defecto si no es una ruta de las anteriores */}
        {/* <Route path="*" element={<div>Not found</div>}/> */}
        <Route path="*" element={<Navigate replace to="lazy1"/>} />  
        {/* to={routes[0].to.concat('lazy1')}   to="lazy1"  */}

      </Routes>
    </div>
  )
}

//para trabajar con LazyLoad es necesario exportar por defecto
export default LazyLayout;


