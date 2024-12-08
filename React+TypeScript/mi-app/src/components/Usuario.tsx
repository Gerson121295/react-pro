import { useState } from "react"

//Clases o interfaces para agregar tipado a los objetos
interface User {
    uid: string;
    name: string;
}

const tempUser: User ={
    uid: 'XYZ',
    name: 'Juan Pérez'
}


export const Usuario = () => {

    //const [user, setUser] = useState<User>({ uid: 'ABC123', name: 'Gerson Ep' }); //otra opcion es definir el objeto en el estado inicial del useState
    const [user, setUser] = useState<User>(); //agregar en useState <User>  sig. que manejara un User definido arriba en la interface

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Gerson Ep'
        })
    }

  return (
    <div className="mt-5">
      <h3>Usuario:</h3>

      <button
        onClick={login}
        className="btn btn-outline-primary"
      >
        Login
      </button>

    {
        (!user)
            ? <pre> No hay usuario</pre>
            : <pre> {JSON.stringify(user)}</pre>
    }
      
    </div>
  )
}


