import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"


export const useTodos = () => {

    //Accede a func mediante el TodoContext
    const { todoState, toggleTodo } = useContext(TodoContext);
    const {todos} = todoState

return {
    //funciones que retorna el customHook
    todos: todos,//todos: todoState.todos, //no usado xq se desestructuro
    pendingTodos: todos.filter(todo => !todo.completed).length, //filtra los todos que sea false
    toggleTodo,
    }
}



