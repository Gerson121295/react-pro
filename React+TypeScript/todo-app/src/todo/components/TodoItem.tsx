
import { useContext } from "react";
import { Todo } from "../interfaces/interfaces";
import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";



interface props {
    todo: Todo
}

export const TodoItem = ({todo}: props) => {

    //Obtiene la informacion por medio de TodoContext y no por props
   // const {toggleTodo} = useContext(TodoContext)

   //Obtiene la informacion del customHook useTodos
   const {toggleTodo } = useTodos();

    const handleDbClick = () => {
        //console.log('handleDbClick:', todo.desc)
        toggleTodo(todo.id)
    }

    return (
        <li 
        style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : '' //si todo es true aparece con linea tachada, si no, no aparece tachado
        }}
           // onDoubleClick={handleDbClick}  //usando la funcion
           onDoubleClick={() => toggleTodo(todo.id)}

        >
            {todo.desc}
        </li>
    )
}



