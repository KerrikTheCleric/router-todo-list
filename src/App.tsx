import { ReactElement, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { ITodo } from "./interfaces";

export function App(): ReactElement {

  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const completeClick = (todoClicked: ITodo): void => {
    
    setTodos(todos.map(todo => {
      if (todo === todoClicked) {
        return { ...todo, isComplete: !todo.isComplete }; 
      }else{
        return todo; 
      }
    })); 

  };

  const deleteClick = (todo: ITodo): void => {
    setTodos(todos.filter((t) => t !== todo));
  };

  return (
    <>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} onCompleteClick={completeClick} onDeleteClick={deleteClick}/>
    </>
  );
}
