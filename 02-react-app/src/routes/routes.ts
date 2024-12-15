import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

//define el tipo de los objetos o atributos, para saber que tipo de dato es un component dejar el cursor sobre el nombre del component y ahi dice: () => JSX.Element
interface Route {
    to: string;
    path: string;
    Component: () => JSX.Element;
    name: string;
}

export const routes: Route[] = [ // con : Route[] decimos que routes es un arreglo de : Route[]
    {
        to: '/lazy1',
        path: 'lazy1', 
        Component: LazyPage1, //component a renderizar
        name: 'Lazy-1' //nombre a mostrar en la page
    },
    {
        to: '/lazy2',
        path: 'lazy2', 
        Component: LazyPage2, //component a renderizar
        name: 'Lazy-2' //nombre a mostrar en la page
    },
    {
        to: '/lazy3',
        path: 'lazy3', 
        Component: LazyPage3, //component a renderizar
        name: 'Lazy-3' //nombre a mostrar en la page
    },

]