import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;


//define el tipo de los objetos o atributos, para saber que tipo de dato es un component dejar el cursor sobre el nombre del component y ahi dice: () => JSX.Element
interface Route {
    to: string;
    path: string;
    //Component: () => JSX.Element;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

//LazyLoad a las rutas: nombre del chunk: /* webpackChunkName: "LazyPage1" */
const LazyLayout = lazy(() => import (/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [ // con : Route[] decimos que routes es un arreglo de : Route[]
    {
        to: '/lazyload/',
        path: '/lazyload/*', //lazyload es toda la ruta y con el *define que todo lo que venga de esa ruta pasa por ese path 
        //Component: LazyPage1, //component a renderizar
        Component: LazyLayout, //agregando lazyLoad a la ruta
        name: 'LazyLayout - Dash' //nombre a mostrar en la page
    },
    {
        to: '/no-lazy',
        path: 'no-lazy', 
        //Component: LazyPage2, //component a renderizar
        Component: NoLazy, //este componnete no tiene lazyLoad
        name: 'No Lazy' //nombre a mostrar en la page
    },
  
]