
import {useReducer} from 'react';
import { TodoContext } from "./TodoContext"
import { TodoState } from '../interfaces/interfaces';
import { todoReducer } from './todoReducer';


const INITIAL_STATE: TodoState={
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las primeras gemas',
            completed: false
        },
        {
            id: '2',
            desc: 'Piedra del alma',
            completed: false
        },
    ],
    completed: 0,
    pending: 2
}

interface props{
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}: props) => { //children viene de las props
    
    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)
    
    const toggleTodo = (id: string) => {
        dispatch({type: 'toggleTodo', payload:{id}}) //id:id  el id es igual al que se recibe
    }

    
    return (
        //retorna a los hijos del provider, func definidas en TodoContext
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}