import { lazy, LazyExoticComponent } from "react";
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
const Lazy1 = lazy(() => import (/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import (/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import (/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));


export const routes: Route[] = [ // con : Route[] decimos que routes es un arreglo de : Route[]
    {
        to: '/lazy1',
        path: 'lazy1', 
        //Component: LazyPage1, //component a renderizar
        Component: Lazy1, //agregando lazyLoad a la ruta
        name: 'Lazy-1' //nombre a mostrar en la page
    },
    {
        to: '/lazy2',
        path: 'lazy2', 
        //Component: LazyPage2, //component a renderizar
        Component: Lazy2, //agregando lazyLoad a las rutas
        name: 'Lazy-2' //nombre a mostrar en la page
    },
    {
        to: '/lazy3',
        path: 'lazy3', 
        //Component: LazyPage3, //component a renderizar
        Component: Lazy3, //agregando lazyLoad a las rutas
        name: 'Lazy-3' //nombre a mostrar en la page
    },

]