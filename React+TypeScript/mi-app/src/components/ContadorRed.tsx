import { useReducer } from "react";


const initialState = {
    contador: 0,
}


//Tipo de acciones
type ActionType = 
    | { type: 'incrementar'}
    | { type: 'decrementar'}
    | { type: 'custom', payload: number};   


const contadorReducer = (state: typeof initialState, action: ActionType) => {

    switch(action.type){
        case 'incrementar': //accion de incrementar
            return {
                ...state, //sparce todos los datos anteriores, copia del state
                contador: state.contador + 1 //modifica contador
            }
        
        case 'decrementar': //accion de decrementar
            return {
                ...state, //sparce todos los datos anteriores
                contador: state.contador - 1 //modifica contador
            }

        case 'custom': //accion de decrementar
            return {
                ...state, //sparce todos los datos anteriores
                contador: action.payload
            }

            default:
                return state;
    }
}


export const ContadorRed = () => {

    /* const [contadorState, dispatch] = useReducer(contadorReducer, initialState); */
    const [{contador}, dispatch] = useReducer(contadorReducer, initialState);

  return (
    <>
      {/* <h2>Contador: {contadorState.contador}</h2> */}
      <h2>Contador: {contador}</h2>

      <button 
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: 'incrementar'})}
      >
        +1
      </button>

      <button 
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: 'decrementar'})}
      >
        -1
      </button>

      <button 
        className="btn btn-outline-danger"
        onClick={() => dispatch({ type: 'custom', payload:100})}
      >
        100
      </button>


    </>
  )
}


