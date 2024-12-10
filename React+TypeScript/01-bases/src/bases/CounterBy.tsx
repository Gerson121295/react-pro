import { useState } from "react"

//interfaces para definir el tipo de dato de variables
interface Props {
    initialValue?: number //agregar el ? sig. que initialValue es opcional, por lo tanto en el padre no es necesario definirlo
}

interface CounterState {
  counter: number;
  clicks: number;
}


export const CounterBy = ({initialValue=5}:Props) => {  //con :Props se define el tipo de dato que se recibe en las props proveniente del padre

  //counter tiene el estado o valor y setcounter permite modificar el valor y en useState permite inicializarlo
    //const [counterState, setCounterState] = useState<CounterState>({
      const [{counter, clicks}, setCounterState] = useState<CounterState>({
      counter: initialValue,
      clicks: 0,
    });

  //const {counter, clicks} = counterState; //desestructura counterState

    const handleClick = (value:number) => {
  
        setCounterState(({clicks, counter}) => ({
          counter: counter + value,
          clicks: clicks + 1
        })); 
    }

    
  return (
    
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>

      <button onClick={ () => handleClick(1) } >
        +1
      </button>
      <button onClick={ () => handleClick(5) } >
        +5
      </button>
    </>
  )
}


