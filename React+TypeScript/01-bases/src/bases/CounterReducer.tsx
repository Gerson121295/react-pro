import { useReducer} from "react"

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}


const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 15,
  changes: 20
}

type CounterAction = 
    | {type: 'increaseBy', payload: {value:number;}}
    | {type: 'reset'};

//func produce un nuevo estado
const counterReducer = (state:CounterState, action: CounterAction): CounterState => { //fun counterReducer retorna un tipo :CounterState
  
  //se desestructura de state el counter y changes
  const {counter, changes } = state;

  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        previous: 0,
        changes: 0
      }

    case 'increaseBy':
      return {
      /*  //Usando los valores de state sin desestructuralo
        changes: state.changes +1,
        counter: state.counter + action.payload.value,
        previous: state.counter */

      //No es necesario agregar state en counter y changes debido a que se desestructuro
        changes: changes +1,
        counter: counter + action.payload.value,
        previous: counter 
      }

    default:
      return state;
  }

}


export const CounterReducerComponent = () => {  //con :Props se define el tipo de dato que se recibe en las props proveniente del padre

    //const [counter, setCounter] = useState(0);

    //useReducer() //maneja el estado de la aplicacion, cuando el estado es complejo, es parecido al useState()
    //const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE)
    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
      //dipatch despacha la accion a realizar
        dispatch({type: 'reset'})
    }

    const increaseBy = (value:number) => {
        dispatch({type: 'increaseBy', payload: {value} }); //el value:value el value es igual al que se recibe de argumento por lo tanto se puede escribir solo 1 vez
    }


  return (
    
    <>
      <h1>Counter Reducer</h1>
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


