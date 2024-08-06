import { ReactElement, useState } from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { ITodo } from "./interfaces";

export function App(): ReactElement {

  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  

  const handleOnMovieClick = (movie: ITodo): void => {
    //setMovies(todos.filter((m) => m !== movie));
  };

  return (
    <>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={todos}/>
    </>
  );
}
