

import {useContext} from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";
import { useTodos } from "../hooks/useTodos";


export const TodoList = () => {

  //toma los todos del context-evita usar props
   // const {todoState} = useContext(TodoContext);
   // const {todos} = todoState;

  //obtiene los todos mediante el customHook useTodos
  const {todos} = useTodos();
  

  return (
    <ul>
      {
      todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
      }
    </ul>
  );
};


