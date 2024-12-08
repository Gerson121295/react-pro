import { Todo, TodoState } from '../interfaces/interfaces';


type TodoAction = 
    | {type: 'addTodo', payload: Todo}
    | {type: 'toggleTodo', payload: {id:string}};

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {

   // console.log(action)

    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todos:[ 
                    ...state.todos, 
                    action.payload
                ]
            }
        
        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map(({...todo}) => {  //...todo spread, {...todo} rest
                    if(todo.id === action.payload.id){  //si id del todo es igual al id del todo que tiene el del payload
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
    
        default:
            break;
    }
}