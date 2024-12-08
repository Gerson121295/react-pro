import { ChangeEvent, useState } from "react"
import { useForm } from "../hooks/useForm"


interface FormData {
    email: string;
    nombre: string;
    edad: number
}

export const Formulario = () => {

    //LLamada al customHook useForm recibe los estados del form y se extra las funcion y form
/*     const {formulario, handleChange} = useForm<FormData>({
        email: 'gerson@gmail.com',
        nombre: 'Gerson Ep',
        edad: 35
    });

    //desestructura formulario para obtener el email y nombre
    const {email,nombre, edad} = formulario; */

//LLamada al customHook useForm recibe los estados del form y se extra las funcion y campos del form ya que en en el hook se agrego: ...formulario
    const {email, nombre, edad, formulario, handleChange} = useForm<FormData>({
        email: 'gerson@gmail.com',
        nombre: 'Gerson Ep',
        edad: 35
    });

    //Codigo reemplazado por el CustomHook useForm.tsx
 /*    const [formulario, setFormulario] = useState({
        email: '',
        nombre: ''
    }); */

/*
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => { //HTMLInputElement es el tipo de dato que se especifica para input y otros
        console.log(ev.target.name);
        console.log(ev.target.value);
    }
*/

//se desestructura ev para acceder al target
/* const handleChange = ({target}: ChangeEvent<HTMLInputElement>) => { //HTMLInputElement es el tipo de dato que se especifica para input y otros
    const {name, value } = target;
    //console.log(name, value);

    //cambiar el estado de formulario
    setFormulario({
        ...formulario, //espace los datos del formulario
        [name]:value //cambia el name por el valor actual
    });
} */



  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">
                Email:
            </label>
            <input 
                type="email" 
                className="form-control"
                name="email"
                //onChange={(ev) => handleChange(ev)} //cuando el ev es el mismo a enviar se omite
                //value={formulario.email}
                value={email}
                onChange={handleChange} 
            />
        </div>
        <div className="mb-3">
            <label className="form-label">
                Nombre:
            </label>
            <input 
                type="text" 
                className="form-control"
                name="nombre"
                //value={formulario.nombre}
                value={nombre}
                onChange={handleChange} 
            />
        </div>

        <div className="mb-3">
            <label className="form-label">
                Edad:
            </label>
            <input 
                type="number" 
                className="form-control"
                name="edad"
                //value={formulario.nombre}
                value={edad}
                onChange={handleChange} 
            />
        </div>


        <pre>{JSON.stringify(formulario)}</pre>

    </form>
  )
}


