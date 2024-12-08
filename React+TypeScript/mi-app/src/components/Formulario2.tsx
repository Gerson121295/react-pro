import { useForm } from "../hooks/useForm";



interface FormData {
    postal: string;
    ciudad: string;
}

export const Formulario2 = () => {

    //LLamada al customHook useForm recibe los estados del form y se extra las funcion y form
    const {formulario, handleChange} = useForm<FormData>({
        postal: 'ABC',
        ciudad: 'Otawa'
    });

    //desestructura formulario para obtener el email y nombre
    const {postal, ciudad} = formulario;


  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">
                Codigo Postal
            </label>
            <input 
                type="text" 
                className="form-control"
                name="postal"
                 value={postal}
                onChange={handleChange} 
            />
        </div>
        <div className="mb-3">
            <label className="form-label">
                Ciudad
            </label>
            <input 
                type="text" 
                className="form-control"
                name="ciudad"
                //value={formulario.nombre}
                value={ciudad}
                onChange={handleChange} 
            />
        </div>

        <pre>{JSON.stringify(formulario)}</pre>

    </form>
  )
}


