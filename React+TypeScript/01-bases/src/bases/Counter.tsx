import { useState } from "react"

//interfaces para definir el tipo de dato de variables
interface Props {
    initialValue?: number //agregar el ? sig. que initialValue es opcional, por lo tanto en el padre no es necesario definirlo
}

export const Counter = ({initialValue=0}:Props) => {  //con :Props se define el tipo de dato que se recibe en las props proveniente del padre

    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => {
        //setCounter (counter + 1);
        setCounter( prev => prev +1); //al valor anterior se le suma 1
    }

  return (
    
    <>
      <h1>Counter: {counter}</h1>
      <button 
        onClick={handleClick}
      >
        +1
      </button>
    </>
  )
}


