import { ChangeEvent, useState } from "react";

    //Usando funcion tradicional
    //export function useForm<T>(initState:T){  //<T> sig que el tipo de dato recibido es un generico
   
    //Usando funcion de flecha
    //export const useForm = (initialState:any) => {
    export const useForm = <T extends Object> (initState:T) => {  //extra o si es un array: | T extends Array  //  <T extends Object | T extends Array>

    const [formulario, setFormulario] = useState(initState);

/*
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => { //HTMLInputElement es el tipo de dato que se especifica para input y otros
        console.log(ev.target.name);
        console.log(ev.target.value);
    }
*/
//se desestructura ev para acceder al target
const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => { //HTMLInputElement es el tipo de dato que se especifica para input y otros
    const {name, value } = target;
    //console.log(name, value);

    //cambiar el estado de formulario
    setFormulario({
        ...formulario, //espace los datos del formulario
        [name]:value //cambia el name por el valor actual
    });
}

//retorna un objeto con todo lo que se necesite(funciones, variables, etc.)
return{
    formulario, //exporta el formulario con los datos
    handleChange,//exporta la funcion para cambiar campos en el form
    ...formulario //exporta los datos del formulario, cada campo para que se pueda acceder con su nombre
}


}