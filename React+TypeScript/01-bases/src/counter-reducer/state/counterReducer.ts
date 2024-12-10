import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

//func produce un nuevo estado
export const counterReducer = (state:CounterState, action: CounterAction): CounterState => { //fun counterReducer retorna un tipo :CounterState
  
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