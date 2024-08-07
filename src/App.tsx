import { ReactElement, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { ITodo } from "./interfaces";

export function App(): ReactElement {

  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };


  /*const handleOnMovieClick = (movie: ITodo): void => {
    //setMovies(todos.filter((m) => m !== movie));
  };*/

  const completeClick = (todoClicked: ITodo): void => {
    
    //Bugged if two TODOs have the same title.

    setTodos(todos.map(todo => {
      if (todo.title === todoClicked.title) {
        return { ...todo, isComplete: !todo.isComplete }; 
      }else{
        return todo; 
      }
    })); 

  };

  return (
    <>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos} onCompleteClick={completeClick}/>
    </>
  );
}
