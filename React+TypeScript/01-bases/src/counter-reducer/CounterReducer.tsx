import { useReducer} from "react"
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

//Evitar realizar las importaciones de cada funcion se puede definir en un objeto
//import { doIncreaseBy, doReset } from "./actions/actions";
import * as CounterActions from "./actions/actions";

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 15,
  changes: 20
}


export const CounterReducerComponent = () => {  //con :Props se define el tipo de dato que se recibe en las props proveniente del padre

    //const [counter, setCounter] = useState(0);

    //useReducer() //maneja el estado de la aplicacion, cuando el estado es complejo, es parecido al useState()
    //const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)
    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
      //dipatch despacha la accion a realizar
        //dispatch(doReset()); //doReset funcion definida en actions
        dispatch(CounterActions.doReset()); //llamada de la funcion desde la importacion donde se define el objeto que contiene las funciones
    }

    const increaseBy = (value:number) => {
        //dispatch(doIncreaseBy(value));  //forma1 de llamada de la funcion
        dispatch(CounterActions.doIncreaseBy(value));  

        //Forma 2 de realizar un dispatch no recomendada, lo recomendado es definir la funcion en actions.ts
      //dispatch({type: 'increaseBy', payload: {value} }); //el value:value el value es igual al que se recibe de argumento por lo tanto se puede escribir solo 1 vez
    }


  return (
    
    <>
      <h1>Counter Reducer Segmentado</h1>
      <pre>
        {JSON.stringify(counterState, null, 2)} {/* // null en replace y espacio de 2 */}
      </pre>

      <button 
        onClick={ () => increaseBy(1)}
      >
        +1
      </button>
 
      <button 
        onClick={ () => increaseBy(5)}
      >
        +5
      </button>

      <button 
        onClick={ () => increaseBy(10)}
      >
        +10
      </button>

      <button 
        onClick={handleReset}
      >
        Reset
      </button>
                                                                                                                                   
    </>
  )
}


