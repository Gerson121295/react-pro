

import {createContext} from 'react';
import { TodoState } from '../interfaces/interfaces';

export type TodoContextProps = {
    // retornar a los que requieran, establecido en TodoProvider
    todoState: TodoState,
    toggleTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);



